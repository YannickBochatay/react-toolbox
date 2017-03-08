"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _customStyle = { fill: "orange", strokeWidth: 4, stroke: "blue" };

module.exports = {

    categ: "SVG",

    construct: _2.default,

    states: {

        rectangle: function rectangle() {
            return _react2.default.createElement(_2.default, { shape: "rect" });
        },

        circle: function circle() {
            return _react2.default.createElement(_2.default, { shape: "circle" });
        },

        line: function line() {
            return _react2.default.createElement(_2.default, { shape: "line" });
        },

        ellipse: function ellipse() {
            return _react2.default.createElement(_2.default, { shape: "ellipse" });
        },

        customStyle: function customStyle() {
            return _react2.default.createElement(_2.default, { shape: "rect", shapeStyle: _customStyle });
        }

    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_customStyle, "customStyle", "src/components/ShapeDrawer/descript.js");
}();

;