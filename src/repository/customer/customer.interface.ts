import { type Customer } from '@prisma/client'

export interface IGetCustomersFilter {
  ids: number[]
}

export interface ICustomerRepo {
  getListCustomers: (filter?: IGetCustomersFilter) => Promise<Customer[]>
}
