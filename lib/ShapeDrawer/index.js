"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jsygShapedrawer = require("jsyg-shapedrawer");

var _jsygShapedrawer2 = _interopRequireDefault(_jsygShapedrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShapeDrawer = function (_Component) {
  _inherits(ShapeDrawer, _Component);

  function ShapeDrawer(props) {
    _classCallCheck(this, ShapeDrawer);

    var _this = _possibleConstructorReturn(this, (ShapeDrawer.__proto__ || Object.getPrototypeOf(ShapeDrawer)).call(this, props));

    _this.handleMousedown = _this.handleMousedown.bind(_this);

    return _this;
  }

  _createClass(ShapeDrawer, [{
    key: "setOptions",
    value: function setOptions() {

      var opt = _extends({}, this.props);

      if (opt.onEnd) {

        this.drawer.on("end", opt.onEnd);
        delete opt.onEnd;
      }

      if (opt.onDraw) {

        this.drawer.on("draw", opt.onDraw);
        delete opt.onDraw;
      }

      delete opt.width;
      delete opt.height;
      delete opt.children;
      delete opt.disabled;
      delete opt.shape;

      this.drawer.set(opt);
    }
  }, {
    key: "handleMousedown",
    value: function handleMousedown(e) {

      var shape = this.shape.cloneNode(true);

      this.svg.appendChild(shape);

      this.drawer.draw(shape, e);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      this.drawer = new _jsygShapedrawer2.default(this.svg);

      this.setOptions();

      if (!this.props.disabled) this.enable();
    }
  }, {
    key: "enable",
    value: function enable() {

      this.drawer.enable();
      this.svg.addEventListener("mousedown", this.handleMousedown);
    }
  }, {
    key: "disable",
    value: function disable() {

      this.drawer.disable();
      this.svg.removeEventListener("mousedown", this.handleMousedown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {

      this.setOptions();

      if (this.props.disabled) this.disable();else if (prevProps.disabled) this.enable();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      this.disable();
      this.drawer.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          shape = _props.shape,
          shapeStyle = _props.shapeStyle,
          disabled = _props.disabled,
          width = _props.width,
          height = _props.height,
          rest = _objectWithoutProperties(_props, ["children", "shape", "shapeStyle", "disabled", "width", "height"]);

      for (var n in ShapeDrawer.propTypes) {
        delete rest[n];
      }var shapeComponent = _react2.default.createElement(shape, {
        style: shapeStyle,
        ref: function ref(node) {
          return _this2.shape = node;
        }
      });

      return _react2.default.createElement(
        "svg",
        _extends({
          width: width,
          height: height
        }, rest, {
          ref: function ref(node) {
            return _this2.svg = node;
          }
        }),
        children,
        disabled ? null : shapeComponent
      );
    }
  }]);

  return ShapeDrawer;
}(_react.Component);

ShapeDrawer.propTypes = {
  onDraw: _react.PropTypes.func,
  onEnd: _react.PropTypes.func,
  minArea: _react.PropTypes.number,
  options: _react.PropTypes.object,
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  children: _react.PropTypes.node,
  shape: _react.PropTypes.oneOf(["circle", "ellipse", "line", "rect"]).isRequired,
  shapeStyle: _react.PropTypes.object,
  disabled: _react.PropTypes.bool
};

ShapeDrawer.defaultProps = {
  width: 500,
  height: 500,
  shapeStyle: {
    fill: "none",
    stroke: "black"
  }
};

var _default = ShapeDrawer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ShapeDrawer, "ShapeDrawer", "src/components/ShapeDrawer/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/ShapeDrawer/index.js");
}();

;