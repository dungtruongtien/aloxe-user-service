"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_rest_1 = __importDefault(require("../controller/user.controller.rest"));
var router = express_1.default.Router();
var userController = new user_controller_rest_1.default();
router.get('/:id', userController.getUser.bind(userController));
exports.default = router;
//# sourceMappingURL=user.route.js.map