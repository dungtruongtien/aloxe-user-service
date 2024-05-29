import { type NextFunction, type Request, type Response } from 'express'
import { HttpStatusCode } from 'axios'
import { CustomerRepository } from '../../repository/customer/customer.repository'
import { CustomerService } from '../../services/customer/customer.service'
import { type IGetCustomersFilter } from '../../repository/customer/customer.interface'
import { type ICustomerService } from '../../services/customer/customer.interface'
import { type ICustomerRestController } from './customer.interface'

function parseQueryFromPath (urlString: string): any {
  // Append a dummy protocol and domain to the URL to make it a valid URL
  const parsedUrl = new URL(`http://dummy${urlString}`)

  // Access the query parameters from the path
  const queryParams = Object.fromEntries(parsedUrl.searchParams.entries())

  return queryParams
}

export default class CustomerRestController implements ICustomerRestController {
  private readonly customerService: ICustomerService
  private readonly customerRepository = new CustomerRepository()
  constructor () {
    this.customerService = new CustomerService(this.customerRepository)
  }

  async getListCustomers (req: Request, res: Response, next: NextFunction): Promise<any> {
    // Parse the URL string
    const parsedQuery = parseQueryFromPath(req.originalUrl)
    if (parsedQuery && parsedQuery?.ids.length > 0) {
      parsedQuery.ids = parsedQuery.ids.split(',').map(Number)
    }
    const data = await this.customerService.getListCustomers(parsedQuery as unknown as IGetCustomersFilter)
    res.status(HttpStatusCode.Ok).json({
      status: 'SUCCESS',
      data
    })
  }

  async getCustomer (req: Request, res: Response, next: NextFunction): Promise<any> {
    const customerId = req.params.id
    const data = await this.customerService.getCustomer(customerId as unknown as number)
    res.status(HttpStatusCode.Ok).json({
      status: 'SUCCESS',
      data
    })
  }
}
