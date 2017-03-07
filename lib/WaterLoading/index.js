"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _style = require("./style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function size2px(size) {

  switch (size) {
    case "xs":
      return 40;
    case "sm":
      return 80;
    case "lg":
      return 240;
    case "md":default:
      return 120;
  }
}

var WaterLoading = function (_Component) {
  _inherits(WaterLoading, _Component);

  function WaterLoading(props) {
    _classCallCheck(this, WaterLoading);

    var _this = _possibleConstructorReturn(this, (WaterLoading.__proto__ || Object.getPrototypeOf(WaterLoading)).call(this, props));

    _this.state = { animatedValue: 0 };

    return _this;
  }

  _createClass(WaterLoading, [{
    key: "setAnimatedValue",
    value: function setAnimatedValue(animatedValue) {

      this.setState({ animatedValue: animatedValue });
    }
  }, {
    key: "launchAnimation",
    value: function launchAnimation(prevPercent) {
      var _this2 = this;

      var i = prevPercent;

      var duration = this.props.duration || 800;

      var delay = Math.round(duration / Math.abs(this.props.percent - i));

      this.interval = window.setInterval(function () {

        i < _this2.props.percent ? _this2.setAnimatedValue(++i) : _this2.stopAnimation();
      }, delay);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {

      if (this.props.animate && prevProps.percent !== this.props.percent) {

        this.launchAnimation(prevProps.percent);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      if (this.props.animate) this.launchAnimation(0);
    }
  }, {
    key: "stopAnimation",
    value: function stopAnimation() {

      window.clearInterval(this.interval);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      this.stopAnimation();
    }
  }, {
    key: "render",
    value: function render() {

      var size = size2px(this.props.size);
      var style = _extends({ width: size, height: size }, this.props.style);

      var percent = this.props.animate ? this.state.animatedValue : this.props.percent;

      percent = Math.min(100, Math.max(0, percent));

      var props = Object.assign({}, this.props);

      delete props.percent;
      delete props.size;
      delete props.animate;

      return _react2.default.createElement(
        "div",
        _extends({ className: _style2.default.box }, props, { style: style }),
        _react2.default.createElement(
          "svg",
          { style: { display: "none" } },
          _react2.default.createElement(
            "symbol",
            { id: "wave" },
            _react2.default.createElement("path", { d: "M420,20 c21.5-0.4,38.8-2.5,51.1-4.5 c13.4-2.2,26.5-5.2,27.3-5.4 C514,6.5,518,4.7,528.5,2.7 c7.1-1.3,17.9-2.8,31.5-2.7 c0,0,0,0,0,0 v20 H420 z" }),
            _react2.default.createElement("path", { d: "M420,20 c-21.5-0.4-38.8-2.5-51.1-4.5 c-13.4-2.2-26.5-5.2-27.3-5.4 C326,6.5,322,4.7,311.5,2.7 C304.3,1.4,293.6-0.1,280,0 c0,0,0,0,0,0 v20 H420 z" }),
            _react2.default.createElement("path", { d: "M140,20 c21.5-0.4,38.8-2.5,51.1-4.5 c13.4-2.2,26.5-5.2,27.3-5.4 C234,6.5,238,4.7,248.5,2.7 c7.1-1.3,17.9-2.8,31.5-2.7 c0,0,0,0,0,0 v20 H140 z" }),
            _react2.default.createElement("path", { d: "M140,20 c-21.5-0.4-38.8-2.5-51.1-4.5 c-13.4-2.2-26.5-5.2-27.3-5.4 C46,6.5,42,4.7,31.5,2.7 C24.3,1.4,13.6-0.1,0,0 c0,0,0,0,0,0 l0,20 H140 z" })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: _style2.default.percent, style: { fontSize: Math.round(size / 4) } },
          _react2.default.createElement(
            "div",
            { className: _style2.default.percentNum, id: "count" },
            percent
          ),
          _react2.default.createElement(
            "div",
            { className: _style2.default.percentB },
            "%"
          )
        ),
        _react2.default.createElement(
          "div",
          { id: "water", className: _style2.default.water, style: { transform: "translate(0," + (100 - percent) + "%)" } },
          _react2.default.createElement(
            "svg",
            { viewBox: "0 0 560 20", className: _style2.default.water_wave + " " + _style2.default.water_wave_back },
            _react2.default.createElement("use", { xlinkHref: "#wave" })
          ),
          _react2.default.createElement(
            "svg",
            { viewBox: "0 0 560 20", className: _style2.default.water_wave + " " + _style2.default.water_wave_front },
            _react2.default.createElement("use", { xlinkHref: "#wave" })
          )
        )
      );
    }
  }]);

  return WaterLoading;
}(_react.Component);

WaterLoading.propTypes = {
  percent: _react.PropTypes.number.isRequired,
  size: _react.PropTypes.string,
  style: _react.PropTypes.object,
  animate: _react.PropTypes.bool,
  duration: _react.PropTypes.number
};

WaterLoading.defaultProps = { percent: 0 };

var _default = WaterLoading;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(size2px, "size2px", "src/components/WaterLoading/index.js");

  __REACT_HOT_LOADER__.register(WaterLoading, "WaterLoading", "src/components/WaterLoading/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/WaterLoading/index.js");
}();

;