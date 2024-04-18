import { type IDriverService, type IDriverOnlineSessionService } from './driver/driver.interface'
import { type ICustomerService } from './customer/customer.interface'
import { type IStaffService } from './staff/staff.interface'
import { type IUserService } from './user/user.interface'

export interface IService {
  user: IUserService
  staff: IStaffService
  driver: IDriverService
  customer: ICustomerService
  driverLoginSessionService: IDriverOnlineSessionService
}

// export interface IUserService {
//   getListUsers: (filter?: IGetUsersFilter) => Promise<User[]>
//   getUser: (id: number) => Promise<User | null>
//   me: (id: number) => Promise<User | null>
//   createCustomerUser: (dto: ICreateCustomerUserInput) => Promise<User>
// }

// export interface IStaffService {
//   getListStaffs: (filter?: IGetStaffsFilter) => Promise<Staff[]>
// }
