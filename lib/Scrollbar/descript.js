"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _satellite = require("images/satellite.jpg");

var _satellite2 = _interopRequireDefault(_satellite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "Presentation",

  construct: _2.default,

  externalLink: "https://noraesae.github.io/perfect-scrollbar/",

  states: {

    default: function _default() {
      return _react2.default.createElement(
        _2.default,
        { style: { width: 400, height: 400 } },
        _react2.default.createElement("img", { src: _satellite2.default, alt: "satellite" })
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