"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Tooltip = require("react-bootstrap/lib/Tooltip");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _jsygUtils = require("jsyg-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  div: {
    position: "relative",
    overflow: "visible"
  },
  tooltip: {
    position: "absolute"
  }
};

var MouseTooltip = function (_React$Component) {
  _inherits(MouseTooltip, _React$Component);

  function MouseTooltip(props) {
    _classCallCheck(this, MouseTooltip);

    var _this = _possibleConstructorReturn(this, (MouseTooltip.__proto__ || Object.getPrototypeOf(MouseTooltip)).call(this, props));

    _this.state = {
      x: 0,
      y: 0,
      display: false
    };

    _this.handleMove = _this.handleMove.bind(_this);
    _this.handleMouseOut = _this.handleMouseOut.bind(_this);
    _this.handleMouseOver = _this.handleMouseOver.bind(_this);

    _this.id = "tooltip" + Math.random();

    return _this;
  }

  _createClass(MouseTooltip, [{
    key: "handleMove",
    value: function handleMove(e) {

      var pos = (0, _jsygUtils.getCursorPos)(e, this.container);

      pos.x = Math.round(pos.x);
      pos.y = Math.round(pos.y);

      this.setState(_extends({}, pos));

      if (this.props.onMove) this.props.onMove(pos);
    }
  }, {
    key: "handleMouseOver",
    value: function handleMouseOver() {

      this.setState({ display: true });
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {

      this.setState({ display: false });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          placement = _props.placement,
          style = _props.style,
          children = _props.children,
          content = _props.content,
          offsetX = _props.offsetX,
          offsetY = _props.offsetY,
          rest = _objectWithoutProperties(_props, ["placement", "style", "children", "content", "offsetX", "offsetY"]);

      delete rest.onMove;

      var tooltipStyle = _extends({}, styles.tooltip, {
        left: this.state.x + 3 + offsetX,
        top: this.state.y - 12 + offsetY
      });

      var tooltip = null;

      if (this.state.display) {

        tooltip = _react2.default.createElement(
          _Tooltip2.default,
          {
            placement: placement,
            className: "in",
            style: tooltipStyle,
            id: this.id
          },
          content
        );
      }

      return _react2.default.createElement(
        "div",
        _extends({}, rest, {
          style: _extends({}, styles.div, style),
          ref: function ref(node) {
            return _this2.container = node;
          },
          onMouseMove: this.handleMove,
          onMouseOver: this.handleMouseOver,
          onMouseOut: this.handleMouseOut
        }),
        tooltip,
        children
      );
    }
  }]);

  return MouseTooltip;
}(_react2.default.Component);

var _default = MouseTooltip;
exports.default = _default;


MouseTooltip.propTypes = {
  placement: _react.PropTypes.oneOf(["top", "right", "bottom", "left"]),
  style: _react.PropTypes.object,
  children: _react.PropTypes.node,
  onMove: _react.PropTypes.func,
  content: _react.PropTypes.node.isRequired,
  offsetX: _react.PropTypes.number,
  offsetY: _react.PropTypes.number
};

MouseTooltip.defaultProps = {
  offsetX: 0,
  offsetY: 0,
  placement: "right"
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, "styles", "src/components/MouseTooltip/index.js");

  __REACT_HOT_LOADER__.register(MouseTooltip, "MouseTooltip", "src/components/MouseTooltip/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/MouseTooltip/index.js");
}();

;