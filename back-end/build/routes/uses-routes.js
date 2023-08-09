"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = require("../controllers/users-controller");
const express_1 = require("express");
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', users_controller_1.usersController.getUsr);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
