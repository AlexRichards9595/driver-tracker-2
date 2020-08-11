"use strict";

var _globals = require("@jest/globals");

var _FileHandler = require("./FileHandler");

var _Driver = _interopRequireDefault(require("../driver/Driver"));

var _Trip = _interopRequireDefault(require("../trip/Trip"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.mock('fs');
(0, _globals.describe)('FileHandler', function () {
  (0, _globals.beforeEach)(function () {
    _fs["default"].writeFile.mockClear();
  });
  (0, _globals.describe)('parseFile', function () {
    (0, _globals.test)('should return an drivers and trips given strings that start with drivers and trips', function () {
      var lines = ["Driver Dan", "Driver Lauren", "Driver Kumi", "Trip Dan 07:15 07:45 17.3", "Trip Dan 06:12 06:32 21.8"];
      var returnValue = (0, _FileHandler.parseFile)(lines);
      (0, _globals.expect)(returnValue.drivers.length).toEqual(3);
      (0, _globals.expect)(returnValue.trips.length).toEqual(2);
      returnValue.drivers.forEach(function (x) {
        (0, _globals.expect)(x instanceof _Driver["default"]).toBe(true);
      });
      returnValue.trips.forEach(function (x) {
        (0, _globals.expect)(x instanceof _Trip["default"]).toBe(true);
      });
    });
  });
  (0, _globals.describe)('writeFile', function () {
    (0, _globals.test)('should call fs.writefile with the correct parameters', function () {
      var report = "fake report";
      var returnValue = (0, _FileHandler.writeFile)(report);
      (0, _globals.expect)(_fs["default"].writeFile).toHaveBeenCalledWith("output.txt", report, _globals.expect.any(Function));
      (0, _globals.expect)(_fs["default"].writeFile).toHaveBeenCalledTimes(1);
    });
  });
});