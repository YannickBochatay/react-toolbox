"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  construct: _.FullScreenIcon,

  states: {

    default: function _default() {
      return _react2.default.createElement(_.FullScreenIcon, null);
    },

    customStyle: function customStyle() {
      return _react2.default.createElement(_.FullScreenIcon, { style: { color: "violet", fontSize: 50 } });
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