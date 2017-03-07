"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = [{ value: "one", label: "One" }, { value: "two", label: "Two" }, { value: "three", label: "Three" }];

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.state = { value: null };

    _this.handleChange = _this.handleChange.bind(_this);

    return _this;
  }

  _createClass(Select, [{
    key: "handleChange",
    value: function handleChange(value) {

      this.setState({ value: value });
    }
  }, {
    key: "render",
    value: function render() {

      return _react2.default.createElement(_reactSelect2.default, _extends({
        name: "form-field-name",
        value: this.state.value,
        onChange: this.handleChange
      }, this.props));
    }
  }]);

  return Select;
}(_react2.default.Component);

module.exports = {

  categ: "Form fields",

  construct: _reactSelect2.default,

  path: "react-select",

  link: "http://jedwatson.github.io/react-select/",

  states: {

    default: function _default() {
      return _react2.default.createElement(Select, { options: options });
    },

    multi: function multi() {
      return _react2.default.createElement(Select, { options: options, multi: true });
    }

  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(options, "options", "src/components/Select/descript.js");

  __REACT_HOT_LOADER__.register(Select, "Select", "src/components/Select/descript.js");
}();

;