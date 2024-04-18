import { type Driver, type DriverOnlineSession } from '@prisma/client'
import { type DriverOnlineSessionOnlineStatusEnum } from '../../repository/driver/driver_online_session.repository'
import { type IGetDriversFilter } from '../../repository/driver/driver.interface'

// Driver online session
export interface ISwitchOnOffStatusInput {
  driverId: number
  lat: number
  long: number
  type: DriverOnlineSessionOnlineStatusEnum
}

export interface IUpdateDriverLoginSession {
  driverId: number
  currentLongitude?: number | string
  currentLatitude?: number | string
  onlineStatus?: number
  workingStatus?: number
}

export interface IDriverOnlineSessionService {
  switchOnOffStatus: (input: ISwitchOnOffStatusInput) => Promise<DriverOnlineSession | null>
  updateDriverOnlineSession: (input: IUpdateDriverLoginSession) => Promise<DriverOnlineSession>
}

// Driver

export interface IHandleDriverOnlineInput {
  driverId: number
  lat: number
  long: number
  type: string
}
export interface IDriverService {
  getListDrivers: (filter?: IGetDriversFilter) => Promise<Driver[]>
  getAvailableDrivers: (vehicleType: number) => Promise<Driver[]>
  handleDriverOnline: (input: IHandleDriverOnlineInput) => Promise<DriverOnlineSession>
}
