"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRoute = void 0;
var express_1 = __importDefault(require("express"));
var user_controller_rest_1 = __importDefault(require("../controller/user/user.controller.rest"));
var auth_middleware_1 = require("../middlewares/auth.middleware");
var createUserRoute = function () {
    var router = express_1.default.Router();
    var userController = new user_controller_rest_1.default();
    router.get('/me', auth_middleware_1.restAuthenticate, userController.me.bind(userController));
    router.get('/:id', userController.getUser.bind(userController));
    router.get('/', userController.getListUsers.bind(userController));
    router.post('/', userController.createCustomerUser.bind(userController));
    router.post('/register', userController.registerCustomerUser.bind(userController));
    return router;
};
exports.createUserRoute = createUserRoute;
//# sourceMappingURL=user.route.js.map