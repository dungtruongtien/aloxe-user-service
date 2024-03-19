"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var user_repository_1 = require("../repository/user.repository");
var UserService = (function () {
    function UserService(userRepo, userAccountRepo) {
        this.userRepo = userRepo;
        this.userAccountRepo = userAccountRepo;
    }
    UserService.prototype.getUsers = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.userRepo.getUsers(filter)];
                    case 1:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    UserService.prototype.getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.userRepo.getUser(id)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.me = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.userRepo.getUser(id)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.createCustomerUser = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var existsCustomerUser, createCustomerUserDto, customerUser, createUserAccountDto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.userRepo.getCustomerUserByPhone(input.phoneNumber)];
                    case 1:
                        existsCustomerUser = _a.sent();
                        if (!existsCustomerUser) {
                            throw new Error('RegisteredPhoneNumber');
                        }
                        createCustomerUserDto = {
                            fullName: input.fullName,
                            phoneNumber: input.phoneNumber,
                            email: input.email,
                            address: input.address,
                            dob: input.dob,
                            role: user_repository_1.CustomerRoleEnum.Customer,
                            status: user_repository_1.CustomerStatusEnum.Active,
                            customer: {
                                create: {
                                    customerNo: input.customer.customerNo,
                                    level: input.customer.level
                                }
                            }
                        };
                        return [4, this.userRepo.createCustomerUser(createCustomerUserDto)];
                    case 2:
                        customerUser = _a.sent();
                        createUserAccountDto = {
                            username: input.phoneNumber,
                            password: input.password,
                            userId: customerUser.id
                        };
                        return [4, this.userAccountRepo.createUserAccount(createUserAccountDto)];
                    case 3:
                        _a.sent();
                        return [2, customerUser];
                }
            });
        });
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map