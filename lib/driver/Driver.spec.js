"use strict";

var _Driver = _interopRequireDefault(require("./Driver"));

var _globals = require("@jest/globals");

var _Trip = _interopRequireDefault(require("../trip/Trip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _globals.describe)('Driver', function () {
  test('should construct with name and an empty trips array', function () {
    var name = "name";
    var driver = new _Driver["default"](name);
    (0, _globals.expect)(driver.name).toBe(name);
    (0, _globals.expect)(driver.trips.length).toEqual(0);
    (0, _globals.expect)(driver.totalMiles).toEqual(0);
  });
  test('getTotalAverage speed should get the average speed from the total duration and miles', function () {
    var driver = new _Driver["default"]("name");
    driver.addTrip(new _Trip["default"]("name", "7:45", "8:45", "40"));
    (0, _globals.expect)(driver.totalAverageSpeed).toEqual(40);
    driver.addTrip(new _Trip["default"]("name", "7:45", "10:45", "20"));
    (0, _globals.expect)(driver.totalAverageSpeed).toEqual(15);
  });
  (0, _globals.describe)('addTrip', function () {
    var driver;
    var trip1;
    var trip2;
    (0, _globals.beforeEach)(function () {
      trip1 = new _Trip["default"]("name1", "7:15", "8:15", "25");
      trip2 = new _Trip["default"]("name1", "7:15", "9:15", "35");
      driver = new _Driver["default"]("name1");
    });
    test('addTrip should push a trip in the trips array', function () {
      driver.addTrip(trip1);
      driver.addTrip(trip2);
      (0, _globals.expect)(driver.trips.length).toEqual(2);
      (0, _globals.expect)(driver.trips[0]).toBe(trip1);
      (0, _globals.expect)(driver.trips[1]).toBe(trip2);
    });
    test('should add the trip miles to the drivers total miles', function () {
      (0, _globals.expect)(driver.totalMiles).toEqual(0);
      driver.addTrip(trip1);
      (0, _globals.expect)(driver.totalMiles).toEqual(25);
      driver.addTrip(trip2);
      (0, _globals.expect)(driver.totalMiles).toEqual(60);
    });
    test('should add the trip miles to the drivers total miles', function () {
      (0, _globals.expect)(driver.totalDuration).toEqual(0);
      driver.addTrip(trip1);
      (0, _globals.expect)(driver.totalDuration).toEqual(1);
      driver.addTrip(trip2);
      (0, _globals.expect)(driver.totalDuration).toEqual(3);
    });
    test('should ignore a trip if average speed is less than 5', function () {
      driver.addTrip(new _Trip["default"]("name1", "7:45", "8:45", "4"));
      (0, _globals.expect)(driver.trips.length).toBe(0);
      (0, _globals.expect)(driver.totalDuration).toBe(0);
      (0, _globals.expect)(driver.totalMiles).toBe(0);
    });
    test('should ignore a trip if average speed is more than 100', function () {
      driver.addTrip(new _Trip["default"]("name1", "7:45", "8:45", "100"));
      (0, _globals.expect)(driver.trips.length).toBe(0);
      (0, _globals.expect)(driver.totalDuration).toBe(0);
      (0, _globals.expect)(driver.totalMiles).toBe(0);
    });
  });
});