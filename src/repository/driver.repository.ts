import { type IDriverRepo } from './interface'
import prisma from '../client/prisma'
import { type Driver } from '@prisma/client'

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
}
