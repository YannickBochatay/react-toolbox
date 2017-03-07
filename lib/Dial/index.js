"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

require("jquery-knob");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dial = function (_Component) {
  _inherits(Dial, _Component);

  function Dial() {
    _classCallCheck(this, Dial);

    return _possibleConstructorReturn(this, (Dial.__proto__ || Object.getPrototypeOf(Dial)).apply(this, arguments));
  }

  _createClass(Dial, [{
    key: "parseOptions",
    value: function parseOptions() {

      var opt = _extends({}, this.props);

      opt.change = opt.onChange;

      delete opt.onChange;

      return opt;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      (0, _jquery2.default)(this.input).dial(this.parseOptions());
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      (0, _jquery2.default)(this.input).dial("destroy");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {

      (0, _jquery2.default)(this.input).trigger("configure", this.parseOptions());
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement("input", {
        type: "text",
        defaultValue: this.props.value || 0,
        className: "dial",
        ref: function ref(input) {
          return _this2.input = input;
        }
      });
    }
  }]);

  return Dial;
}(_react.Component);

var _default = Dial;
exports.default = _default;


Dial.propTypes = {

  value: _react.PropTypes.number,

  // events
  onChange: _react.PropTypes.func,

  // behavior
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  step: _react.PropTypes.number,
  angleOffset: _react.PropTypes.number,
  angleArc: _react.PropTypes.number,
  readOnly: _react.PropTypes.bool,
  rotation: _react.PropTypes.string,

  // ui
  cursor: _react.PropTypes.string,
  thickness: _react.PropTypes.number,
  lineCap: _react.PropTypes.oneOf(["butt", "round"]),
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  displayInput: _react.PropTypes.bool,
  displayPrevious: _react.PropTypes.bool,
  fgColor: _react.PropTypes.string,
  inputColor: _react.PropTypes.string,
  font: _react.PropTypes.string,
  fontWeight: _react.PropTypes.string,
  bgColor: _react.PropTypes.string

};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Dial, "Dial", "src/components/Dial/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Dial/index.js");
}();

;