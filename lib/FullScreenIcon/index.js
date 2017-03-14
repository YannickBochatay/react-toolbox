"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullScreenIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Glyphicon = require("react-bootstrap/lib/Glyphicon");

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

require("jquery-fullscreen-plugin");

var _reactRedux = require("react-redux");

var _ducks = require("../Intl/ducks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullScreenIcon = exports.FullScreenIcon = function (_Component) {
  _inherits(FullScreenIcon, _Component);

  function FullScreenIcon(props) {
    _classCallCheck(this, FullScreenIcon);

    var _this = _possibleConstructorReturn(this, (FullScreenIcon.__proto__ || Object.getPrototypeOf(FullScreenIcon)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.onChange = _this.onChange.bind(_this);

    _this.state = { fullscreen: false };

    return _this;
  }

  _createClass(FullScreenIcon, [{
    key: "handleClick",
    value: function handleClick(e) {

      e.preventDefault();

      (0, _jquery2.default)(document).toggleFullScreen();
    }
  }, {
    key: "onChange",
    value: function onChange() {

      this.setState({ fullscreen: Boolean((0, _jquery2.default)(document).fullScreen()) });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      (0, _jquery2.default)(document).on("fullscreenchange", this.onChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      (0, _jquery2.default)(document).off("fullscreenchange", this.onChange);
    }
  }, {
    key: "render",
    value: function render() {

      var title = this.state.fullscreen ? this.props.title : this.props.titleExit;

      var style = _extends({ cursor: "pointer" }, this.props.style);

      var htmlProps = _extends({}, this.props);

      for (var n in this.constructor.propTypes) {
        delete htmlProps[n];
      }return _react2.default.createElement(_Glyphicon2.default, _extends({}, htmlProps, {
        style: style,
        glyph: this.state.fullscreen ? "resize-small" : "fullscreen",
        onClick: this.handleClick,
        title: title
      }));
    }
  }]);

  return FullScreenIcon;
}(_react.Component);

FullScreenIcon.propTypes = {
  title: _react.PropTypes.string,
  titleExit: _react.PropTypes.string,
  style: _react.PropTypes.object
};

function mapStateToProps(state) {

  var data = state[_ducks.STATE_PROPERTY];

  return {
    title: data && data.messages.fullscreen || "fullscreen",
    titleExit: data && data.messages["exit fullscreen"] || "exit fullscreen"
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(FullScreenIcon);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FullScreenIcon, "FullScreenIcon", "src/components/FullScreenIcon/index.js");

  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "src/components/FullScreenIcon/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/FullScreenIcon/index.js");
}();

;