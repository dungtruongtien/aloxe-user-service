import { type IUserRepo } from './interface'
import prisma from '../client/prisma'
import { type Prisma, type User } from '@prisma/client'

export enum CustomerRoleEnum {
  Staff = 1,
  Customer = 2,
  Driver = 3
}

export enum CustomerStatusEnum {
  Active = 1,
  Inactive = 2,
}

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

  async createCustomerUser (dto: Prisma.UserCreateInput): Promise<User> {
    return await prisma.user.create({
      data: dto
    })
  }

  async getCustomerUserByPhone (phoneNumber: string): Promise<User | null> {
    return await prisma.user.findFirst({
      where: {
        phoneNumber,
        role: CustomerRoleEnum.Customer
      }
    })
  }
}
