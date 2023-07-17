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
Object.defineProperty(exports, "__esModule", { value: true });
exports.actividadesController = void 0;
const database_1 = require("../database");
class ActividadesController {
    getAct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.query('SELECT*FROM Actividades');
            res.json(result[0]);
        });
    }
    getByIdAct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.pool.query('SELECT*FROM Actividades WHERE id=?', [id]);
            res.json(result[0]);
        });
    }
    insertAct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO Actividades SET ?', [req.body]);
            res.json({ Message: 'Se inserto correctamente' });
        });
    }
    updateAct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pool.query('UPDATE Actividades SET ? WHERE id=?', [req.body, id]);
            res.json({ mesagge: 'Se ha actualizado con exito' });
        });
    }
    deleteAct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pool.query('DELETE FROM Actividades WHERE id=?', [id]);
            res.json({ Message: 'Se ha eliminado correctamente' });
        });
    }
}
exports.actividadesController = new ActividadesController;
