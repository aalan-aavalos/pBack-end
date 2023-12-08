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
exports.participantesController = void 0;
const database_1 = require("../database");
class ParticipantesController {
    getPar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.query('Select * From partipantes;');
            res.json(result[0]);
        });
    }
    getByIdPar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numCon } = req.params;
            const result = yield database_1.pool.query('Select * From partipantes where numCon = ?', [numCon]);
            res.json(result[0]);
        });
    }
    insPar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('Insert Into partipantes Set ?', [req.body]);
            res.json({ Message: 'Insertado' });
        });
    }
    updatePar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numCon } = req.params;
            yield database_1.pool.query('Update partipantes Set ? where numCon = ?', [req.body, numCon]);
            res.json({ Message: 'Actualizado' });
        });
    }
    deletePar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numCon } = req.params;
            yield database_1.pool.query('Delete FROM partipantes Where numCon = ?', [numCon]);
            res.json({ Message: 'Eliminado' });
        });
    }
}
exports.participantesController = new ParticipantesController;
