"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "Presentation",

  construct: _.Clouds,

  description: "Animation de nuages avec WebGL (ThreeJS)",

  path: "components/Clouds",

  states: {

    animated: function animated() {
      return _react2.default.createElement(_.Clouds, { animate: true, style: { width: 500, height: 500 } });
    },

    freezed: function freezed() {
      return _react2.default.createElement(_.Clouds, { animate: false, style: { width: 500, height: 500 } });
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