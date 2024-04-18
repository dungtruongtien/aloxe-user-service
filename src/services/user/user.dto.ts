export interface ICreateCustomerUserInput {
  fullName: string
  phoneNumber: string
  password: string
  email: string
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

export interface IRegisterCustomerUserInput {
  fullName: string
  phoneNumber: string
  email: string
  address: string
  dob: string
  password: string
}
