import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    getUser(id: Int): GetUserRes
    me: GetUserRes
    users: [User]
  }

  extend type Mutation {
    createCustomerUser(input: CreateCustomerUserRequest): CreateCustomerUserResponse
  }

  type UserEntity {
    fullName: String
    phoneNumber: String
    password: String
    address: String
    dob: String
    role: Int
    status: Int
  }

  type CreateCustomerUserResponse {
    code: String
    message: String
    data: UserEntity
  }

  input CreateCustomerUserRequest {
    fullName: String!
    phoneNumber: String!
    password: String!
    address: String
    dob: String
    role: Int
    status: Int
    customer: CreateCustomerRequest
  }
  
  input CreateCustomerRequest {
    level: String
    customerNo: String
  }

  type GetUserRes {
    code: String
    message: String
    data: User
  }

  type User {
    id: Int
    fullName: String
    phoneNumber: String
    address: String
    dob: String
    role: Int
    status: Int
    staff: Staff
    driver: Driver
    customer: Customer
  }

  type Staff {
    id: Int
    title: String
    staffNo: String
  }

  type Customer {
    id: Int
    level: String
    customerNo: String
  }

  type Driver {
    id: Int
    bookingType: Int
    driverNo: String
  }
`
