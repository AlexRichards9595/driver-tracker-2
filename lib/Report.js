"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Report = /*#__PURE__*/function () {
  function Report() {
    _classCallCheck(this, Report);

    this.drivers = [];
  }

  _createClass(Report, [{
    key: "addDriver",
    value: function addDriver(driver) {
      this.drivers.push(driver);
    }
  }, {
    key: "getDriverByName",
    value: function getDriverByName(name) {
      return this.drivers.find(function (x) {
        return x.name === name;
      });
    }
  }, {
    key: "sort",
    value: function sort() {
      this.drivers.sort(function (x, y) {
        return y.totalMiles - x.totalMiles;
      });
    }
  }, {
    key: "formatData",
    value: function formatData() {
      this.drivers.forEach(function (x) {
        return x.totalMiles = Math.round(x.totalMiles);
      });
      this.drivers.forEach(function (x) {
        return x.totalAverageSpeed = Math.round(x.totalAverageSpeed);
      });
    }
  }, {
    key: "buildReport",
    value: function buildReport() {
      this.sort();
      this.formatData();
      var report = "";

      var _iterator = _createForOfIteratorHelper(this.drivers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var driver = _step.value;

          if (driver.totalMiles > 0) {
            report += "".concat(driver.name, ": ").concat(driver.totalMiles, " miles @ ").concat(driver.totalAverageSpeed, " mph\n");
          } else {
            report += "".concat(driver.name, ": 0 miles\n");
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return report;
    }
  }]);

  return Report;
}();

var _default = Report;
exports["default"] = _default;