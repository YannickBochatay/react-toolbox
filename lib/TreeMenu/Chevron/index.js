"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Chevron;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  chevron: {
    width: 15,
    textAlign: "center",
    fontSize: 8
  },
  open: {
    transition: "transform 0.3s",
    transform: "rotate(90deg)"
  },
  closed: {
    transition: "transform 0.3s",
    transform: "rotate(0deg)"
  }
};

function Chevron(_ref) {
  var collapsed = _ref.collapsed;


  return _react2.default.createElement(
    "span",
    { style: _extends({}, styles.chevron, collapsed ? styles.closed : styles.open) },
    "\u25B6"
  );
}

Chevron.propTypes = { collapsed: _react.PropTypes.bool };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, "styles", "src/components/TreeMenu/Chevron/index.js");

  __REACT_HOT_LOADER__.register(Chevron, "Chevron", "src/components/TreeMenu/Chevron/index.js");
}();

;