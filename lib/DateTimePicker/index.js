"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

require("bootstrap/js/transition");

require("bootstrap/js/collapse");

var _bootstrapDatetimepicker = require("./bootstrap-datetimepicker.js");

var _bootstrapDatetimepicker2 = _interopRequireDefault(_bootstrapDatetimepicker);

require("./styles.less");

var _jsyg = require("jsyg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = {

  format: false,
  dayViewHeaderFormat: "MMMM YYYY",
  extraFormats: false,
  stepping: 1,
  minDate: false,
  maxDate: false,
  useCurrent: true,
  collapse: true,
  locale: _moment2.default.locale(),
  defaultDate: false,
  disabledDates: false,
  enabledDates: false,
  icons: {
    time: "glyphicon glyphicon-time",
    date: "glyphicon glyphicon-calendar",
    up: "glyphicon glyphicon-chevron-up",
    down: "glyphicon glyphicon-chevron-down",
    previous: "glyphicon glyphicon-chevron-left",
    next: "glyphicon glyphicon-chevron-right",
    today: "glyphicon glyphicon-screenshot",
    clear: "glyphicon glyphicon-trash",
    close: "glyphicon glyphicon-remove"
  },
  tooltips: {
    today: "Go to today",
    clear: "Clear selection",
    close: "Close the picker",
    selectMonth: "Select Month",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    selectYear: "Select Year",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    selectDecade: "Select Decade",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevCentury: "Previous Century",
    nextCentury: "Next Century"
  },
  useStrict: false,
  sideBySide: false,
  daysOfWeekDisabled: false,
  calendarWeeks: false,
  viewMode: "days",
  toolbarPlacement: "default",
  showTodayButton: false,
  showClear: false,
  showClose: false,
  widgetPositioning: {
    horizontal: "auto",
    vertical: "auto"
  },
  widgetParent: null,
  ignoreReadonly: false,
  keepOpen: false,
  focusOnShow: true,
  inline: false,
  keepInvalid: false,
  datepickerInput: ".datepickerinput",
  keyBinds: {
    up: function up(widget) {

      if (!widget) return;

      var d = this.date() || (0, _moment2.default)();

      if (widget.find(".datepicker").is(":visible")) {

        this.date(d.clone().subtract(7, "d"));
      } else {

        this.date(d.clone().add(this.stepping(), "m"));
      }
    },
    down: function down(widget) {

      if (!widget) {

        this.show();

        return;
      }

      var d = this.date() || (0, _moment2.default)();

      if (widget.find(".datepicker").is(":visible")) {

        this.date(d.clone().add(7, "d"));
      } else {

        this.date(d.clone().subtract(this.stepping(), "m"));
      }
    },
    "control up": function controlUp(widget) {

      if (!widget) return;

      var d = this.date() || (0, _moment2.default)();

      if (widget.find(".datepicker").is(":visible")) {

        this.date(d.clone().subtract(1, "y"));
      } else {

        this.date(d.clone().add(1, "h"));
      }
    },
    "control down": function controlDown(widget) {

      if (!widget) return;

      var d = this.date() || (0, _moment2.default)();

      if (widget.find(".datepicker").is(":visible")) {

        this.date(d.clone().add(1, "y"));
      } else {

        this.date(d.clone().subtract(1, "h"));
      }
    },
    left: function left(widget) {

      if (!widget) return;

      var d = this.date() || (0, _moment2.default)();

      if (widget.find(".datepicker").is(":visible")) {

        this.date(d.clone().subtract(1, "d"));
      }
    },
    right: function right(widget) {

      if (!widget) return;

      var d = this.date() || (0, _moment2.default)();

      if (widget.find(".datepicker").is(":visible")) {

        this.date(d.clone().add(1, "d"));
      }
    },
    pageUp: function pageUp(widget) {

      if (!widget) return;

      var d = this.date() || (0, _moment2.default)();

      if (widget.find(".datepicker").is(":visible")) {

        this.date(d.clone().subtract(1, "M"));
      }
    },
    pageDown: function pageDown(widget) {

      if (!widget) return;

      var d = this.date() || (0, _moment2.default)();

      if (widget.find(".datepicker").is(":visible")) {

        this.date(d.clone().add(1, "M"));
      }
    },
    enter: function enter() {

      this.hide();
    },
    escape: function escape() {

      this.hide();
    },
    "control space": function controlSpace(widget) {

      if (widget.find(".timepicker").is(":visible")) {

        widget.find(".btn[data-action=\"togglePeriod\"]").click();
      }
    },
    t: function t() {

      this.date((0, _moment2.default)());
    },
    "delete": function _delete() {

      this.clear();
    }
  },
  debug: false,
  allowInputToggle: false,
  disabledTimeIntervals: false,
  disabledHours: false,
  enabledHours: false,
  viewDate: false
};

