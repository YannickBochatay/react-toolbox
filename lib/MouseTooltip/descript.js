"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/jsx-no-bind:0 no-alert:0*/

var style = {
  width: 400,
  height: 400,
  backgroundColor: "pink"
};

module.exports = {

  categ: "UI Components",

  construct: _2.default,

  states: {

    default: function _default() {
      return _react2.default.createElement(_2.default, { content: "hello world", style: style });
    },

    onMouseMove: function onMouseMove() {
      return _react2.default.createElement(_2.default, {
        content: "hello world",
        onMove: function onMove(pos) {
          return console.log(pos.x + "," + pos.y);
        },
        style: style
      });
    }

  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(style, "style", "src/components/MouseTooltip/descript.js");
}();

;