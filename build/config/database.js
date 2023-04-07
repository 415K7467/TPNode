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
        exports.database = database = new better_sqlite3_1.default('kwiz.db');
        loadDatabase(database);
        return resolve();
    });
};
exports.connection = connection;
const loadDatabase = (database) => {
    database.prepare(`CREATE TABLE IF NOT EXISTS kwizs
         (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             title VARCHAR NOT NULL
         )`).run();
    database.prepare(`CREATE TABLE IF NOT EXISTS questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            kwizId INTEGER NOT NULL,
            question VARCHAR NOT NULL,
            FOREIGN KEY (kwizId) REFERENCES kwizs(id)
            )`).run();
    database.prepare(`CREATE TABLE IF NOT EXISTS responses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            questionId INTEGER NOT NULL,
            response VARCHAR NOT NULL,
            correct BOOLEAN NOT NULL,
            FOREIGN KEY (questionId) REFERENCES questions(id)
            )`).run();
};
