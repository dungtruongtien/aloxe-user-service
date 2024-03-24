import { type ICustomerRepo } from './customer/customer.interface'
import { type IDriverOnlineSessionRepo, type IDriverRepo } from './driver/driver.interface'
import { type IUserRepo } from './user/user.interface'
import { type IStaffRepo } from './staff/staff.interface'

export interface IRepository {
  user: IUserRepo
  driverLoginSession: IDriverOnlineSessionRepo
  driver: IDriverRepo
  staff: IStaffRepo
  customer: ICustomerRepo
}
