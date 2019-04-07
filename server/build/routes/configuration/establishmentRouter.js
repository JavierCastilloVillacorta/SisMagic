"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const establishmentControllers_1 = __importDefault(require("../../controllers/configuration/establishmentControllers"));
class ConfRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', establishmentControllers_1.default.list);
        this.router.get('/:id', establishmentControllers_1.default.get);
        this.router.post('/', establishmentControllers_1.default.create);
        this.router.put('/:id', establishmentControllers_1.default.update);
        this.router.delete('/:id', establishmentControllers_1.default.delete);
    }
}
const establishmentconfRoutes = new ConfRoutes();
exports.default = establishmentconfRoutes.router;
