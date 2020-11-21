"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _winston = _interopRequireDefault(require("winston"));

var _default = _winston["default"].createLogger({
  format: _winston["default"].format.prettyPrint(),
  transports: [//
  // - Write to all logs with level `info` and below to `combined.log`
  // - Write all logs error (and below) to `error.log`.
  //
  new _winston["default"].transports.File({
    filename: 'error.log',
    level: 'error'
  }), new _winston["default"].transports.File({
    filename: 'debug.log'
  })]
});

exports["default"] = _default;