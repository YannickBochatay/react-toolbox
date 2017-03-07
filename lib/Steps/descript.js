"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _rcSteps = require("rc-steps");

var _rcSteps2 = _interopRequireDefault(_rcSteps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "UI Components",

  construct: _rcSteps2.default,

  path: "rc-steps",

  states: {

    default: function _default() {
      return _react2.default.createElement(
        _rcSteps2.default,
        { current: 1 },
        _react2.default.createElement(_rcSteps2.default.Step, { title: "first" }),
        _react2.default.createElement(_rcSteps2.default.Step, { title: "second" }),
        _react2.default.createElement(_rcSteps2.default.Step, { title: "third" })
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