import { type Prisma, type User } from '@prisma/client'

export interface IGetUsersFilter {
  phoneNumbers: string[]
  userIds: number[]
  staffIds: number[]
  customerIds: number[]
  driverIds: number[]
}

export interface IUserRepo {
  getListUsers: (filter?: IGetUsersFilter) => Promise<User[]>
  getUser: (id: number) => Promise<User | null>
  createCustomerUser: (dto: Prisma.UserCreateInput) => Promise<User>
  getCustomerUserByPhone: (phoneNumber: string) => Promise<User | null>
}
