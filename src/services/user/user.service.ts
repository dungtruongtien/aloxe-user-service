import { type Prisma, type User } from '@prisma/client'
import { type IUserService } from '../interface'
import { type ICreateCustomerUserInput } from '../dto/user.dto'
import { CustomerRoleEnum, CustomerStatusEnum } from '../../repository/user/user.repository'
import { type IGetUsersFilter, type IUserRepo } from '../../repository/user/user.interface'
import { type ICreateUserAccountInput, type IUserAccountRepo } from '../../repository/user_account/user_account.interface'

export class UserService implements IUserService {
  private readonly userRepo: IUserRepo
  private readonly userAccountRepo: IUserAccountRepo
  constructor (userRepo: IUserRepo, userAccountRepo: IUserAccountRepo) {
    this.userRepo = userRepo
    this.userAccountRepo = userAccountRepo
  }

  async getListUsers (filter?: IGetUsersFilter): Promise<User[]> {
    if (filter?.phoneNumbers && !Array.isArray(filter.phoneNumbers)) {
      filter.phoneNumbers = [filter.phoneNumbers]
    }
    const data = await this.userRepo.getListUsers(filter)
    return data
  }

  async getUser (id: number): Promise<User | null> {
    return await this.userRepo.getUser(id)
  }

  async me (id: number): Promise<User | null> {
    return await this.userRepo.getUser(id)
  }

  async createCustomerUser (input: ICreateCustomerUserInput): Promise<User> {
    const existsCustomerUser = await this.userRepo.getCustomerUserByPhone(input.phoneNumber)
    if (existsCustomerUser) {
      throw new Error('RegisteredPhoneNumber')
    }
    const createCustomerUserDto: Prisma.UserCreateInput = {
      fullName: input.fullName,
      phoneNumber: input.phoneNumber,
      email: input.email,
      address: input.address,
      dob: input.dob,
      role: CustomerRoleEnum.Customer,
      status: CustomerStatusEnum.Active,
      customer: {
        create: {
          customerNo: input.customer.customerNo,
          level: input.customer.level
        }
      }
    }
    const customerUser = await this.userRepo.createCustomerUser(createCustomerUserDto)
    // Create user account
    const createUserAccountDto: ICreateUserAccountInput = {
      username: input.phoneNumber,
      password: 'abc123', // default password
      userId: customerUser.id
    }

    const userAccountRes = await this.userAccountRepo.createUserAccount(createUserAccountDto)
    console.log('userAccountRes-----', userAccountRes)
    return customerUser
  }
}
