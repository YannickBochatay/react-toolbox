"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "UI components",

  construct: _.BreadCrumb,

  path: "components/BreadCrumb",

  description: "Fil d'ariane (aide à la navigation)",

  states: { default: function _default() {
      return _react2.default.createElement(_.BreadCrumb, { path: "path/to/the/current/page" });
    } }

};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;