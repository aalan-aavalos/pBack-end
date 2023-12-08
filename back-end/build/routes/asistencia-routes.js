"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asiste_controller_1 = require("../controllers/asiste-controller");
class AsistRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', asiste_controller_1.asistenciaController.getasis);
        this.router.get('/:numCon', asiste_controller_1.asistenciaController.getByIdasis);
        this.router.post('/', asiste_controller_1.asistenciaController.agAsis);
    }
}
const parRoutes = new AsistRoutes();
exports.default = parRoutes.router;
