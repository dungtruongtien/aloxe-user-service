"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStaffRoute = void 0;
var express_1 = __importDefault(require("express"));
var staff_controller_rest_1 = __importDefault(require("../controller/staff/staff.controller.rest"));
var createStaffRoute = function () {
    var router = express_1.default.Router();
    var staffController = new staff_controller_rest_1.default();
    router.get('/', staffController.getListStaffs.bind(staffController));
    return router;
};
exports.createStaffRoute = createStaffRoute;
//# sourceMappingURL=staff.route.js.map