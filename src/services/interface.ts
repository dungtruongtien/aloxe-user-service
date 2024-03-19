import { type Staff, type DriverOnlineSession, type User, type Driver, type Customer } from '@prisma/client'
import { type DriverOnlineSessionOnlineStatusEnum } from '../repository/driver_online_session.repository'
import { type Decimal } from '@prisma/client/runtime/library'
import { type ICreateCustomerUserInput } from './dto/user.dto'
import { type IGetCustomersFilter, type IGetDriversFilter, type IGetStaffsFilter, type IGetUsersFilter } from '../repository/interface'

export interface IService {
  user: IUserService
  staff: IStaffService
  driver: IDriverService
  customer: ICustomerService
  driverLoginSessionService: IDriverLoginSessionService
}

export interface ISwitchOnOffStatusInput {
  driverId: number
  lat: Decimal
  long: Decimal
  type: DriverOnlineSessionOnlineStatusEnum
}

export interface IUserService {
  getListUsers: (filter?: IGetUsersFilter) => Promise<User[]>
  getUser: (id: number) => Promise<User | null>
  me: (id: number) => Promise<User | null>
  createCustomerUser: (dto: ICreateCustomerUserInput) => Promise<User>
}

export interface IStaffService {
  getListStaffs: (filter?: IGetStaffsFilter) => Promise<Staff[]>
}

export interface IDriverService {
  getListDrivers: (filter?: IGetDriversFilter) => Promise<Driver[]>
}

export interface ICustomerService {
  getListCustomers: (filter?: IGetCustomersFilter) => Promise<Customer[]>
}
export interface IDriverLoginSessionService {
  switchOnOffStatus: (input: ISwitchOnOffStatusInput) => Promise<DriverOnlineSession | null>
}
