"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Intl = require("components/Intl/");

var _Intl2 = _interopRequireDefault(_Intl);

var _Button = require("react-bootstrap/lib/Button");

var _Button2 = _interopRequireDefault(_Button);

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Intl2.default, { tag: "h1", text: "Welcome to react-toolbox", ucfirst: true }),
    _react2.default.createElement(
      _reactRouter.Link,
      { to: "catalog" },
      _react2.default.createElement(
        _Button2.default,
        { bsStyle: "primary" },
        "\xBB ",
        _react2.default.createElement(_Intl2.default, { text: "go to catalog", ucfirst: true })
      )
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Main.js");
}();

;