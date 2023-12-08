"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
exports.pool = (0, promise_1.createPool)({
    host: 'roundhouse.proxy.rlwy.net',
    user: 'root',
    password: 'A5aehBDFGABhEbACeh6ae2aAf-d6HfBe',
    port: 36158,
    database: 'railway'
});
