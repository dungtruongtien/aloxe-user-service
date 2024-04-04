import { type Driver, type DriverOnlineSession, type Prisma } from '@prisma/client'

export interface IGetDriversFilter {
  ids: number[]
}

export interface IDriverOnlineSessionRepo {
  createOne: (dto: Prisma.DriverOnlineSessionCreateInput) => Promise<DriverOnlineSession>
  hardDelete: (id: number) => Promise<DriverOnlineSession>
  updateDriverOnlineSession: (driverId: number, input: Prisma.DriverOnlineSessionUpdateInput) => Promise<DriverOnlineSession>
}

export interface IDriverRepo {
  getDriver: (id: number) => Promise<Driver | null>
  getListDrivers: (filter?: IGetDriversFilter) => Promise<Driver[]>
  getAvailableDrivers: (vehicleType: number) => Promise<Driver[]>
}
