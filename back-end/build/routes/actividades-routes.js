"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividades_controller_1 = require("../controllers/actividades-controller");
class ActRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', actividades_controller_1.actividadesController.getAct);
        this.router.get('/:idAct', actividades_controller_1.actividadesController.getByIdAct);
        this.router.post('/', actividades_controller_1.actividadesController.insertAct);
        this.router.put('/:idAct', actividades_controller_1.actividadesController.updateAct);
        this.router.delete('/:idAct', actividades_controller_1.actividadesController.deleteAct);
    }
}
const actRoutes = new ActRoutes();
exports.default = actRoutes.router;
