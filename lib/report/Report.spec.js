"use strict";

var _Report = _interopRequireDefault(require("./Report"));

var _Driver = _interopRequireDefault(require("../driver/Driver"));

var _Trip = _interopRequireDefault(require("../trip/Trip"));

var _globals = require("@jest/globals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _globals.describe)('Report', function () {
  var report;
  (0, _globals.beforeEach)(function () {
    report = new _Report["default"]();
  });
  (0, _globals.test)('should construct with empty drivers array', function () {
    (0, _globals.expect)(report.drivers.length).toEqual(0);
  });
  (0, _globals.test)('addDriver should push driver to drivers array', function () {
    var name = 'name';
    var driver = new _Driver["default"](name);
    (0, _globals.expect)(report.drivers.length).toEqual(0);
    report.addDriver(driver);
    (0, _globals.expect)(report.drivers.length).toEqual(1);
    (0, _globals.expect)(report.drivers[0].name).toBe(name);
  });
  (0, _globals.test)('getDriver by name should get driver from drivers by name', function () {
    var name1 = "name1";
    var name2 = "name2";
    var driver1 = new _Driver["default"](name1);
    var driver2 = new _Driver["default"](name2);
    report.addDriver(driver1);
    report.addDriver(driver2);
    (0, _globals.expect)(report.getDriverByName(name1)).toBe(driver1);
    (0, _globals.expect)(report.getDriverByName(name2)).toBe(driver2);
  });
  (0, _globals.describe)('data management', function () {
    var driver1;
    var driver2;
    var driver3;
    (0, _globals.beforeEach)(function () {
      driver1 = new _Driver["default"]("Lauren");
      driver2 = new _Driver["default"]("Dan");
      driver3 = new _Driver["default"]("Kumi");
      driver2.addTrip(new _Trip["default"]('Dan', '07:15', '07:45', '17.3'));
      driver2.addTrip(new _Trip["default"]('Dan', '06:12', '06:32', '21.8'));
      driver1.addTrip(new _Trip["default"]('Lauren', '12:01', '13:16', '42.00'));
      report.addDriver(driver3);
      report.addDriver(driver2);
      report.addDriver(driver1);
    });
    (0, _globals.test)('sort should sort drivers from most miles driven to least ', function () {
      (0, _globals.expect)(report.drivers[0]).toBe(driver3);
      (0, _globals.expect)(report.drivers[1]).toBe(driver2);
      (0, _globals.expect)(report.drivers[2]).toBe(driver1);
      report.sort();
      (0, _globals.expect)(report.drivers[0]).toBe(driver1);
      (0, _globals.expect)(report.drivers[1]).toBe(driver2);
      (0, _globals.expect)(report.drivers[2]).toBe(driver3);
    });
    (0, _globals.test)('formatData should round miles, and average speeds to nearest integer', function () {
      report.formatData();
      (0, _globals.expect)(driver1.totalMiles).toEqual(42);
      (0, _globals.expect)(driver1.totalAverageSpeed).toEqual(34);
      (0, _globals.expect)(driver2.totalMiles).toEqual(39);
      (0, _globals.expect)(driver2.totalAverageSpeed).toEqual(47);
      (0, _globals.expect)(driver3.totalMiles).toEqual(0);
      (0, _globals.expect)(driver3.totalAverageSpeed).toEqual(0);
    });
    (0, _globals.test)('buildReport should build a report body from its data', function () {
      var expectedReport = "Lauren: 42 miles @ 34 mph\nDan: 39 miles @ 47 mph\nKumi: 0 miles\n";
      report.sort();
      report.formatData();
      var actualReport = report.buildReport();
      (0, _globals.expect)(actualReport).toBe(expectedReport);
    });
  });
});