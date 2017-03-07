"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _rcCascader = require("rc-cascader");

var _rcCascader2 = _interopRequireDefault(_rcCascader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var echsCE = [{
  label: "J+1",
  value: "J+1"
}, {
  label: "J+2",
  value: "J+2"
}, {
  label: "J+3",
  value: "J+3"
}];

var options = [{
  label: "CDP",
  value: "CDP",
  children: [{
    label: "horaire",
    value: "CDPH",
    children: echsCE
  }, {
    label: "quotidien",
    value: "CDPQ",
    children: echsCE
  }]
}, {
  label: "Modèle",
  value: "modele",
  children: [{
    label: "Arpège",
    value: "arpege",
    children: echsCE
  }, {
    label: "CEP",
    value: "cep",
    children: echsCE
  }]
}];

var Cascader = function (_React$Component) {
  _inherits(Cascader, _React$Component);

  function Cascader(props) {
    _classCallCheck(this, Cascader);

    var _this = _possibleConstructorReturn(this, (Cascader.__proto__ || Object.getPrototypeOf(Cascader)).call(this, props));

    _this.state = { inputValue: "" };

    _this.handleChange = _this.handleChange.bind(_this);

    return _this;
  }

  _createClass(Cascader, [{
    key: "handleChange",
    value: function handleChange(value, selectedOptions) {

      this.setState({ inputValue: selectedOptions.map(function (o) {
          return o.label;
        }).join(", ") });
    }
  }, {
    key: "render",
    value: function render() {

      return _react2.default.createElement(
        _rcCascader2.default,
        _extends({ onChange: this.handleChange }, this.props),
        _react2.default.createElement("input", { className: "form-control", placeholder: "choose data", value: this.state.inputValue })
      );
    }
  }]);

  return Cascader;
}(_react2.default.Component);

module.exports = {

  categ: "Form fields",

  construct: _rcCascader2.default,

  path: "rc-cascader",

  link: "http://react-component.github.io/cascader/",

  states: {

    default: function _default() {
      return _react2.default.createElement(Cascader, { options: options, changeOnSelect: true });
    },

    animation: function animation() {
      return _react2.default.createElement(Cascader, { options: options, changeOnSelect: true, transitionName: "slide-up" });
    }

  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(echsCE, "echsCE", "src/components/Cascader/descript.js");

  __REACT_HOT_LOADER__.register(options, "options", "src/components/Cascader/descript.js");

  __REACT_HOT_LOADER__.register(Cascader, "Cascader", "src/components/Cascader/descript.js");
}();

;