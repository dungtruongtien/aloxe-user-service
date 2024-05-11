export interface ICreateCustomerUserArgs {
  input: ICreateCustomerUserInput
}

export interface ICreateCustomerUserInput {
  fullName: string
  phoneNumber: string
  password: string
  address?: string
  dob?: Date
  role: number
  status: number
  customer: ICreateCustomerInput
}

export interface ICreateCustomerInput {
  level: string
  customerNo: string
}
