"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Chevron;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _style = require("./style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Chevron(_ref) {
  var collapsed = _ref.collapsed;


  return _react2.default.createElement(
    "span",
    { className: collapsed ? _style2.default.closed : _style2.default.open },
    "\u25B6"
  );
}

Chevron.propTypes = { collapsed: _react.PropTypes.bool };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Chevron, "Chevron", "src/components/TreeMenu/Chevron/index.js");
}();

;