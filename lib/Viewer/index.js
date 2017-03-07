"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isEqual = require("lodash/fp/isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _jsygZoomandpan = require("jsyg-zoomandpan");

var _jsygZoomandpan2 = _interopRequireDefault(_jsygZoomandpan);

require("jsyg-zoomandpan/JSYG.ZoomAndPan.css");

var _Glyphicon = require("react-bootstrap/lib/Glyphicon");

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _Button = require("react-bootstrap/lib/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  div: {
    position: "relative"
  },
  zoomIn: {
    position: "absolute",
    top: 5,
    left: 5
  },
  zoomOut: {
    position: "absolute",
    top: 40,
    left: 5
  },
  svg: {
    backgroundColor: "#ddd"
  },
  foreignObject: {
    border: "1px solid gray"
  }
};

var Viewer = function (_Component) {
  _inherits(Viewer, _Component);

  function Viewer(props) {
    _classCallCheck(this, Viewer);

    var _this = _possibleConstructorReturn(this, (Viewer.__proto__ || Object.getPrototypeOf(Viewer)).call(this, props));

    _this.zoomIn = _this.zoomIn.bind(_this);
    _this.zoomOut = _this.zoomOut.bind(_this);

    return _this;
  }

  _createClass(Viewer, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      this.zap.disable();
      this.zap = null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          mousePan = _props.mousePan,
          mouseWheelZoom = _props.mouseWheelZoom;


      this.zap.set(this.props);

      if (!(0, _isEqual2.default)(prevProps.mousePan, mousePan)) {

        if (mousePan) {

          this.zap.mousePan.set(mousePan);
          if (!prevProps.mousePan) this.zap.mousePan.enable();
        } else if (prevProps.mousePan) this.zap.mousePan.disable();
      }

      if (!(0, _isEqual2.default)(prevProps.mouseWheelZoom, mouseWheelZoom)) {

        if (mouseWheelZoom) {

          this.zap.mouseWheelZoom.set(mouseWheelZoom);
          if (!prevProps.mouseWheelZoom) this.zap.mouseWheelZoom.enable();
        } else if (prevProps.mouseWheelZoom) this.zap.mouseWheelZoom.disable();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      this.zap = new _jsygZoomandpan2.default(this.viewer);

      this.zap.scaleMin = 0.1;

      this.zap.enable(this.props);

      this.zap.scale(this.props.initialScale);

      if (this.props.mousePan) this.zap.mousePan.enable(this.props.mousePan);

      if (this.props.mouseWheelZoom) this.zap.mouseWheelZoom.enable(this.props.mouseWheelZoom);
    }
  }, {
    key: "zoomIn",
    value: function zoomIn() {

      this.zap.scale(1.1);
    }
  }, {
    key: "zoomOut",
    value: function zoomOut() {

      this.zap.scale(0.9);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var child = _react2.default.Children.only(this.props.children);

      var zoomIn = this.zoomIn,
          zoomOut = this.zoomOut;


      var style = _extends({}, styles.div, {
        width: this.props.width,
        height: this.props.height
      }, this.props.style);

      return _react2.default.createElement(
        "div",
        _extends({}, this.props, { style: style }),
        _react2.default.createElement(
          "svg",
          {
            ref: function ref(node) {
              return _this2.viewer = node;
            },
            width: this.props.width,
            height: this.props.height,
            preserveAspectRatio: "none",
            style: styles.svg
          },
          _react2.default.createElement(
            "foreignObject",
            { width: this.props.width, height: this.props.height, style: styles.foreignObject },
            child
          )
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            bsStyle: "default",
            title: "zoom in",
            onClick: zoomIn,
            style: styles.zoomIn
          },
          _react2.default.createElement(_Glyphicon2.default, { glyph: "zoom-in" })
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            bsStyle: "default",
            title: "zoom out",
            onClick: zoomOut,
            style: styles.zoomOut
          },
          _react2.default.createElement(_Glyphicon2.default, { glyph: "zoom-out" })
        )
      );
    }
  }]);

  return Viewer;
}(_react.Component);

var _default = Viewer;
exports.default = _default;


Viewer.propTypes = {
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  children: _react.PropTypes.node,
  style: _react.PropTypes.object,
  initialScale: _react.PropTypes.number,
  mouseWheelZoom: _react.PropTypes.any,
  mousePan: _react.PropTypes.any
};

Viewer.defaultProps = {
  width: 700,
  height: 1000,
  initialScale: 0.9,
  mouseWheelZoom: true,
  mousePan: true
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, "styles", "src/components/Viewer/index.js");

  __REACT_HOT_LOADER__.register(Viewer, "Viewer", "src/components/Viewer/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Viewer/index.js");
}();

;