"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Query {\n    getUser(id: Int): GetUserRes\n    me: GetUserRes\n    users: [User]\n  }\n\n  extend type Mutation {\n    createCustomerUser(input: CreateCustomerUserRequest): CreateCustomerUserResponse\n  }\n\n  type UserEntity {\n    fullName: String\n    phoneNumber: String\n    password: String\n    email: String\n    address: String\n    dob: String\n    role: Int\n    status: Int\n  }\n\n  type CreateCustomerUserResponse {\n    code: String\n    message: String\n    data: UserEntity\n  }\n\n  input CreateCustomerUserRequest {\n    fullName: String!\n    phoneNumber: String!\n    password: String!\n    email: String!\n    address: String\n    dob: String\n    role: Int\n    status: Int\n    customer: CreateCustomerRequest\n  }\n  \n  input CreateCustomerRequest {\n    level: String\n    customerNo: String\n  }\n\n  type GetUserRes {\n    code: String\n    message: String\n    data: User\n  }\n\n  type User {\n    id: Int\n    fullName: String\n    phoneNumber: String\n    email: String\n    address: String\n    dob: String\n    role: Int\n    status: Int\n    staff: Staff\n    driver: Driver\n    customer: Customer\n  }\n\n  type Staff {\n    id: Int\n    title: String\n    staffNo: String\n  }\n\n  type Customer {\n    id: Int\n    level: String\n    customerNo: String\n  }\n\n  type Driver {\n    id: Int\n    bookingType: Int\n    driverNo: String\n  }\n"], ["\n  extend type Query {\n    getUser(id: Int): GetUserRes\n    me: GetUserRes\n    users: [User]\n  }\n\n  extend type Mutation {\n    createCustomerUser(input: CreateCustomerUserRequest): CreateCustomerUserResponse\n  }\n\n  type UserEntity {\n    fullName: String\n    phoneNumber: String\n    password: String\n    email: String\n    address: String\n    dob: String\n    role: Int\n    status: Int\n  }\n\n  type CreateCustomerUserResponse {\n    code: String\n    message: String\n    data: UserEntity\n  }\n\n  input CreateCustomerUserRequest {\n    fullName: String!\n    phoneNumber: String!\n    password: String!\n    email: String!\n    address: String\n    dob: String\n    role: Int\n    status: Int\n    customer: CreateCustomerRequest\n  }\n  \n  input CreateCustomerRequest {\n    level: String\n    customerNo: String\n  }\n\n  type GetUserRes {\n    code: String\n    message: String\n    data: User\n  }\n\n  type User {\n    id: Int\n    fullName: String\n    phoneNumber: String\n    email: String\n    address: String\n    dob: String\n    role: Int\n    status: Int\n    staff: Staff\n    driver: Driver\n    customer: Customer\n  }\n\n  type Staff {\n    id: Int\n    title: String\n    staffNo: String\n  }\n\n  type Customer {\n    id: Int\n    level: String\n    customerNo: String\n  }\n\n  type Driver {\n    id: Int\n    bookingType: Int\n    driverNo: String\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=typedef.js.map