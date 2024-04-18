import { type Staff } from '@prisma/client'
import { type NextFunction, type Request, type Response } from 'express'

export interface IStaffRestController {
  getListStaffs: (req: Request, res: Response, next: NextFunction) => Promise<Staff[]>
}
