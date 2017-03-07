"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _rcSlider = require("rc-slider");

var _rcSlider2 = _interopRequireDefault(_rcSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "Form fields",

  construct: _rcSlider2.default,

  link: "https://github.com/react-component/slider",

  path: "rc-slider",

  states: {

    default: function _default() {
      return _react2.default.createElement(_rcSlider2.default, { min: 0, max: 20, defaultValue: 3 });
    },

    marks: function marks() {
      return _react2.default.createElement(_rcSlider2.default, { min: 0, max: 20, marks: { 5: "5°C", 7: "7°C", 9: "9°C" } });
    },

    range: function range() {
      return _react2.default.createElement(_rcSlider2.default, {
        min: 0,
        max: 20,
        range: true,
        defaultValue: [3, 12]
      });
    },

    pushable: function pushable() {
      return _react2.default.createElement(_rcSlider2.default, {
        min: 0,
        max: 20,
        range: 3,
        defaultValue: [3, 6, 12],
        pushable: true
      });
    },

    vertical: function vertical() {
      return _react2.default.createElement(
        "div",
        { style: { height: 100 } },
        _react2.default.createElement(_rcSlider2.default, { min: 0, max: 20, vertical: true })
      );
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