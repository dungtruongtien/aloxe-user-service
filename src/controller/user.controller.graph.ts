import { type User } from '@prisma/client'
import { UserRepository } from '../repository/user.repository'
import { type IUserService } from '../services/interface'
import { UserService } from '../services/user.service'
import { type IUserGraphController } from './interface'
import { UserAccountRepository } from '../repository/user_account.repository'
import { type ICreateCustomerUserInput } from '../services/dto/user.dto'

export default class UserGraphController implements IUserGraphController {
  private readonly userService: IUserService
  private readonly userRepository = new UserRepository()
  private readonly userAccountRepository = new UserAccountRepository()
  constructor () {
    this.userService = new UserService(this.userRepository, this.userAccountRepository)
  }

  async getUsers (): Promise<User[]> {
    return await this.userService.getUsers()
  }

  async getUser (id: number): Promise<User | null> {
    return await this.userService.getUser(id)
  }

  async me (id: number): Promise<User | null> {
    return await this.userService.getUser(id)
  }

  async createCustomerUser (input: ICreateCustomerUserInput): Promise<User> {
    return await this.userService.createCustomerUser(input)
  }
}
