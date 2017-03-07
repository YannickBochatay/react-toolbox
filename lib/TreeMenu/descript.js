"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{ label: "Home", link: "/" }, {

  label: "Get started",
  collapsed: true,
  items: [{ label: "Installation" }, { label: "Code" }, {
    label: "Examples",
    collapsed: true,
    items: [{ label: "Basic" }, { label: "Persons" }, { label: "DataConfig" }]
  }, { label: "Tips" }]

}];

module.exports = {

  categ: "Presentation",

  construct: _2.default,

  states: {

    default: function _default() {
      return _react2.default.createElement(_2.default, { items: items });
    },

    dark: function dark() {
      return _react2.default.createElement(_2.default, { items: items, dark: true });
    }

  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(items, "items", "src/components/TreeMenu/descript.js");
}();

;