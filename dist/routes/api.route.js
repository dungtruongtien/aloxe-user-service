"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_route_1 = __importDefault(require("./user.route"));
var staff_route_1 = __importDefault(require("./staff.route"));
var driver_route_1 = __importDefault(require("./driver.route"));
var customer_route_1 = __importDefault(require("./customer.route"));
var router = express_1.default.Router();
router.use('/users', user_route_1.default);
router.use('/drivers', driver_route_1.default);
router.use('/customers', customer_route_1.default);
router.use('/staffs', staff_route_1.default);
exports.default = router;
//# sourceMappingURL=api.route.js.map