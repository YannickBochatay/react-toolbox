"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Clock = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

require("moment-timezone");

var _style = require("./style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = exports.Clock = function (_Component) {
  _inherits(Clock, _Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = {
      offset: 0,
      date: null,
      time: null
    };

    _this.updateDateTime = _this.updateDateTime.bind(_this);

    return _this;
  }

  _createClass(Clock, [{
    key: "updateDateTime",
    value: function updateDateTime() {

      var time = (0, _moment2.default)().tz(this.props.timezone);

      this.setState({
        offset: time.format("Z"),
        date: time.format("DD/MM/YYYY"),
        time: time.format("HH:mm:ss")
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      this.intervalID = window.setInterval(this.updateDateTime, 1000);

      this.updateDateTime();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      window.clearInterval(this.intervalID);
    }
  }, {
    key: "render",
    value: function render() {

      var className = _style2.default.div;

      if (this.props.className) className += " " + this.props.className;

      var props = _extends({}, this.props);

      delete props.timezone;

      return _react2.default.createElement(
        "div",
        _extends({}, props, { className: className }),
        _react2.default.createElement(
          "strong",
          null,
          this.props.timezone
        ),
        _react2.default.createElement(
          "span",
          { className: "badge pull-right" },
          this.state.offset
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "span",
            { className: "pull-left" },
            this.state.date
          ),
          _react2.default.createElement(
            "span",
            { className: "pull-right" },
            this.state.time
          )
        )
      );
    }
  }]);

  return Clock;
}(_react.Component);

Clock.propTypes = {
  timezone: _react.PropTypes.string.isRequired,
  className: _react.PropTypes.string
};

Clock.defaultProps = { timezone: "GMT" };

var _default = Clock;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Clock, "Clock", "src/components/Clock/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Clock/index.js");
}();

;