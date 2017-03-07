"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSparklines = require("react-sparklines");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sampleData = [5, 10, 5, 20, 12, 2, 4, 6, 8, 15, 0, 14, 13];

module.exports = {

  categ: "UI Components",

  construct: _reactSparklines.Sparklines,

  link: "https://github.com/borisyankov/react-sparklines",

  path: "react-sparklines",

  namedImport: true,

  states: {

    line: function line() {
      return _react2.default.createElement(
        _reactSparklines.Sparklines,
        { data: sampleData },
        _react2.default.createElement(_reactSparklines.SparklinesLine, { color: "blue" })
      );
    },

    bars: function bars() {
      return _react2.default.createElement(
        _reactSparklines.Sparklines,
        { data: sampleData },
        _react2.default.createElement(_reactSparklines.SparklinesBars, null)
      );
    },

    spots: function spots() {
      return _react2.default.createElement(
        _reactSparklines.Sparklines,
        { data: sampleData },
        _react2.default.createElement(_reactSparklines.SparklinesLine, { style: { fill: "none" } }),
        _react2.default.createElement(_reactSparklines.SparklinesSpots, null)
      );
    },

    referenceLine: function referenceLine() {
      return _react2.default.createElement(
        _reactSparklines.Sparklines,
        { data: sampleData },
        _react2.default.createElement(_reactSparklines.SparklinesLine, null),
        _react2.default.createElement(_reactSparklines.SparklinesReferenceLine, { type: "mean" })
      );
    },

    normalBand: function normalBand() {
      return _react2.default.createElement(
        _reactSparklines.Sparklines,
        { data: sampleData },
        _react2.default.createElement(_reactSparklines.SparklinesLine, { style: { fill: "none" } }),
        _react2.default.createElement(_reactSparklines.SparklinesNormalBand, null)
      );
    }
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(sampleData, "sampleData", "src/components/Sparklines/descript.js");
}();

;