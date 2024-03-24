import prisma from '../../client/prisma'
import { type Staff, type Prisma } from '@prisma/client'
import { type IGetStaffsFilter, type IStaffRepo } from './staff.interface'

export class StaffRepository implements IStaffRepo {
  async getListStaffs (filter?: IGetStaffsFilter): Promise<Staff[]> {
    const where: Prisma.StaffWhereInput = {}
    if (filter && filter?.ids.length > 0) {
      where.id = {
        in: filter.ids
      }
    }
    return await prisma.staff.findMany({
      where,
      include: {
        user: true
      }
    })
  }
}
