"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM store WHERE `stateStore` != 3 AND `idMatrix` IS NULL;');
            res.json(users);
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const store = yield database_1.default.query('SELECT * FROM store WHERE idStore = ?', [id]);
            if (store.length > 0) {
                return res.json(store[0]);
            }
            res.status(404).json({ text: 'Establecimiento no Existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO store SET ?', [req.body]);
            res.json({ text: 'Establecimiento Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE store SET ? WHERE idStore=?', [req.body, id]);
            res.json({ text: 'Establecimiento Actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM store WHERE idStore=?', [id]);
            res.json({ text: 'Usuario Eliminado' });
        });
    }
}
const establishmentController = new UserController();
exports.default = establishmentController;
/*
 {
    "nameStore": "El Mago",
    "rucStore": "123456789",
    "addressStore": "Jr Sucre 123",
    "mobileStore": "123456789",
    "stateStore": 1,
    "imageStore": "imgdefault.png",
    "phoneStore": "123456789",
    "idType": 1
}
*/ 
