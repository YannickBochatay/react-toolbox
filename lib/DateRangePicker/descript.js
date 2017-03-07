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

var DateRangePickerWrapper = function (_Component) {
  _inherits(DateRangePickerWrapper, _Component);

  function DateRangePickerWrapper(props) {
    _classCallCheck(this, DateRangePickerWrapper);

    var _this = _possibleConstructorReturn(this, (DateRangePickerWrapper.__proto__ || Object.getPrototypeOf(DateRangePickerWrapper)).call(this, props));

    _this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null
    };

    _this.handleDatesChange = _this.handleDatesChange.bind(_this);
    _this.handleFocusChange = _this.handleFocusChange.bind(_this);

    return _this;
  }

  _createClass(DateRangePickerWrapper, [{
    key: "handleDatesChange",
    value: function handleDatesChange(_ref) {
      var startDate = _ref.startDate,
          endDate = _ref.endDate;


      this.setState({ startDate: startDate, endDate: endDate });
    }
  }, {
    key: "handleFocusChange",
    value: function handleFocusChange(focusedInput) {

      this.setState({ focusedInput: focusedInput });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          focusedInput = _state.focusedInput,
          startDate = _state.startDate,
          endDate = _state.endDate;


      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_reactDates.DateRangePicker, _extends({}, this.props, {
          onDatesChange: this.handleDatesChange,
          onFocusChange: this.handleFocusChange,
          focusedInput: focusedInput,
          startDate: startDate,
          endDate: endDate,
          startDatePlaceholderText: "D\xE9but",
          endDatePlaceholderText: "Fin"
        }))
      );
    }
  }]);

  return DateRangePickerWrapper;
}(_react.Component);

module.exports = {

  categ: "Form fields",

  construct: _reactDates.DateRangePicker,

  path: "components/DateRangePicker",

  link: "https://github.com/airbnb/react-dates",

  states: { default: function _default() {
      return _react2.default.createElement(DateRangePickerWrapper, null);
    } }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DateRangePickerWrapper, "DateRangePickerWrapper", "src/components/DateRangePicker/descript.js");
}();

;