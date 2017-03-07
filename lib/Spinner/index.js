"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _style = require("./style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // eslint-disable-line import/no-extraneous-dependencies


var Spinner = function Spinner(_ref) {
  var fadeIn = _ref.fadeIn,
      className = _ref.className,
      color = _ref.color,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["fadeIn", "className", "color", "size"]);

  var fullClassName = "";

  if (fadeIn) fullClassName += _style2.default.fadein;
  if (className) fullClassName += " " + className;

  var style = { backgroundColor: color, width: size, height: size };

  return _react2.default.createElement(
    "div",
    _extends({}, rest, { className: fullClassName }),
    _react2.default.createElement("div", { className: _style2.default.threebounce1, style: style }),
    _react2.default.createElement("div", { className: _style2.default.threebounce2, style: style }),
    _react2.default.createElement("div", { className: _style2.default.threebounce3, style: style })
  );
};

Spinner.propTypes = {
  fadeIn: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  color: _react.PropTypes.string,
  size: _react.PropTypes.number
};

Spinner.defaultProps = {
  color: "#333",
  size: 18
};

var _default = Spinner;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Spinner, "Spinner", "src/components/Spinner/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Spinner/index.js");
}();

;