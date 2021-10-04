"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperfaceClient = void 0;
var one_sdk_1 = require("@superfaceai/one-sdk");
var current_city_1 = require("./types/weather/current-city");
var typeDefinitions = __assign({}, current_city_1.weatherCurrentCity);
exports.SuperfaceClient = one_sdk_1.createTypedClient(typeDefinitions);
