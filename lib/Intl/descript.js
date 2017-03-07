"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  construct: _2.default,

  path: "components/Intl",

  states: {

    default: function _default() {
      return _react2.default.createElement(_2.default, { text: "Hello world" });
    },

    ucfirst: function ucfirst() {
      return _react2.default.createElement(_2.default, { text: "Hello world", ucfirst: true });
    },

    ucwords: function ucwords() {
      return _react2.default.createElement(_2.default, { text: "Hello world", ucwords: true });
    },

    customTag: function customTag() {
      return _react2.default.createElement(_2.default, { text: "Hello world", tag: "pre" });
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