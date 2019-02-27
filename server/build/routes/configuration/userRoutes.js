"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = __importDefault(require("../../controllers/configuration/userControllers"));
class ConfRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', userControllers_1.default.listUser);
        this.router.get('/:id', userControllers_1.default.getUser);
        this.router.post('/', userControllers_1.default.createUser);
        this.router.put('/:id', userControllers_1.default.updateUser);
        this.router.delete('/:id', userControllers_1.default.deleteUser);
    }
}
const confRoutes = new ConfRoutes();
exports.default = confRoutes.router;
