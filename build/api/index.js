"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const annonce_1 = __importDefault(require("./routes/annonce"));
const router = express_1.default.Router();
router.use('/annonces', annonce_1.default);
exports.default = router;
