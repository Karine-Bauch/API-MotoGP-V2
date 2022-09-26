"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
// Parse Json
app.use(express_1.default.json());
// Parse urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: (_a = process.env.CORS_DOMAIN) !== null && _a !== void 0 ? _a : '*' }));
//TODO config views
//TODO config static folder
//TODO config API DOCS / JSDOCS
app.use(router_1.default);
module.exports = app;
