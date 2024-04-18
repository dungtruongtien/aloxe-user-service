import { type Customer } from '@prisma/client'
import { type ICustomerRepo, type IGetCustomersFilter } from '../../repository/customer/customer.interface'
import { type ICustomerService } from './customer.interface'

export class CustomerService implements ICustomerService {
  private readonly customerRepo: ICustomerRepo
  constructor (customerRepo: ICustomerRepo) {
    this.customerRepo = customerRepo
  }

  async getListCustomers (filter?: IGetCustomersFilter): Promise<Customer[]> {
    const data = await this.customerRepo.getListCustomers(filter)
    return data
  }

  async getCustomer (id: number): Promise<Customer | null> {
    const data = await this.customerRepo.getCustomer(id)
    return data
  }
}
