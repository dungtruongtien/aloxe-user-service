import { type User } from '@prisma/client'
import { UserService } from '../../services/user/user.service'
import { UserAccountRepository } from '../../repository/user_account/user_account.repository'
import { type ICreateCustomerUserInput } from '../../services/user/user.dto'
import { UserRepository } from '../../repository/user/user.repository'
import { type IUserService } from '../../services/user/user.interface'
import { type IUserGraphController } from './user.interface'

export default class UserGraphController implements IUserGraphController {
  private readonly userService: IUserService
  private readonly userRepository = new UserRepository()
  private readonly userAccountRepository = new UserAccountRepository()
  constructor () {
    this.userService = new UserService(this.userRepository, this.userAccountRepository)
  }

  async getUsers (): Promise<User[]> {
    return await this.userService.getListUsers()
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
