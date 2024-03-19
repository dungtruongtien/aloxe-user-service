import { type IGetCustomersFilter, type IGetDriversFilter, type IGetStaffsFilter, type IGetUsersFilter, type IUserRepo } from './interface'
import prisma from '../client/prisma'
import { type Staff, type Prisma, type User, type Driver, type Customer } from '@prisma/client'

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

  async getListStaffs (filter?: IGetStaffsFilter): Promise<Staff[]> {
    const where: Prisma.StaffWhereInput = {}
    if (filter && filter?.ids.length > 0) {
      where.id = {
        in: filter.ids
      }
    }
    return await prisma.staff.findMany({
      where,
      include: {
        user: true
      }
    })
  }

  async getListDrivers (filter?: IGetDriversFilter): Promise<Driver[]> {
    const where: Prisma.DriverWhereInput = {}
    if (filter && filter?.ids.length > 0) {
      where.id = {
        in: filter.ids
      }
    }
    return await prisma.driver.findMany({
      where,
      include: {
        user: true
      }
    })
  }

  async getListCustomers (filter?: IGetCustomersFilter): Promise<Customer[]> {
    const where: Prisma.CustomerWhereInput = {}
    if (filter && filter?.ids.length > 0) {
      where.id = {
        in: filter.ids
      }
    }
    return await prisma.customer.findMany({
      where,
      include: {
        user: true
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
