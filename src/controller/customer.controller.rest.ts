import { type ICustomerService } from '../services/interface'
import { type ICustomerRestController } from './interface'
import { type NextFunction, type Request, type Response } from 'express'
import { type IGetCustomersFilter } from '../repository/interface'
import { HttpStatusCode } from 'axios'
import { CustomerRepository } from '../repository/customer.repository'
import { CustomerService } from '../services/customer.service'

export default class CustomerRestController implements ICustomerRestController {
  private readonly customerService: ICustomerService
  private readonly customerRepository = new CustomerRepository()
  constructor () {
    this.customerService = new CustomerService(this.customerRepository)
  }

  async getListCustomers (req: Request, res: Response, next: NextFunction): Promise<any> {
    const filter = req.query.filter
    const data = await this.customerService.getListCustomers(filter as unknown as IGetCustomersFilter)
    res.status(HttpStatusCode.Ok).json({
      status: 'SUCCESS',
      data
    })
  }
}
