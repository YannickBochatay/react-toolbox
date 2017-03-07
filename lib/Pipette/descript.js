"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/jsx-no-bind:0 no-alert:0*/

var style = {
  width: 400,
  height: 400,
  backgroundColor: "pink"
};

var DynamicTooltip = function (_React$Component) {
  _inherits(DynamicTooltip, _React$Component);

  function DynamicTooltip(props) {
    _classCallCheck(this, DynamicTooltip);

    var _this = _possibleConstructorReturn(this, (DynamicTooltip.__proto__ || Object.getPrototypeOf(DynamicTooltip)).call(this, props));

    _this.state = {
      x: 0,
      y: 0
    };

    _this.handleMove = _this.handleMove.bind(_this);

    return _this;
  }

  _createClass(DynamicTooltip, [{
    key: "handleMove",
    value: function handleMove(pos) {

      this.setState(_extends({}, pos));
    }
  }, {
    key: "render",
    value: function render() {

      return _react2.default.createElement(_2.default, {
        onMove: this.handleMove,
        tooltip: this.state.x + " " + this.state.y,
        style: style
      });
    }
  }]);

  return DynamicTooltip;
}(_react2.default.Component);

module.exports = {

  categ: "UI Components",

  construct: _2.default,

  states: {

    default: function _default() {
      return _react2.default.createElement(_2.default, { onClick: function onClick(pos) {
          return window.alert(pos.x + "," + pos.y);
        }, style: style });
    },

    onMouseMove: function onMouseMove() {
      return _react2.default.createElement(_2.default, { onMouseMove: function onMouseMove(pos) {
          return console.log(pos.x + "," + pos.y);
        }, style: style });
    },

    tooltip: function tooltip() {
      return _react2.default.createElement(_2.default, { tooltip: "hello world", style: style });
    },

    dynamicTooltip: function dynamicTooltip() {
      return _react2.default.createElement(DynamicTooltip, null);
    }

  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(style, "style", "src/components/Pipette/descript.js");

  __REACT_HOT_LOADER__.register(DynamicTooltip, "DynamicTooltip", "src/components/Pipette/descript.js");
}();

;