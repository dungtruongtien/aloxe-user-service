"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query'
        }
    ]
});
exports.default = prisma;
//# sourceMappingURL=index.js.map