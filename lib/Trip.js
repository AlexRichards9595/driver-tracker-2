"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Trip = /*#__PURE__*/function () {
  function Trip(name, startTime, endTime, miles) {
    _classCallCheck(this, Trip);

    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.miles = parseFloat(miles);
    this.duration = this.getDuration();
    this.averageSpeed = this.calculateAverageSpeed();
  }

  _createClass(Trip, [{
    key: "getDuration",
    value: function getDuration() {
      var MS_IN_HOUR = 3600000;
      var splitStartTime = this.startTime.split(":");
      var parsedStartTime = new Date();
      parsedStartTime.setHours(splitStartTime[0], splitStartTime[1], 0, 0);
      var splitEndTime = this.endTime.split(":");
      var parsedEndTime = new Date();
      parsedEndTime.setHours(splitEndTime[0], splitEndTime[1], 0, 0);
      return (parsedEndTime.getTime() - parsedStartTime.getTime()) / MS_IN_HOUR;
    }
  }, {
    key: "calculateAverageSpeed",
    value: function calculateAverageSpeed() {
      return this.miles / this.duration;
    }
  }]);

  return Trip;
}();

var _default = Trip;
exports["default"] = _default;