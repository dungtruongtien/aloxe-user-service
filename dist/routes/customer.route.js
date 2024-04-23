"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerRoute = void 0;
var express_1 = __importDefault(require("express"));
var customer_controller_rest_1 = __importDefault(require("../controller/customer/customer.controller.rest"));
var createCustomerRoute = function () {
    var router = express_1.default.Router();
    var customerController = new customer_controller_rest_1.default();
    router.get('/', customerController.getListCustomers.bind(customerController));
    return router;
};
exports.createCustomerRoute = createCustomerRoute;
//# sourceMappingURL=customer.route.js.map