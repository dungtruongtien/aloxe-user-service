import { type DriverOnlineSession } from '@prisma/client'
import { type ISwitchOnOffStatusInput, type IDriverLoginSessionService } from './interface'
import { type IDriverRepo, type IDriverOnlineSessionRepo } from '../repository/interface'
import { DriverOnlineSessionOnlineStatusEnum, DriverOnlineSessionWorkingStatusEnum } from '../repository/driver/driver_online_session.repository'

export class DriverOnlineSessionService implements IDriverLoginSessionService {
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
        online_status: DriverOnlineSessionOnlineStatusEnum.ONLINE,
        working_status: DriverOnlineSessionWorkingStatusEnum.WAITING_FOR_CUSTOMER
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
}
