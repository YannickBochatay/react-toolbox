"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "Synopsis",

  construct: _2.default,

  path: "",

  states: {

    default: function _default() {
      return _react2.default.createElement(_2.default, { src: "src/images/logo.png" });
    },

    error: function error() {
      return _react2.default.createElement(_2.default, { src: "src/images/logo_toto.png" });
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