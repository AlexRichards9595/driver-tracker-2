"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = void 0;

var _FileHandler = require("./FileHandler.js");

var _Report = _interopRequireDefault(require("./Report.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var run = function run() {
  var report = new _Report["default"]();
  var data = (0, _FileHandler.parseLines)((0, _FileHandler.getLinesFromFile)());
  data.drivers.forEach(function (driver) {
    return report.addDriver(driver);
  });
  data.trips.forEach(function (trip) {
    return report.getDriverByName(trip.name).addTrip(trip);
  });
  var output = report.buildReport();
  (0, _FileHandler.writeFile)(output);
};

exports.run = run;