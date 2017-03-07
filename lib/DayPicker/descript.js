"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDates = require("react-dates");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "Form fields",

  construct: _reactDates.DayPicker,

  path: "react-dates",

  link: "https://github.com/airbnb/react-dates",

  states: { default: function _default() {
      return _react2.default.createElement(_reactDates.DayPicker, null);
    } }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;