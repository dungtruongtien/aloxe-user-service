import prisma from '../../client/prisma'
import { type Prisma, type Driver } from '@prisma/client'
import { type IDriverRepo, type IGetDriversFilter } from './driver.interface'

export class DriverRepository implements IDriverRepo {
  async getDriver (id: number): Promise<Driver | null> {
    return await prisma.driver.findUnique({
      where: {
        id
      },
      include: {
        user: true,
        onlineSession: true
      }
    })
  }

  async getListDrivers (filter?: IGetDriversFilter): Promise<Driver[]> {
    const where: Prisma.DriverWhereInput = {}
    if (filter && filter?.ids.length > 0) {
      where.id = {
        in: filter.ids
      }
    }
    return await prisma.driver.findMany({
      where,
      include: {
        user: true
      }
    })
  }
}
