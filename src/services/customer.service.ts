import { type Customer } from '@prisma/client'
import { type ICustomerService } from './interface'
import { type IGetCustomersFilter, type ICustomerRepo } from '../repository/interface'
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
