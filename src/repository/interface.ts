import { type Driver, type DriverOnlineSession, type User, type Prisma } from '@prisma/client'
import { type ICreateUserAccountInput } from './dto/user_account.dto'

export interface IRepository {
  user: IUserRepo
  driverLoginSession: IDriverOnlineSessionRepo
  driver: IDriverRepo
}

export interface IUserRepo {
  getUsers: () => Promise<User[]>
  getUser: (id: number) => Promise<User | null>
  createCustomerUser: (dto: Prisma.UserCreateInput) => Promise<User>
  getCustomerUserByPhone: (phoneNumber: string) => Promise<User | null>
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
}
