import { type Prisma, type DriverOnlineSession } from '@prisma/client'
import { DriverOnlineSessionOnlineStatusEnum, DriverOnlineSessionWorkingStatusEnum } from '../../repository/driver/driver_online_session.repository'
import { type IDriverOnlineSessionRepo, type IDriverRepo } from '../../repository/driver/driver.interface'
import { type IUpdateDriverLoginSession, type IDriverOnlineSessionService, type ISwitchOnOffStatusInput } from './driver.interface'

export class DriverOnlineSessionService implements IDriverOnlineSessionService {
  private readonly driverOnlineSessionRepo: IDriverOnlineSessionRepo
  private readonly driverRepo: IDriverRepo
  constructor (driverOnlineSessionRepo: IDriverOnlineSessionRepo, driverRepo: IDriverRepo) {
    this.driverOnlineSessionRepo = driverOnlineSessionRepo
    this.driverRepo = driverRepo
  }

  async switchOnOffStatus (input: ISwitchOnOffStatusInput): Promise<DriverOnlineSession | null> {
    if (input.type === DriverOnlineSessionOnlineStatusEnum.ONLINE) {
      return await this.driverOnlineSessionRepo.hardDelete(input.driverId)
    }
    const driverData = await this.driverRepo.getDriver(input.driverId)
    if (!driverData) {
      // throw new BusinessError('User not existed', 'UserNotFound') TODO Handle error at for
      throw new Error('DriverNotFound')
    }

    try {
      const created = await this.driverOnlineSessionRepo.createOne({
        driver: {
          connect: { id: driverData.id }
        },
        currentLatitude: input.lat,
        currentLongitude: input.long,
        onlineStatus: DriverOnlineSessionOnlineStatusEnum.ONLINE,
        workingStatus: DriverOnlineSessionWorkingStatusEnum.WAITING_FOR_CUSTOMER
      })
      if (!created) {
        throw new Error('Cannot switch user to online status')
      }
      // broadcastPrivateMessage(driverData.id, 'Hello') TODO Handle message to broadcast message
      return created
    } catch (err) {
      return null
    }
  }

  async updateDriverOnlineSession (input: IUpdateDriverLoginSession): Promise<DriverOnlineSession> {
    const updateDto: Prisma.DriverOnlineSessionUpdateInput = {
      currentLongitude: input.currentLongitude,
      currentLatitude: input.currentLatitude,
      onlineStatus: input.onlineStatus,
      workingStatus: input.workingStatus
    }
    return await this.driverOnlineSessionRepo.updateDriverOnlineSession(input.driverId, updateDto)
  }
}
