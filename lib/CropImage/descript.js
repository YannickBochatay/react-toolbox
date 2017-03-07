"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _monkeybird = require("images/monkeybird.jpg");

var _monkeybird2 = _interopRequireDefault(_monkeybird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "SVG",

  construct: _2.default,

  states: {

    default: function _default() {
      return _react2.default.createElement(_2.default, { width: 600, height: 379, src: _monkeybird2.default });
    },

    onChange: function onChange() {
      return _react2.default.createElement(_2.default, {
        width: 600,
        height: 379,
        src: _monkeybird2.default,
        onChange: function onChange(bbox) {
          return console.log(bbox);
        }
      });
    },

    onDrag: function onDrag() {
      return _react2.default.createElement(_2.default, {
        width: 600,
        height: 379,
        src: _monkeybird2.default,
        onDrag: function onDrag(bbox) {
          return console.log(bbox);
        }
      });
    }

  }
}; /* eslint react/jsx-no-bind:0 */
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;