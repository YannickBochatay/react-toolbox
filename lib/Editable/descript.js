"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "Form Fields",

  construct: _2.default,

  link: "http://vitalets.github.io/x-editable/docs.html",

  states: {

    text: function text() {
      return _react2.default.createElement(
        _2.default,
        { type: "text", pk: "1" },
        "Texte \xE9ditable"
      );
    },

    textArea: function textArea() {
      return _react2.default.createElement(
        _2.default,
        { type: "textarea", pk: "1" },
        "Bloc \xE9ditable"
      );
    },

    select: function select() {
      return _react2.default.createElement(
        _2.default,
        {
          type: "select",
          pk: "1",
          source: { 0: "Liste déroulante", 1: "Choix1", 2: "Choix2", 3: "Choix3" }
        },
        "Liste d\xE9roulante"
      );
    },

    date: function date() {
      return _react2.default.createElement(
        _2.default,
        { type: "date", pk: "1" },
        "2016-08-05"
      );
    },

    comboDate: function comboDate() {
      return _react2.default.createElement(
        _2.default,
        { type: "combodate", pk: "1" },
        "2016-08-05"
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