"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  construct: _.DocumentTitle,

  path: "react-toolbox/lib/DocumentTitle",

  states: { default: function _default() {
      return _react2.default.createElement(_.DocumentTitle, { title: "Hello" });
    } }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;