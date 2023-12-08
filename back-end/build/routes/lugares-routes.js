"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lugares_controller_1 = require("../controllers/lugares-controller");
const express_1 = require("express");
class LugaresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', lugares_controller_1.lugaresController.getLug);
    }
}
const lugaresRoutes = new LugaresRoutes();
exports.default = lugaresRoutes.router;
