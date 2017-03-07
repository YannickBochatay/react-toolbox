"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFormat = exports.setTimezone = exports.setInterval = exports.setMinute = exports.setHour = exports.setDate = exports.STATE_PROPERTY = undefined;
exports.reducer = reducer;

var _immutable = require("immutable");

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATE_PROPERTY = exports.STATE_PROPERTY = "components/date/edit/";

var SET_DATE = STATE_PROPERTY + "/SET_DATE";
var SET_HOUR = STATE_PROPERTY + "/SET_HOUR";
var SET_MINUTE = STATE_PROPERTY + "/SET_MINUTE";
var SET_INTERVAL = STATE_PROPERTY + "/SET_INTERVAL";
var SET_TIMEZONE = STATE_PROPERTY + "/SET_TIMEZONE";
var SET_FORMAT = STATE_PROPERTY + "/SET_FORMAT";

var initialState = {
  set: {
    hour: null,
    minute: null
  },
  interval: { days: null },
  timezone: "GMT",
  format: "DD/MM/YYYY HH:mm:ss"
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  var imState = _immutable2.default.fromJS(state);

  switch (action.type) {

    case SET_DATE:

      return imState.mergeDeep(action.date).toJS();

    case SET_HOUR:

      return imState.mergeDeep({ set: { hour: action.hour } }).toJS();

    case SET_MINUTE:

      return imState.mergeDeep({ set: { minute: action.minute } }).toJS();

    case SET_INTERVAL:

      return imState.mergeDeep({ interval: { days: action.days } }).toJS();

    case SET_TIMEZONE:

      return imState.set("timezone", action.timezone).toJS();

    case SET_FORMAT:

      return imState.set("format", action.format).toJS();

    default:

      return state;
  }
}

var setDate = exports.setDate = function setDate(date) {
  return { type: SET_DATE, date: date };
};

var setHour = exports.setHour = function setHour(hour) {
  return { type: SET_HOUR, hour: hour };
};

var setMinute = exports.setMinute = function setMinute(minute) {
  return { type: SET_MINUTE, minute: minute };
};

var setInterval = exports.setInterval = function setInterval(days) {
  return { type: SET_INTERVAL, days: days };
};

var setTimezone = exports.setTimezone = function setTimezone(timezone) {
  return { type: SET_TIMEZONE, timezone: timezone };
};

var setFormat = exports.setFormat = function setFormat(format) {
  return { type: SET_FORMAT, format: format };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(STATE_PROPERTY, "STATE_PROPERTY", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(SET_DATE, "SET_DATE", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(SET_HOUR, "SET_HOUR", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(SET_MINUTE, "SET_MINUTE", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(SET_INTERVAL, "SET_INTERVAL", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(SET_TIMEZONE, "SET_TIMEZONE", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(SET_FORMAT, "SET_FORMAT", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(initialState, "initialState", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(setDate, "setDate", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(setHour, "setHour", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(setMinute, "setMinute", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(setInterval, "setInterval", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(setTimezone, "setTimezone", "src/components/DateComponent/ducks.js");

  __REACT_HOT_LOADER__.register(setFormat, "setFormat", "src/components/DateComponent/ducks.js");
}();

;