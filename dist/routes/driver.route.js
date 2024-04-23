"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDriverRoute = void 0;
var express_1 = __importDefault(require("express"));
var driver_controller_rest_1 = __importDefault(require("../controller/driver/driver.controller.rest"));
var createDriverRoute = function () {
    var router = express_1.default.Router();
    var driverController = new driver_controller_rest_1.default();
    router.get('/', driverController.getListDrivers.bind(driverController));
    router.put('/online-session', driverController.updateDriverOnlineSession.bind(driverController));
    router.get('/available-drivers', driverController.getAvailableDrivers.bind(driverController));
    router.post('/online', driverController.handleDriverOnline.bind(driverController));
    return router;
};
exports.createDriverRoute = createDriverRoute;
//# sourceMappingURL=driver.route.js.map