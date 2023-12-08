"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const participantes_controller_1 = require("../controllers/participantes-controller");
class ParticipantesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', participantes_controller_1.participantesController.getPar);
        this.router.get('/:numCon', participantes_controller_1.participantesController.getByIdPar);
        this.router.post('/', participantes_controller_1.participantesController.insPar);
        this.router.put('/:numCon', participantes_controller_1.participantesController.updatePar);
        this.router.delete('/:numCon', participantes_controller_1.participantesController.deletePar);
    }
}
const parRoutes = new ParticipantesRoutes();
exports.default = parRoutes.router;
