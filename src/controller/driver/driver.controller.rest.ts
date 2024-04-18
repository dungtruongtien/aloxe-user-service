import { type NextFunction, type Request, type Response } from 'express'
import { HttpStatusCode } from 'axios'
import { DriverRepository } from '../../repository/driver/driver.repository'
import { DriverService } from '../../services/driver/driver.service'
import { type IGetDriversFilter } from '../../repository/driver/driver.interface'
import { type IUpdateDriverLoginSession, type IDriverOnlineSessionService, type IDriverService, type IHandleDriverOnlineInput } from '../../services/driver/driver.interface'
import { DriverOnlineSessionRepository } from '../../repository/driver/driver_online_session.repository'
import { DriverOnlineSessionService } from '../../services/driver/driver_online_session.service'
import { type IDriverRestController } from './driver.interface'

export default class DriverRestController implements IDriverRestController {
  private readonly driverService: IDriverService
  private readonly driverOnlineSessionService: IDriverOnlineSessionService
  private readonly driverRepository = new DriverRepository()
  private readonly driverOnlineSessionRepository = new DriverOnlineSessionRepository()
  constructor () {
    this.driverService = new DriverService(this.driverRepository, this.driverOnlineSessionRepository)
    this.driverOnlineSessionService = new DriverOnlineSessionService(this.driverOnlineSessionRepository, this.driverRepository)
  }

  async getListDrivers (req: Request, res: Response, next: NextFunction): Promise<any> {
    const filter = req.query.filter
    const data = await this.driverService.getListDrivers(filter as unknown as IGetDriversFilter)
    res.status(HttpStatusCode.Ok).json({
      status: 'SUCCESS',
      data
    })
  }

  async updateDriverOnlineSession (req: Request, res: Response, next: NextFunction): Promise<any> {
    const data = await this.driverOnlineSessionService.updateDriverOnlineSession(req.body as IUpdateDriverLoginSession)
    res.status(HttpStatusCode.Ok).json({
      status: 'SUCCESS',
      data
    })
  }

  async getAvailableDrivers (req: Request, res: Response, next: NextFunction): Promise<any> {
    const data = await this.driverService.getAvailableDrivers(req.query.vehicleType as unknown as number)
    res.status(HttpStatusCode.Ok).json({
      status: 'SUCCESS',
      data
    })
  }

  handleDriverOnline = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const data = await this.driverService.handleDriverOnline(req.query.body as unknown as IHandleDriverOnlineInput)
    res.status(HttpStatusCode.Ok).json({
      status: 'SUCCESS',
      data
    })
  }
}
