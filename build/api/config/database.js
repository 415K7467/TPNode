"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.connection = void 0;
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
let database;
exports.database = database;
const connection = () => {
    return new Promise((resolve) => {
        exports.database = database = new better_sqlite3_1.default('leboncwoin.db');
        loadDatabase(database);
        return resolve();
    });
};
exports.connection = connection;
const loadDatabase = (database) => {
    database.prepare(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            identifiant VarChar2(255) NOT NULL)`).run();
    database.prepare(`CREATE TABLE IF NOT EXISTS annonces (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titre VarChar2(255) NOT NULL,
            description VarChar2(255) NOT NULL,
            prix INTEGER NOT NULL,
            id_user INTEGER NOT NULL,
            FOREIGN KEY (id_user) REFERENCES users(id))`).run();
};
