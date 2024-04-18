import prisma from '../../client/prisma'
import { type Prisma, type Customer } from '@prisma/client'
import { type ICustomerRepo, type IGetCustomersFilter } from './customer.interface'

export enum CustomerRoleEnum {
  Staff = 1,
  Customer = 2,
  Driver = 3
}

export enum CustomerStatusEnum {
  Active = 1,
  Inactive = 2,
}

export class CustomerRepository implements ICustomerRepo {
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

  async getCustomer (id: number): Promise<Customer | null> {
    return await prisma.customer.findUnique({
      where: { id },
      include: {
        user: true
      }
    })
  }
}
