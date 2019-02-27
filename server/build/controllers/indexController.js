"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API is /confi/usuario' });
    }
}
exports.indexController = new IndexController();
