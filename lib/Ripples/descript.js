"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "Presentation",

  construct: _2.default,

  states: {

    default: function _default() {
      return _react2.default.createElement(
        _2.default,
        null,
        _react2.default.createElement(
          "div",
          { style: {
              padding: 20,
              display: "inline-block",
              cursor: "pointer",
              border: "1px solid #ddd"
            } },
          "Cliquez sur moi"
        )
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