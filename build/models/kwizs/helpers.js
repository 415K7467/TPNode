"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KwizHelper = void 0;
const database_1 = require("../../config/database");
var KwizHelper;
(function (KwizHelper) {
    KwizHelper.getAllKwizs = () => {
        return database_1.database.prepare('SELECT * FROM kwizs').all();
    };
    KwizHelper.createKwiz = (title) => {
        database_1.database.prepare('INSERT INTO kwizs (title) VALUES (?)').run(title);
    };
})(KwizHelper = exports.KwizHelper || (exports.KwizHelper = {}));
