"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produseProviders = void 0;
const produs_schema_1 = require("../schemas/produs.schema");
exports.produseProviders = [
    {
        provide: 'PRODUS_MODEL',
        useFactory: (connection) => connection.model('Produs', produs_schema_1.ProdusSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=produse.providers.js.map