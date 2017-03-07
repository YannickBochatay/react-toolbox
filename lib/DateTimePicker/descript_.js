"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _DateTimePicker = require("components/DateTimePicker");

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "Form fields",

  construct: _DateTimePicker2.default,

  path: "components/DateTimePicker",

  description: "sélectionneur de dates",

  externalLink: "http://eonasdan.github.io/bootstrap-datetimepicker/",

  states: { default: function _default() {
      return _react2.default.createElement(
        "div",
        { style: { position: "relative" } },
        _react2.default.createElement(_DateTimePicker2.default, null)
      );
    } }

};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;