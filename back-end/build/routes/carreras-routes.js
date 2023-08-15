"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carreras_controller_1 = require("../controllers/carreras-controller");
class CarRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', carreras_controller_1.carreraController.getCar);
    }
}
const carRoutes = new CarRoutes();
exports.default = carRoutes.router;
