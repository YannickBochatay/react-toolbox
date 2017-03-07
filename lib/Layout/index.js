"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ducks = require("components/Clouds/ducks");

var _style = require("./style.css");

var _style2 = _interopRequireDefault(_style);

var _reactRedux = require("react-redux");

var _DocumentTitle = require("components/DocumentTitle/");

var _DocumentTitle2 = _interopRequireDefault(_DocumentTitle);

var _Scrollbar = require("components/Scrollbar");

var _Scrollbar2 = _interopRequireDefault(_Scrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onMount = this.props.onMount;


      if (onMount) onMount();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          sidebar = _props.sidebar,
          sidebarRight = _props.sidebarRight,
          sidebarWidth = _props.sidebarWidth,
          sidebarRightWidth = _props.sidebarRightWidth,
          title = _props.title,
          transparent = _props.transparent,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ["children", "sidebar", "sidebarRight", "sidebarWidth", "sidebarRightWidth", "title", "transparent", "className"]);

      delete rest.onMount;

      var rightBar = null;

      if (sidebarRight) {

        rightBar = _react2.default.createElement(
          _Scrollbar2.default,
          { className: _style2.default.sidebar, tag: "aside", style: { width: sidebarRightWidth } },
          sidebarRight
        );
      }

      return _react2.default.createElement(
        _DocumentTitle2.default,
        { title: title || "" },
        _react2.default.createElement(
          "div",
          _extends({}, rest, { className: _style2.default.container + (className ? " " + className : "") /* + " animated zoomIn" */ }),
          _react2.default.createElement(
            _Scrollbar2.default,
            { className: _style2.default.sidebar, tag: "aside", style: { width: sidebarWidth } },
            sidebar
          ),
          _react2.default.createElement(
            "div",
            { className: transparent ? _style2.default.mainTransparent : _style2.default.main },
            children
          ),
          rightBar
        )
      );
    }
  }]);

  return Main;
}(_react.Component);

Main.propTypes = {
  sidebar: _react.PropTypes.node,
  sidebarWidth: _react.PropTypes.number,
  sidebarRight: _react.PropTypes.node,
  sidebarRightWidth: _react.PropTypes.number,
  onMount: _react.PropTypes.func,
  children: _react.PropTypes.node,
  title: _react.PropTypes.string,
  transparent: _react.PropTypes.bool,
  className: _react.PropTypes.string
};

Main.defaultProps = {
  sidebarWidth: 230,
  sidebarRightWidth: 230
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onMount: function onMount() {

      dispatch((0, _ducks.hideClouds)());
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Main);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Main, "Main", "src/components/Layout/index.js");

  __REACT_HOT_LOADER__.register(mapDispatchToProps, "mapDispatchToProps", "src/components/Layout/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Layout/index.js");
}();

;