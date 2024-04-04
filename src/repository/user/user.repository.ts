import prisma from '../../client/prisma'
import { type Prisma, type User } from '@prisma/client'
import { type IGetUsersFilter, type IUserRepo } from './user.interface'

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
  async getListUsers (filter?: IGetUsersFilter): Promise<User[]> {
    const where: Prisma.UserWhereInput = {}
    if (filter?.phoneNumbers && filter.phoneNumbers.length > 0) {
      where.phoneNumber = {
        in: filter.phoneNumbers
      }
    }
    if (filter?.userIds && filter.userIds.length > 0) {
      where.id = {
        in: filter.userIds
      }
    }
    if (filter?.staffIds && filter.staffIds.length > 0) {
      where.staff = {
        id: {
          in: filter.staffIds
        }
      }
    }
    if (filter?.driverIds && filter.driverIds.length > 0) {
      where.driver = {
        id: {
          in: filter.driverIds
        }
      }
    }
    if (filter?.customerIds && filter.customerIds.length > 0) {
      where.customer = {
        id: {
          in: filter.customerIds
        }
      }
    }
    return await prisma.user.findMany({
      where,
      include: {
        staff: true,
        driver: true,
        customer: true
      }
    })
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
      data: dto,
      include: {
        customer: true
      }
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
