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
exports.DriverOnlineSessionService = void 0;
var driver_online_session_repository_1 = require("../../repository/driver/driver_online_session.repository");
var DriverOnlineSessionService = (function () {
    function DriverOnlineSessionService(driverOnlineSessionRepo, driverRepo) {
        this.driverOnlineSessionRepo = driverOnlineSessionRepo;
        this.driverRepo = driverRepo;
    }
    DriverOnlineSessionService.prototype.switchOnOffStatus = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var driverData, created, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(input.type === driver_online_session_repository_1.DriverOnlineSessionOnlineStatusEnum.ONLINE)) return [3, 2];
                        return [4, this.driverOnlineSessionRepo.hardDelete(input.driverId)];
                    case 1: return [2, _a.sent()];
                    case 2: return [4, this.driverRepo.getDriver(input.driverId)];
                    case 3:
                        driverData = _a.sent();
                        if (!driverData) {
                            throw new Error('DriverNotFound');
                        }
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4, this.driverOnlineSessionRepo.createOne({
                                driver: {
                                    connect: { id: driverData.id }
                                },
                                currentLatitude: input.lat,
                                currentLongitude: input.long,
                                onlineStatus: driver_online_session_repository_1.DriverOnlineSessionOnlineStatusEnum.ONLINE,
                                workingStatus: driver_online_session_repository_1.DriverOnlineSessionWorkingStatusEnum.WAITING_FOR_CUSTOMER
                            })];
                    case 5:
                        created = _a.sent();
                        if (!created) {
                            throw new Error('Cannot switch user to online status');
                        }
                        return [2, created];
                    case 6:
                        err_1 = _a.sent();
                        return [2, null];
                    case 7: return [2];
                }
            });
        });
    };
    DriverOnlineSessionService.prototype.updateDriverOnlineSession = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var updateDto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateDto = {
                            currentLongitude: input.currentLongitude,
                            currentLatitude: input.currentLatitude,
                            onlineStatus: input.onlineStatus,
                            workingStatus: input.workingStatus
                        };
                        return [4, this.driverOnlineSessionRepo.update(input.driverId, updateDto)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    return DriverOnlineSessionService;
}());
exports.DriverOnlineSessionService = DriverOnlineSessionService;
//# sourceMappingURL=driver_online_session.service.js.map