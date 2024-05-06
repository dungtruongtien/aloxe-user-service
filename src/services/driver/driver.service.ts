import { type DriverOnlineSession, type Driver } from '@prisma/client'
import { type IDriverOnlineSessionRepo, type IDriverRepo, type IGetDriversFilter } from '../../repository/driver/driver.interface'
import { type IHandleDriverOnlineInput, type IDriverService } from './driver.interface'
import { DriverOnlineSessionOnlineStatusEnum, DriverOnlineSessionWorkingStatusEnum } from '../../repository/driver/driver_online_session.repository'
import { BadRequestError } from '../../common/custom_error'

export class DriverService implements IDriverService {
  private readonly driverRepo: IDriverRepo
  private readonly driverOnlineSessionRepo: IDriverOnlineSessionRepo
  constructor (driverRepo: IDriverRepo, driverOnlineSessionRepo: IDriverOnlineSessionRepo) {
    this.driverRepo = driverRepo
    this.driverOnlineSessionRepo = driverOnlineSessionRepo
  }

  async getListDrivers (filter?: IGetDriversFilter): Promise<Driver[]> {
    const data = await this.driverRepo.getListDrivers(filter)
    return data
  }

  async getAvailableDrivers (vehicleType: number): Promise<Driver[]> {
    return await this.driverRepo.getAvailableDrivers(vehicleType)
  }

  handleDriverOnline = async (input: IHandleDriverOnlineInput): Promise<DriverOnlineSession> => {
    if (input.type === 'OFFLINE') {
      return await this.driverOnlineSessionRepo.hardDeleteByDriverId(input.driverId)
    }
    const driverData = await this.driverRepo.getDriver(input.driverId)
    if (!driverData) {
      throw new BadRequestError('User not existed')
    }

    const resp = await this.driverOnlineSessionRepo.createOne({
      driver: {
        connect: {
          id: input.driverId
        }
      },
      currentLatitude: input.lat,
      currentLongitude: input.long,
      onlineStatus: DriverOnlineSessionOnlineStatusEnum.ONLINE,
      workingStatus: DriverOnlineSessionWorkingStatusEnum.WAITING_FOR_CUSTOMER
    })
    if (!resp) {
      throw new Error('Cannot switch user to online status')
    }
    // TODO: Broadcast to driver
    // broadcastPrivateMessage(driverData.id, 'Hello')
    return resp
  }
}
