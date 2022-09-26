"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const riderRouter = require('./riderRouter');
const router = express_1.default.Router();
router.all('/', () => { console.log('page accueil'); });
router.use('/riders', riderRouter);
// router.use('/*', () => {
//   console.log('Error 404: API route not found');
// })
exports.default = router;
