"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let ProduseService = class ProduseService {
    constructor(produsModel) {
        this.produsModel = produsModel;
    }
    async create(createProdusDto) {
        const createdProdus = new this.produsModel(createProdusDto);
        return createdProdus.save();
    }
    async findAll() {
        return this.produsModel.find({ isDeleted: false }).exec();
    }
    async findOne(id) {
        return this.produsModel.findById(id).exec();
    }
    async update(id, updatedProdusDto) {
        return this.produsModel.findByIdAndUpdate(id, updatedProdusDto, { useFindAndModify: false }).exec();
    }
    async delete(id) {
        return this.produsModel.findByIdAndUpdate(id, { isDeleted: true }, { useFindAndModify: false }).exec();
    }
};
ProduseService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('PRODUS_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProduseService);
exports.ProduseService = ProduseService;
//# sourceMappingURL=produse.service.js.map