"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDates = require("react-dates");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePickerWrapper = function (_Component) {
  _inherits(DatePickerWrapper, _Component);

  function DatePickerWrapper(props) {
    _classCallCheck(this, DatePickerWrapper);

    var _this = _possibleConstructorReturn(this, (DatePickerWrapper.__proto__ || Object.getPrototypeOf(DatePickerWrapper)).call(this, props));

    _this.state = {
      focused: null,
      date: null
    };

    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.handleFocusChange = _this.handleFocusChange.bind(_this);

    return _this;
  }

  _createClass(DatePickerWrapper, [{
    key: "handleDateChange",
    value: function handleDateChange(date) {

      this.setState({ date: date });
    }
  }, {
    key: "handleFocusChange",
    value: function handleFocusChange(_ref) {
      var focused = _ref.focused;


      this.setState({ focused: focused });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          focused = _state.focused,
          date = _state.date;


      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_reactDates.SingleDatePicker, _extends({}, this.props, {
          onDateChange: this.handleDateChange,
          onFocusChange: this.handleFocusChange,
          focused: focused,
          date: date,
          placeholder: "Choix date"
        }))
      );
    }
  }]);

  return DatePickerWrapper;
}(_react.Component);

module.exports = {

  categ: "Form fields",

  construct: _reactDates.SingleDatePicker,

  path: "react-dates",

  link: "https://github.com/airbnb/react-dates",

  states: { default: function _default() {
      return _react2.default.createElement(DatePickerWrapper, null);
    } }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DatePickerWrapper, "DatePickerWrapper", "src/components/SingleDatePicker/descript.js");
}();

;