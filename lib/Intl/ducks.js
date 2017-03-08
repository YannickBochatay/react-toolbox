"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocaleFromForage = exports.setLocale = exports.STATE_PROPERTY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.reducer = reducer;
exports.logMissingMessages = logMissingMessages;

var _localforage = require("localforage");

var _localforage2 = _interopRequireDefault(_localforage);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATE_PROPERTY = exports.STATE_PROPERTY = "intl";

var SET_LOCALE = STATE_PROPERTY + "/SET_LOCALE";
var LOG_MISSING_MESSAGES = STATE_PROPERTY + "/LOG_MISSING_MESSAGES";

var FORAGE_NAME = STATE_PROPERTY + "/locale";

var initialState = {
  lang: null,
  locale: null,
  log: false,
  messages: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case SET_LOCALE:

      return _extends({}, action.data, { log: state.log });

    case LOG_MISSING_MESSAGES:

      return _extends({}, state, { log: action.value });

    default:

      return state;

  }
}

var setLocale = exports.setLocale = function setLocale(locale) {
  return function (dispatch) {

    require.ensure([], function (require) {

      var messages = require("locale/" + locale);

      _localforage2.default.setItem(FORAGE_NAME, locale);

      _moment2.default.locale(locale);

      return dispatch({
        type: SET_LOCALE,
        data: {
          locale: locale,
          messages: messages
        }
      });
    });
  };
};

var getLocaleFromForage = exports.getLocaleFromForage = function getLocaleFromForage() {
  return function (dispatch) {

    _localforage2.default.getItem(FORAGE_NAME).then(function (locale) {

      if (locale) dispatch(setLocale(locale));else throw new Error(locale + " : unknown locale");
    }).catch(function () {

      dispatch(setLocale("fr"));
    });
  };
};

function logMissingMessages(value) {

  return {
    type: LOG_MISSING_MESSAGES,
    value: Boolean(value)
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(STATE_PROPERTY, "STATE_PROPERTY", "src/components/Intl/ducks.js");

  __REACT_HOT_LOADER__.register(SET_LOCALE, "SET_LOCALE", "src/components/Intl/ducks.js");

  __REACT_HOT_LOADER__.register(LOG_MISSING_MESSAGES, "LOG_MISSING_MESSAGES", "src/components/Intl/ducks.js");

  __REACT_HOT_LOADER__.register(FORAGE_NAME, "FORAGE_NAME", "src/components/Intl/ducks.js");

  __REACT_HOT_LOADER__.register(initialState, "initialState", "src/components/Intl/ducks.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "src/components/Intl/ducks.js");

  __REACT_HOT_LOADER__.register(setLocale, "setLocale", "src/components/Intl/ducks.js");

  __REACT_HOT_LOADER__.register(getLocaleFromForage, "getLocaleFromForage", "src/components/Intl/ducks.js");

  __REACT_HOT_LOADER__.register(logMissingMessages, "logMissingMessages", "src/components/Intl/ducks.js");
}();

;