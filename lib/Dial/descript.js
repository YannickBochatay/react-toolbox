"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

    categ: "UI components",

    construct: _2.default,

    descript: "Cadrans",

    path: "components/Dial",

    link: "http://anthonyterrien.com/knob/",

    states: {

        default: function _default() {
            return _react2.default.createElement(_2.default, null);
        },

        value: function value() {
            return _react2.default.createElement(_2.default, { value: 90 });
        },

        bounds: function bounds() {
            return _react2.default.createElement(_2.default, { min: 50, max: 180 });
        },

        steps: function steps() {
            return _react2.default.createElement(_2.default, { step: 5 });
        },

        angles: function angles() {
            return _react2.default.createElement(_2.default, { angleOffset: -90, angleArc: 180 });
        },

        readOnly: function readOnly() {
            return _react2.default.createElement(_2.default, { value: 59, readOnly: true });
        },

        rotation: function rotation() {
            return _react2.default.createElement(_2.default, { rotation: "anticlockwise" });
        },

        styles: function styles() {
            return _react2.default.createElement(_2.default, { thickness: 0.2, lineCap: "round", font: "console" });
        },

        colors: function colors() {
            return _react2.default.createElement(_2.default, { inputColor: "pink", bgColor: "#AFA", fgColor: "pink" });
        },

        displayPrevious: function displayPrevious() {
            return _react2.default.createElement(_2.default, { displayPrevious: true });
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