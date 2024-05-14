import prisma from '../../client/prisma'
import { type Prisma, type DriverOnlineSession } from '@prisma/client'
import { type IDriverOnlineSessionRepo } from './driver.interface'

export const DRIVER_ONLINE_SESSION_WORKING_MAPPING = {
  WAITING_FOR_CUSTOMER: 1,
  DRIVING: 2
}

export const DRIVER_ONLINE_SESSION_MAPPING: any = {
  1: 'ONLINE',
  2: 'OFFLINE'
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
  async createOne (dto: Prisma.DriverOnlineSessionCreateInput): Promise<DriverOnlineSession> {
    return await prisma.driverOnlineSession.create({
      data: dto
    })
  }

  async hardDelete (id: number): Promise<DriverOnlineSession> {
    return await prisma.driverOnlineSession.delete({
      where: {
        id
      }
    })
  }

  async update (driverId: number, input: Prisma.DriverOnlineSessionUpdateInput): Promise<DriverOnlineSession> {
    return await prisma.driverOnlineSession.update({
      where: {
        driverId
      },
      data: input
    })
  }

  async hardDeleteByDriverId (driverId: number): Promise<DriverOnlineSession> {
    return await prisma.driverOnlineSession.delete({
      where: {
        driverId
      }
    })
  }

  async getOne (driverId: number): Promise<DriverOnlineSession | null> {
    return await prisma.driverOnlineSession.findUnique({
      where: {
        driverId
      }
    })
  }
}
