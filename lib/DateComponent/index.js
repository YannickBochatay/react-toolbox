"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateComponent = exports.setFormat = exports.setTimezone = exports.setInterval = exports.setDate = exports.setMinute = exports.setHour = exports.reducer = exports.STATE_PROPERTY = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

require("moment-timezone");

var _Row = require("react-bootstrap/lib/Row");

var _Row2 = _interopRequireDefault(_Row);

var _Col = require("react-bootstrap/lib/Col");

var _Col2 = _interopRequireDefault(_Col);

var _ducks = require("./ducks");

var _formfields = require("./formfields");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.STATE_PROPERTY = _ducks.STATE_PROPERTY;
exports.reducer = _ducks.reducer;
exports.setHour = _ducks.setHour;
exports.setMinute = _ducks.setMinute;
exports.setDate = _ducks.setDate;
exports.setInterval = _ducks.setInterval;
exports.setTimezone = _ducks.setTimezone;
exports.setFormat = _ducks.setFormat;

var DateComponent = exports.DateComponent = function (_Component) {
  _inherits(DateComponent, _Component);

  function DateComponent() {
    _classCallCheck(this, DateComponent);

    return _possibleConstructorReturn(this, (DateComponent.__proto__ || Object.getPrototypeOf(DateComponent)).apply(this, arguments));
  }

  _createClass(DateComponent, [{
    key: "formatDate",
    value: function formatDate() {
      var _props = this.props,
          timezone = _props.timezone,
          format = _props.format,
          set = _props.set,
          interval = _props.interval;


      return (0, _moment2.default)().utcOffset(0).set(set).add(interval).tz(timezone).format(format);
    }
  }, {
    key: "editionMode",
    value: function editionMode() {
      var _props2 = this.props,
          set = _props2.set,
          interval = _props2.interval,
          timezone = _props2.timezone,
          format = _props2.format,
          onChangeHour = _props2.onChangeHour,
          onChangeMinute = _props2.onChangeMinute,
          onChangeInterval = _props2.onChangeInterval,
          onChangeTimezone = _props2.onChangeTimezone,
          onChangeFormat = _props2.onChangeFormat;


      return _react2.default.createElement(
        "form",
        { className: "form" },
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { xs: true },
            _react2.default.createElement(_formfields.HourSelect, { value: String(set.hour), onChange: onChangeHour })
          ),
          _react2.default.createElement(
            _Col2.default,
            { xs: true },
            _react2.default.createElement(_formfields.MinuteSelect, { value: String(set.minute), onChange: onChangeMinute })
          ),
          _react2.default.createElement(
            _Col2.default,
            { xs: true },
            _react2.default.createElement(_formfields.IntervalSelect, { value: String(interval.days), onChange: onChangeInterval })
          )
        ),
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { xs: true },
            _react2.default.createElement(_formfields.TimezoneSelect, { value: timezone, onChange: onChangeTimezone })
          )
        ),
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { xs: true },
            _react2.default.createElement(_formfields.FormatSelect, { value: format, onChange: onChangeFormat })
          )
        )
      );
    }
  }, {
    key: "viewMode",
    value: function viewMode() {

      return _react2.default.createElement(
        "div",
        null,
        this.formatDate()
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var onMount = this.props.onMount;


      if (onMount) onMount();
    }
  }, {
    key: "render",
    value: function render() {

      return this.props.editionMode ? this.editionMode() : this.viewMode();
    }
  }]);

  return DateComponent;
}(_react.Component);

DateComponent.propTypes = {
  set: _react.PropTypes.object.isRequired,
  interval: _react.PropTypes.object,
  timezone: _react.PropTypes.string,
  format: _react.PropTypes.string,
  editionMode: _react.PropTypes.bool,
  onChangeHour: _react.PropTypes.func,
  onChangeMinute: _react.PropTypes.func,
  onChangeInterval: _react.PropTypes.func,
  onChangeTimezone: _react.PropTypes.func,
  onChangeFormat: _react.PropTypes.func,
  onMount: _react.PropTypes.func
};

DateComponent.defaultProps = {
  set: {
    hour: null,
    minute: null
  },
  interval: { days: null },
  timezone: "GMT",
  format: "DD/MM/YYYY HH:mm:ss"
};

function mapStateToProps(state) {
  var _state$STATE_PROPERTY = state[_ducks.STATE_PROPERTY],
      set = _state$STATE_PROPERTY.set,
      interval = _state$STATE_PROPERTY.interval,
      timezone = _state$STATE_PROPERTY.timezone,
      format = _state$STATE_PROPERTY.format;


  return { set: set, interval: interval, timezone: timezone, format: format };
}

function mapDispatchToProps(dispatch, ownProps) {

  return {
    onChangeHour: function onChangeHour(e) {

      dispatch((0, _ducks.setHour)(e.target.value));
    },
    onChangeMinute: function onChangeMinute(e) {

      dispatch((0, _ducks.setMinute)(e.target.value));
    },
    onChangeInterval: function onChangeInterval(e) {

      dispatch((0, _ducks.setInterval)(e.target.value));
    },
    onChangeTimezone: function onChangeTimezone(e) {

      dispatch((0, _ducks.setTimezone)(e.target.value));
    },
    onChangeFormat: function onChangeFormat(e) {

      dispatch((0, _ducks.setFormat)(e.target.value));
    },
    onMount: function onMount() {
      var set = ownProps.set,
          interval = ownProps.interval,
          timezone = ownProps.timezone,
          format = ownProps.format;

      var date = {};

      if (set !== undefined) date.set = set;
      if (interval !== undefined) date.interval = interval;
      if (timezone !== undefined) date.timezone = timezone;
      if (format !== undefined) date.format = format;

      dispatch((0, _ducks.setDate)(date));
    }
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DateComponent);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DateComponent, "DateComponent", "src/components/DateComponent/index.js");

  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "src/components/DateComponent/index.js");

  __REACT_HOT_LOADER__.register(mapDispatchToProps, "mapDispatchToProps", "src/components/DateComponent/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/DateComponent/index.js");
}();

;