"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagIcons;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlagIcons(_ref) {
  var children = _ref.children;


  return _react2.default.createElement(
    "div",
    null,
    children
  );
}

FlagIcons.propTypes = { children: _react.PropTypes.node };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FlagIcons, "FlagIcons", "src/components/FlagIcons/index.js");
}();

;