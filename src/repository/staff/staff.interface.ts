import { type Staff } from '@prisma/client'

export interface IGetStaffsFilter {
  ids: number[]
}

export interface IStaffRepo {
  getListStaffs: (filter?: IGetStaffsFilter) => Promise<Staff[]>
}
