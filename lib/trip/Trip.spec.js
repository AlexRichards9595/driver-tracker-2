"use strict";

var _Trip = _interopRequireDefault(require("./Trip"));

var _globals = require("@jest/globals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _globals.describe)('Trip', function () {
  test('constructor should return name and parsed miles', function () {
    var name = "name";
    var trip = new _Trip["default"](name, "07:15", "07:45", "17.3");
    (0, _globals.expect)(trip.name).toBe(name);
    (0, _globals.expect)(trip.miles).toBe(17.3);
    (0, _globals.expect)(trip.duration).toBe(.5);
    (0, _globals.expect)(trip.averageSpeed).toBe(34.6);
  });
});