"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormatSelect = exports.TimezoneSelect = exports.IntervalSelect = exports.MinuteSelect = exports.HourSelect = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ControlLabel = require("react-bootstrap/lib/ControlLabel");

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _FormGroup = require("react-bootstrap/lib/FormGroup");

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControl = require("react-bootstrap/lib/FormControl");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Intl = require("components/Intl");

var _Intl2 = _interopRequireDefault(_Intl);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

require("moment-timezone");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HourSelect = exports.HourSelect = function HourSelect(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value;


  var hours = [];

  for (var i = 0; i < 24; i++) {
    hours.push(i);
  }return _react2.default.createElement(
    _FormGroup2.default,
    null,
    _react2.default.createElement(
      _ControlLabel2.default,
      null,
      "hours"
    ),
    _react2.default.createElement(
      _FormControl2.default,
      { componentClass: "select", onChange: onChange, value: value },
      hours.map(function (hour) {
        return _react2.default.createElement(
          "option",
          { key: "hour_" + hour, value: hour },
          hour
        );
      })
    )
  );
};

HourSelect.propTypes = {
  onChange: _react.PropTypes.func,
  value: _react.PropTypes.string
};

var MinuteSelect = exports.MinuteSelect = function MinuteSelect(_ref2) {
  var onChange = _ref2.onChange,
      value = _ref2.value;


  var minutes = [];

  for (var i = 0; i < 60; i += 5) {
    minutes.push(i);
  }return _react2.default.createElement(
    _FormGroup2.default,
    null,
    _react2.default.createElement(
      _ControlLabel2.default,
      null,
      _react2.default.createElement(_Intl2.default, { text: "minutes" })
    ),
    _react2.default.createElement(
      _FormControl2.default,
      { componentClass: "select", onChange: onChange, value: value },
      minutes.map(function (minute) {
        return _react2.default.createElement(
          "option",
          { key: "minute_" + minute, value: minute },
          minute
        );
      })
    )
  );
};

MinuteSelect.propTypes = {
  onChange: _react.PropTypes.func,
  value: _react.PropTypes.string
};

var IntervalSelect = exports.IntervalSelect = function IntervalSelect(_ref3) {
  var onChange = _ref3.onChange,
      value = _ref3.value;
  return _react2.default.createElement(
    _FormGroup2.default,
    null,
    _react2.default.createElement(
      _ControlLabel2.default,
      null,
      _react2.default.createElement(_Intl2.default, { text: "interval (days)" })
    ),
    _react2.default.createElement(_FormControl2.default, { type: "number", value: value, onChange: onChange })
  );
};

IntervalSelect.propTypes = {
  onChange: _react.PropTypes.func,
  value: _react.PropTypes.string
};

var TimezoneSelect = exports.TimezoneSelect = function TimezoneSelect(_ref4) {
  var onChange = _ref4.onChange,
      value = _ref4.value;


  var favorites = ["GMT", "Europe/Paris"];

  var others = _moment2.default.tz.names().filter(function (name) {
    return favorites.indexOf(name) === -1;
  });

  var createZone = function createZone(name) {
    return _react2.default.createElement(
      "option",
      { value: name, key: name },
      name
    );
  };

  return _react2.default.createElement(
    _FormGroup2.default,
    null,
    _react2.default.createElement(
      _ControlLabel2.default,
      null,
      _react2.default.createElement(_Intl2.default, { text: "timezone" })
    ),
    _react2.default.createElement(
      _FormControl2.default,
      { componentClass: "select", onChange: onChange, value: value },
      _react2.default.createElement(
        "optgroup",
        { label: "favorites" },
        favorites.map(createZone)
      ),
      _react2.default.createElement(
        "optgroup",
        { label: "others" },
        others.map(createZone)
      )
    )
  );
};

TimezoneSelect.propTypes = {
  onChange: _react.PropTypes.func,
  value: _react.PropTypes.string
};

var FormatSelect = exports.FormatSelect = function FormatSelect(_ref5) {
  var onChange = _ref5.onChange,
      value = _ref5.value;
  return _react2.default.createElement(
    _FormGroup2.default,
    null,
    _react2.default.createElement(
      _ControlLabel2.default,
      null,
      _react2.default.createElement(_Intl2.default, { text: "format" })
    ),
    _react2.default.createElement(_FormControl2.default, {
      type: "text",
      value: value,
      onChange: onChange
    })
  );
};

FormatSelect.propTypes = {
  onChange: _react.PropTypes.func,
  value: _react.PropTypes.string
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HourSelect, "HourSelect", "src/components/DateComponent/formfields.js");

  __REACT_HOT_LOADER__.register(MinuteSelect, "MinuteSelect", "src/components/DateComponent/formfields.js");

  __REACT_HOT_LOADER__.register(IntervalSelect, "IntervalSelect", "src/components/DateComponent/formfields.js");

  __REACT_HOT_LOADER__.register(TimezoneSelect, "TimezoneSelect", "src/components/DateComponent/formfields.js");

  __REACT_HOT_LOADER__.register(FormatSelect, "FormatSelect", "src/components/DateComponent/formfields.js");
}();

;