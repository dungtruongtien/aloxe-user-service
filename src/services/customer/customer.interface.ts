import { type Customer } from '@prisma/client'
import { type IGetCustomersFilter } from '../../repository/customer/customer.interface'

export interface ICustomerService {
  getListCustomers: (filter?: IGetCustomersFilter) => Promise<Customer[]>
  getCustomer: (id: number) => Promise<Customer | null>
}
