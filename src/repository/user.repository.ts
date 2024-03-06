import { type IUserRepo } from './interface'
import prisma from '../client/prisma'
import { type User } from '@prisma/client'

export class UserRepository implements IUserRepo {
  async getUsers (): Promise<User[]> {
    return await prisma.user.findMany()
  }

  async getUser (id: number): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        id
      },
      include: {
        staff: true,
        customer: true,
        driver: true
      }
    })
  }

  createUser: any
  updateUser: any
  deleteUser: any
}
