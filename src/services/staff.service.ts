import { type Staff } from '@prisma/client'
import { type IStaffService } from './interface'
import { type IStaffRepo, type IGetStaffsFilter } from '../repository/interface'
export class StaffService implements IStaffService {
  private readonly staffRepo: IStaffRepo
  constructor (staffRepo: IStaffRepo) {
    this.staffRepo = staffRepo
  }

  async getListStaffs (filter?: IGetStaffsFilter): Promise<Staff[]> {
    const data = await this.staffRepo.getListStaffs(filter)
    return data
  }
}
