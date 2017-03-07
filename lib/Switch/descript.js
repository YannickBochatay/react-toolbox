"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _rcSwitch = require("rc-switch");

var _rcSwitch2 = _interopRequireDefault(_rcSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch(props) {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _this.state = { disabled: false };

    return _this;
  }

  _createClass(Switch, [{
    key: "toggle",
    value: function toggle() {

      this.setState({ disabled: !this.state.disabled });
    }
  }, {
    key: "render",
    value: function render() {

      return _react2.default.createElement(_rcSwitch2.default, _extends({ disabled: this.state.disabled }, this.props));
    }
  }]);

  return Switch;
}(_react2.default.Component);

module.exports = {

  categ: "Form fields",

  construct: _rcSwitch2.default,

  link: "http://react-component.github.io/switch/",

  path: "rc-switch",

  states: {

    default: function _default() {
      return _react2.default.createElement(Switch, null);
    },

    onChange: function onChange() {
      return _react2.default.createElement(Switch, { onChange: function log(value) {

          console.log(value);
        } });
    },

    initialValue: function initialValue() {
      return _react2.default.createElement(Switch, { defaultChecked: true });
    },

    labels: function labels() {
      return _react2.default.createElement(Switch, { checkedChildren: "On", unCheckedChildren: "Off" });
    }

  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Switch, "Switch", "src/components/Switch/descript.js");
}();

;