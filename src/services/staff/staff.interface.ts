import { type Staff } from '@prisma/client'
import { type IGetStaffsFilter } from '../../repository/staff/staff.interface'

export interface IStaffService {
  getListStaffs: (filter?: IGetStaffsFilter) => Promise<Staff[]>
}
