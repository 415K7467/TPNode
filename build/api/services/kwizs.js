"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KwizService = void 0;
const helpers_1 = require("../models/kwizs/helpers");
var KwizService;
(function (KwizService) {
    KwizService.getAllKwizs = () => {
        return helpers_1.KwizHelper.getAllKwizs();
    };
    KwizService.createKwiz = (title) => {
        helpers_1.KwizHelper.createKwiz(title);
    };
})(KwizService = exports.KwizService || (exports.KwizService = {}));
