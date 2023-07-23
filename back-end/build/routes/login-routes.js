"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login-controller");
class ActRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', login_controller_1.loginnController.getUsers);
        this.router.get('/:id', login_controller_1.loginnController.getByIdUsr);
        this.router.get('/:usr/:pwd', login_controller_1.loginnController.getUsr);
        this.router.post('/:usr', login_controller_1.loginnController.getUser);
        this.router.post('/', login_controller_1.loginnController.insertUsr);
        this.router.put('/:id', login_controller_1.loginnController.updateUsr);
        this.router.delete('/:id', login_controller_1.loginnController.deleteUsr);
    }
}
const actRoutes = new ActRoutes();
exports.default = actRoutes.router;
