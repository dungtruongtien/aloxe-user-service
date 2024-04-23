"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRootRoute = void 0;
var express_1 = __importDefault(require("express"));
var user_route_1 = require("./user.route");
var staff_route_1 = require("./staff.route");
var driver_route_1 = require("./driver.route");
var customer_route_1 = require("./customer.route");
var createRootRoute = function () {
    var router = express_1.default.Router();
    router.use('/users', (0, user_route_1.createUserRoute)());
    router.use('/drivers', (0, driver_route_1.createDriverRoute)());
    router.use('/customers', (0, customer_route_1.createCustomerRoute)());
    router.use('/staffs', (0, staff_route_1.createStaffRoute)());
    return router;
};
exports.createRootRoute = createRootRoute;
//# sourceMappingURL=api.route.js.map