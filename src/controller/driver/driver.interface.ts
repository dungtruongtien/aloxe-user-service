import { type DriverOnlineSession, type Driver } from '@prisma/client'
import { type NextFunction, type Request, type Response } from 'express'

export interface IDriverRestController {
  getListDrivers: (req: Request, res: Response, next: NextFunction) => Promise<Driver[]>
  updateDriverOnlineSession: (req: Request, res: Response, next: NextFunction) => Promise<DriverOnlineSession>
  getAvailableDrivers: (req: Request, res: Response, next: NextFunction) => Promise<Driver[]>

}
