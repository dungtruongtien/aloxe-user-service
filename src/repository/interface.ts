import { type User } from '@prisma/client'

export interface IRepository {
  user: IUserRepo
}

export interface IUserRepo {
  getUsers: () => Promise<User[]>
  getUser: (id: number) => Promise<User | null>
  createUser: any
  updateUser: any
  deleteUser: any
}