var events = ["change", "hide", "show", "error", "update"];

function setOptions(options) {

  var settings = _extends({}, defaults);

  for (var n in options) {

    if (typeof settings[n] != "undefined") settings[n] = options[n];
  }

  return settings;
}

var DateTimePicker = function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    _classCallCheck(this, DateTimePicker);

    return _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).apply(this, arguments));
  }

  _createClass(DateTimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;

      var options = setOptions(props);

      var $root = (0, _jquery2.default)(this.root);

      events.forEach(function (eventName) {

        var prop = "on" + (0, _jsyg.ucfirst)(eventName);
        var eventListener = props[prop];

        if (eventListener) $root.on("dp." + eventName, eventListener);
      });

      if (options.icon) delete options.icon;

      this.dateTimePicker = (0, _bootstrapDatetimepicker2.default)($root, options);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {

      for (var n in prevProps) {

        if (this.props[n] !== prevProps[n] && typeof this.dateTimePicker[n] !== "undefined") {

          this.dateTimePicker[n] = this.props[n];
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      var $root = (0, _jquery2.default)(this.root);

      $root.off(events.map(function (event) {
        return "dp." + event + " ";
      }));

      this.dateTimePicker.destroy();

      this.dateTimePicker = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          icon = _props.icon,
          inline = _props.inline;


      var getRef = function getRef(node) {
        return _this2.root = node;
      };

      if (inline) {

        return _react2.default.createElement("div", { ref: getRef });
      } else if (icon) {

        return _react2.default.createElement(
          "div",
          { className: "input-group date", ref: getRef, style: { position: "relative" } },
          _react2.default.createElement("input", { type: "text", className: "form-control" }),
          _react2.default.createElement(
            "span",
            { className: "input-group-addon" },
            _react2.default.createElement("span", { className: "glyphicon glyphicon-" + icon })
          )
        );
      } else {

        return _react2.default.createElement("input", { type: "text", className: "form-control", ref: getRef });
      }
    }
  }]);

  return DateTimePicker;
}(_react.Component);

var _default = DateTimePicker;
exports.default = _default;


var datePropType = _react.PropTypes.oneOfType([_react.PropTypes.instanceOf(Date), _react.PropTypes.instanceOf(_moment2.default), _react.PropTypes.string]);

DateTimePicker.propTypes = {
  icon: _react.PropTypes.node,
  format: _react.PropTypes.string,
  dayViewHeaderFormat: _react.PropTypes.string,
  extraFormats: _react.PropTypes.string,
  stepping: _react.PropTypes.number,
  minDate: datePropType,
  maxDate: datePropType,
  useCurrent: _react.PropTypes.bool,
  collapse: _react.PropTypes.bool,
  locale: _react.PropTypes.string,
  defaultDate: datePropType,
  disabledDates: _react.PropTypes.array,
  enabledDates: _react.PropTypes.array,
  tooltips: _react.PropTypes.object,
  useStrict: _react.PropTypes.bool,
  sideBySide: _react.PropTypes.bool,
  daysOfWeekDisabled: _react.PropTypes.array,
  calendarWeeks: _react.PropTypes.bool,
  viewMode: _react.PropTypes.oneOf(["decades", "years", "months", "days"]),
  toolbarPlacement: _react.PropTypes.oneOf(["default", "top", "bottom"]),
  showTodayButton: _react.PropTypes.bool,
  showClear: _react.PropTypes.bool,
  showClose: _react.PropTypes.bool,
  widgetPositioning: _react.PropTypes.object,
  widgetParent: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
  ignoreReadonly: _react.PropTypes.bool,
  keepOpen: _react.PropTypes.bool,
  focusOnShow: _react.PropTypes.bool,
  inline: _react.PropTypes.bool,
  keepInvalid: _react.PropTypes.bool,
  debug: _react.PropTypes.bool,
  allowInputToggle: _react.PropTypes.bool,
  disabledTimeIntervals: _react.PropTypes.bool,
  disabledHours: _react.PropTypes.bool,
  enabledHours: _react.PropTypes.bool,
  viewDate: _react.PropTypes.bool
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaults, "defaults", "src/components/DateTimePicker/index.js");

  __REACT_HOT_LOADER__.register(events, "events", "src/components/DateTimePicker/index.js");

  __REACT_HOT_LOADER__.register(setOptions, "setOptions", "src/components/DateTimePicker/index.js");

  __REACT_HOT_LOADER__.register(DateTimePicker, "DateTimePicker", "src/components/DateTimePicker/index.js");

  __REACT_HOT_LOADER__.register(datePropType, "datePropType", "src/components/DateTimePicker/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/DateTimePicker/index.js");
}();

;