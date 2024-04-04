import { type Driver } from '@prisma/client'
import { type IDriverRepo, type IGetDriversFilter } from '../../repository/driver/driver.interface'
import { type IDriverService } from './driver.interface'

export class DriverService implements IDriverService {
  private readonly driverRepo: IDriverRepo
  constructor (driverRepo: IDriverRepo) {
    this.driverRepo = driverRepo
  }

  async getListDrivers (filter?: IGetDriversFilter): Promise<Driver[]> {
    const data = await this.driverRepo.getListDrivers(filter)
    return data
  }

  async getAvailableDrivers (vehicleType: number): Promise<Driver[]> {
    return await this.driverRepo.getAvailableDrivers(vehicleType)
  }
}
