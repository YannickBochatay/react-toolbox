"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "Presentation",

  construct: _2.default,

  externalLink: "",

  states: {

    default: function _default() {
      return _react2.default.createElement(_2.default, { percent: 40 });
    },

    "extra-small": function extraSmall() {
      return _react2.default.createElement(_2.default, { percent: 60, size: "xs" });
    },

    small: function small() {
      return _react2.default.createElement(_2.default, { percent: 60, size: "sm" });
    },

    large: function large() {
      return _react2.default.createElement(_2.default, { percent: 60, size: "lg" });
    },

    custom: function custom() {
      return _react2.default.createElement(_2.default, { percent: 60, size: 150 });
    },

    animated: function animated() {
      return _react2.default.createElement(_2.default, { percent: 40, size: "lg", animate: true });
    },

    slowAnimation: function slowAnimation() {
      return _react2.default.createElement(_2.default, {
        percent: 60,
        size: "lg",
        animate: true,
        duration: 5000
      });
    }
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;