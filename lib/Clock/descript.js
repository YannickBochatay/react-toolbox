"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "UI components",

  description: "Affichage de l'heure courante à différents fuseaux horaires",

  construct: _2.default,

  path: "react-toolbox/lib/Clock",

  states: {

    default: function _default() {
      return _react2.default.createElement(_2.default, null);
    },

    paris: function paris() {
      return _react2.default.createElement(_2.default, { timezone: "Europe/Paris", style: { color: "red" } });
    },

    tokyo: function tokyo() {
      return _react2.default.createElement(_2.default, { timezone: "Asia/Tokyo" });
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