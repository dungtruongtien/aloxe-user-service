import { type DriverOnlineSession, type User } from '@prisma/client'
import { type DriverOnlineSessionOnlineStatusEnum } from '../repository/driver_online_session.repository'
import { type Decimal } from '@prisma/client/runtime/library'
import { type ICreateCustomerUserInput } from './dto/user.dto'

export interface IService {
  user: IUserService
  driverLoginSessionService: IDriverLoginSessionService
}

export interface ISwitchOnOffStatusInput {
  driverId: number
  lat: Decimal
  long: Decimal
  type: DriverOnlineSessionOnlineStatusEnum
}

export interface IUserService {
  getUsers: () => Promise<User[]>
  getUser: (id: number) => Promise<User | null>
  me: (id: number) => Promise<User | null>
  createCustomerUser: (dto: ICreateCustomerUserInput) => Promise<User>
}

export interface IDriverLoginSessionService {
  switchOnOffStatus: (input: ISwitchOnOffStatusInput) => Promise<DriverOnlineSession | null>
}
