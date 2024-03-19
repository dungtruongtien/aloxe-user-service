import { type Driver, type DriverOnlineSession, type User, type Prisma, type Staff, type Customer } from '@prisma/client'
import { type ICreateUserAccountInput } from './dto/user_account.dto'

export interface IRepository {
  user: IUserRepo
  driverLoginSession: IDriverOnlineSessionRepo
  driver: IDriverRepo
  staff: IStaffRepo
  customer: ICustomerRepo
}

export interface IGetUsersFilter {
  phoneNumbers: string[]
  userIds: number[]
  staffIds: number[]
  customerIds: number[]
  driverIds: number[]
}

export interface IGetStaffsFilter {
  ids: number[]
}
export interface IGetDriversFilter {
  ids: number[]
}
export interface IGetCustomersFilter {
  ids: number[]
}
export interface IUserRepo {
  getListUsers: (filter?: IGetUsersFilter) => Promise<User[]>
  getUser: (id: number) => Promise<User | null>
  createCustomerUser: (dto: Prisma.UserCreateInput) => Promise<User>
  getCustomerUserByPhone: (phoneNumber: string) => Promise<User | null>
}

export interface IStaffRepo {
  getListStaffs: (filter?: IGetStaffsFilter) => Promise<Staff[]>
}

export interface ICustomerRepo {
  getListCustomers: (filter?: IGetCustomersFilter) => Promise<Customer[]>
}

export interface IDriverOnlineSessionRepo {
  createOne: (dto: Prisma.DriverOnlineSessionCreateInput) => Promise<DriverOnlineSession>
  hardDelete: (id: number) => Promise<DriverOnlineSession>
}

export interface IUserAccountRepo {
  createUserAccount: (dto: ICreateUserAccountInput) => Promise<boolean>
}

export interface IDriverRepo {
  getDriver: (id: number) => Promise<Driver | null>
  getListDrivers: (filter?: IGetDriversFilter) => Promise<Driver[]>
}
