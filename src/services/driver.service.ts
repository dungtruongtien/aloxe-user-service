import { type Driver } from '@prisma/client'
import { type IDriverService } from './interface'
import { type IDriverRepo, type IGetDriversFilter } from '../repository/driver/driver.interface'
export class DriverService implements IDriverService {
  private readonly driverRepo: IDriverRepo
  constructor (driverRepo: IDriverRepo) {
    this.driverRepo = driverRepo
  }

  async getListDrivers (filter?: IGetDriversFilter): Promise<Driver[]> {
    const data = await this.driverRepo.getListDrivers(filter)
    return data
  }
}
