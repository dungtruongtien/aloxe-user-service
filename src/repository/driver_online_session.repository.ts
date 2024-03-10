import { type IDriverOnlineSessionRepo } from './interface'
import prisma from '../client/prisma'
import { type DriverOnlineSession } from '@prisma/client'

export const DRIVER_ONLINE_SESSION_MAPPING = {
  WAITING_FOR_CUSTOMER: 1,
  DRIVING: 2
}

export enum DriverOnlineSessionOnlineStatusEnum {
  ONLINE = 1,
  OFFLINE = 2
}

export enum DriverOnlineSessionWorkingStatusEnum {
  WAITING_FOR_CUSTOMER = 1,
  DRIVING = 2
}

export class DriverOnlineSessionRepository implements IDriverOnlineSessionRepo {
  async createOne (dto: DriverOnlineSession): Promise<DriverOnlineSession> {
    return prisma.driverOnlineSession.create({
      data: dto
    })
  }

  async hardDelete (id: number): Promise<DriverOnlineSession> {
    return prisma.driverOnlineSession.delete({
      where: {
        id
      }
    })
  }
}
