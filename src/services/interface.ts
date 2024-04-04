import { type Staff, type User, type Customer } from '@prisma/client'
import { type ICreateCustomerUserInput } from './dto/user.dto'
import { type IGetUsersFilter } from '../repository/user/user.interface'
import { type IGetStaffsFilter } from '../repository/staff/staff.interface'
import { type IGetCustomersFilter } from '../repository/customer/customer.interface'
import { type IDriverService, type IDriverOnlineSessionService } from './driver/driver.interface'

export interface IService {
  user: IUserService
  staff: IStaffService
  driver: IDriverService
  customer: ICustomerService
  driverLoginSessionService: IDriverOnlineSessionService
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

export interface ICustomerService {
  getListCustomers: (filter?: IGetCustomersFilter) => Promise<Customer[]>
}
