import bcrypt from 'bcryptjs'
import { type Prisma, type User } from '@prisma/client'
import { type IRegisterCustomerUserInput, type ICreateCustomerUserInput } from './user.dto'
import { CustomerRoleEnum, CustomerStatusEnum } from '../../repository/user/user.repository'
import { type IGetUsersFilter, type IUserRepo } from '../../repository/user/user.interface'
import { type ICreateUserAccountInput, type IUserAccountRepo } from '../../repository/user_account/user_account.interface'
import { type IUserService } from './user.interface'
import { BadRequestError } from '../../common/custom_error'

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

    await this.userAccountRepo.createUserAccount(createUserAccountDto)
    return customerUser
  }

  registerCustomerUser = async (input: IRegisterCustomerUserInput): Promise<User> => {
    const existsPhone = await this.userRepo.getCustomerUserByPhone(input.phoneNumber)
    if (existsPhone) {
      throw new BadRequestError('This phone number was registered')
    }
    // Create user and customer
    const defaultRole = CustomerRoleEnum.Customer
    const userInput: Prisma.UserCreateInput = {
      email: input.email,
      fullName: input.fullName,
      phoneNumber: input.phoneNumber,
      address: input.address,
      role: defaultRole,
      dob: input.dob,
      status: CustomerStatusEnum.Active,
      customer: {
        create: {
          customerNo: 'ABC',
          level: 'NORMAL'
        }
      }
    }
    const userRes = await this.userRepo.createCustomerUser(userInput)

    // Create auth
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(input.password, salt)
    const authInput: ICreateUserAccountInput = {
      password: hashedPassword,
      username: input.phoneNumber,
      userId: userRes.id
    }
    await this.userAccountRepo.createUserAccount(authInput)

    return userRes
  }
}
