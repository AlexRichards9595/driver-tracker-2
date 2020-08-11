"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFile = parseFile;
exports.writeFile = exports.readFile = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _Driver = _interopRequireDefault(require("../driver/Driver.js"));

var _Trip = _interopRequireDefault(require("../trip/Trip.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var readFile = function readFile() {
  if (!process.argv[2]) {
    console.log('Please specify a file to read');
    process.exit();
  }

  var lines = _fs["default"].readFileSync(process.argv[2], 'utf-8').split('\n');

  return parseFile(lines);
};

exports.readFile = readFile;

function parseFile(lines) {
  var data = {
    drivers: [],
    trips: []
  };
  lines.forEach(function (line) {
    var parsedLine = line.split(' ');

    if (parsedLine[0] === 'Driver') {
      data.drivers.push(new _Driver["default"](parsedLine[1]));
    } else if (parsedLine[0] === 'Trip') {
      data.trips.push(new _Trip["default"](parsedLine[1], parsedLine[2], parsedLine[3], parsedLine[4]));
    }
  });
  return data;
}

var writeFile = function writeFile(report) {
  _fs["default"].writeFile('output.txt', report, function () {
    return console.log("Report was written successfully");
  });
};

exports.writeFile = writeFile;