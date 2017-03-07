"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flagIcons = require.context("flag-icon-css/flags/4x3/", false, /.*.svg$/);

var keys = flagIcons.keys();

flagIcons = keys.map(flagIcons);

module.exports = {

  categ: "Icones",

  name: "FlagIcons",

  construct: _2.default,

  path: "http://flag-icon-css.lip.is/",

  states: {

    Flags: function Flags() {
      return _react2.default.createElement(
        "div",
        null,
        flagIcons.map(function (src, i) {
          return _react2.default.createElement("img", {
            src: src,
            style: { margin: 20, width: 80 },
            key: "flagIcon" + i,
            title: "flag-icon-css/flags/4x3/" + keys[i].replace(/\.\//, "")
          });
        })
      );
    }
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(flagIcons, "flagIcons", "src/components/FlagIcons/descript_.js");

  __REACT_HOT_LOADER__.register(keys, "keys", "src/components/FlagIcons/descript_.js");
}();

;