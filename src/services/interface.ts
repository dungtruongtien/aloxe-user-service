import { type User } from '@prisma/client'

export interface IService {
  user: IUserService
}

export interface IUserService {
  getUsers: () => Promise<User[]>
  getUser: (id: number) => Promise<User | null>
  me: (id: number) => Promise<User | null>
}
