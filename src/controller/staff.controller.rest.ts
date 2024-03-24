import { type IStaffService } from '../services/interface'
import { type IStaffRestController } from './interface'
import { type NextFunction, type Request, type Response } from 'express'
import { HttpStatusCode } from 'axios'
import { StaffRepository } from '../repository/staff/staff.repository'
import { StaffService } from '../services/staff.service'
import { type IGetStaffsFilter } from '../repository/staff/staff.interface'

export default class StaffRestController implements IStaffRestController {
  private readonly staffService: IStaffService
  private readonly staffRepository = new StaffRepository()
  constructor () {
    this.staffService = new StaffService(this.staffRepository)
  }

  async getListStaffs (req: Request, res: Response, next: NextFunction): Promise<any> {
    const filter = req.query.filter
    const data = await this.staffService.getListStaffs(filter as unknown as IGetStaffsFilter)
    res.status(HttpStatusCode.Ok).json({
      status: 'SUCCESS',
      data
    })
  }
}
