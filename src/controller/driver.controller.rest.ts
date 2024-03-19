import { type IDriverService } from '../services/interface'
import { type IDriverRestController } from './interface'
import { type NextFunction, type Request, type Response } from 'express'
import { type IGetDriversFilter } from '../repository/interface'
import { HttpStatusCode } from 'axios'
import { DriverRepository } from '../repository/driver.repository'
import { DriverService } from '../services/driver.service'

export default class DriverRestController implements IDriverRestController {
  private readonly driverService: IDriverService
  private readonly driverRepository = new DriverRepository()
  constructor () {
    this.driverService = new DriverService(this.driverRepository)
  }

  async getListDrivers (req: Request, res: Response, next: NextFunction): Promise<any> {
    const filter = req.query.filter
    const data = await this.driverService.getListDrivers(filter as unknown as IGetDriversFilter)
    res.status(HttpStatusCode.Ok).json({
      status: 'SUCCESS',
      data
    })
  }
}
