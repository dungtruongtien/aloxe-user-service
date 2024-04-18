import { type User } from '@prisma/client'
import { type IGetUsersFilter } from '../../repository/user/user.interface'
import { type ICreateCustomerUserInput, type IRegisterCustomerUserInput } from './user.dto'

export interface IUserService {
  getListUsers: (filter?: IGetUsersFilter) => Promise<User[]>
  getUser: (id: number) => Promise<User | null>
  me: (id: number) => Promise<User | null>
  createCustomerUser: (dto: ICreateCustomerUserInput) => Promise<User>
  registerCustomerUser: (dto: IRegisterCustomerUserInput) => Promise<User>
}
