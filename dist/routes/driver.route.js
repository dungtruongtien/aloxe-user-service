"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var driver_controller_rest_1 = __importDefault(require("../controller/driver.controller.rest"));
var router = express_1.default.Router();
var driverController = new driver_controller_rest_1.default();
router.get('/', driverController.getListDrivers.bind(driverController));
router.put('/online-session', driverController.updateDriverOnlineSession.bind(driverController));
router.get('/available-drivers', driverController.getAvailableDrivers.bind(driverController));
exports.default = router;
//# sourceMappingURL=driver.route.js.map