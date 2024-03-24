import { type Customer } from '@prisma/client'
import { type ICustomerService } from './interface'
import { type ICustomerRepo, type IGetCustomersFilter } from '../repository/customer/customer.interface'
export class CustomerService implements ICustomerService {
  private readonly customerRepo: ICustomerRepo
  constructor (customerRepo: ICustomerRepo) {
    this.customerRepo = customerRepo
  }

  async getListCustomers (filter?: IGetCustomersFilter): Promise<Customer[]> {
    const data = await this.customerRepo.getListCustomers(filter)
    return data
  }
}
