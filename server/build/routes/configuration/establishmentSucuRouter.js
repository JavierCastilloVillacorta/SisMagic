"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const establishmentSucuController_1 = __importDefault(require("../../controllers/configuration/establishmentSucuController"));
class ConfRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', establishmentSucuController_1.default.list);
        this.router.get('/:id', establishmentSucuController_1.default.get);
        this.router.post('/', establishmentSucuController_1.default.create);
        this.router.put('/:id', establishmentSucuController_1.default.update);
        this.router.delete('/:id', establishmentSucuController_1.default.delete);
    }
}
const establishmentconfSucuRoutes = new ConfRoutes();
exports.default = establishmentconfSucuRoutes.router;
