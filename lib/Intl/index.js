"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logMissingMessages = exports.getLocaleFromForage = exports.setLocale = exports.reducer = exports.STATE_PROPERTY = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ducks = require("./ducks");

Object.defineProperty(exports, "STATE_PROPERTY", {
  enumerable: true,
  get: function get() {
    return _ducks.STATE_PROPERTY;
  }
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _ducks.reducer;
  }
});
Object.defineProperty(exports, "setLocale", {
  enumerable: true,
  get: function get() {
    return _ducks.setLocale;
  }
});
Object.defineProperty(exports, "getLocaleFromForage", {
  enumerable: true,
  get: function get() {
    return _ducks.getLocaleFromForage;
  }
});
Object.defineProperty(exports, "logMissingMessages", {
  enumerable: true,
  get: function get() {
    return _ducks.logMissingMessages;
  }
});
exports.Intl = Intl;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _jsygStrutils = require("jsyg-strutils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Intl(_ref) {
  var tag = _ref.tag,
      message = _ref.message,
      rest = _objectWithoutProperties(_ref, ["tag", "message"]);

  for (var n in Intl.propTypes) {
    delete rest[n];
  }delete rest.dispatch;

  return _react2.default.createElement(tag, rest, message);
}

Intl.propTypes = {
  text: _react.PropTypes.string,
  ucfirst: _react.PropTypes.bool,
  lcfirst: _react.PropTypes.bool,
  ucwords: _react.PropTypes.bool,
  tag: _react.PropTypes.string.isRequired,
  message: _react.PropTypes.string
};

Intl.defaultProps = { tag: "span" };

function mapStateToProps(state, props) {

  var text = props.children || props.text;

  if (typeof text !== "string") throw new Error("string is required (" + (typeof text === "undefined" ? "undefined" : _typeof(text)) + " found)");

  text = text.toLowerCase();

  var intl = state[_ducks.STATE_PROPERTY];

  var message = intl && intl.messages[text];

  if (!message) {

    if (intl && intl.log) console.warn("\"" + text + "\" not found for locale " + intl.locale);
    message = text;
  }

  if (props.ucfirst) message = (0, _jsygStrutils.ucfirst)(message);
  if (props.lcfirst) message = (0, _jsygStrutils.lcfirst)(message);
  if (props.ucwords) message = (0, _jsygStrutils.ucwords)(message);

  return { message: message };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(Intl);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Intl, "Intl", "src/components/Intl/index.js");

  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "src/components/Intl/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Intl/index.js");
}();

;