"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Spinner = require("../Spinner");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Alert = require("react-bootstrap/lib/Alert");

var _Alert2 = _interopRequireDefault(_Alert);

var _Intl = require("../Intl");

var _Intl2 = _interopRequireDefault(_Intl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  divSpinner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  spinner: { margin: "auto" },
  alert: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
};

var Image = function (_React$PureComponent) {
  _inherits(Image, _React$PureComponent);

  function Image(props) {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

    _this.state = {
      image: null,
      isLoading: false,
      error: null
    };

    return _this;
  }

  _createClass(Image, [{
    key: "toDataURL",
    value: function toDataURL() {

      var canvas = document.createElement("canvas");

      canvas.width = this.image.width;
      canvas.height = this.image.height;

      var ctx = canvas.getContext("2d");

      ctx.drawImage(this.image, 0, 0);

      return canvas.toDataURL("image/png");
    }
  }, {
    key: "loadImage",
    value: function loadImage(src) {
      var _this2 = this;

      this.setState({ image: null, isLoading: true, error: null });

      var img = document.createElement("img");

      img.onload = function () {
        return _this2.setState({ isLoading: false, image: _this2.toDataURL(img) });
      };
      img.onerror = function (e) {
        return _this2.setState({ isLoading: false, error: e });
      };

      img.crossOrigin = "";
      img.src = src;

      this.image = img;
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {

      if (this.props.src !== nextProps.src) this.loadImage(nextProps.src);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {

      if (!this.image && !this.state.isLoading) this.loadImage(this.props.src);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          style = _props.style,
          src = _props.src,
          alt = _props.alt,
          spinnerColor = _props.spinnerColor,
          svg = _props.svg,
          rest = _objectWithoutProperties(_props, ["style", "src", "alt", "spinnerColor", "svg"]);

      var component = void 0;

      if (this.state.isLoading) {

        component = _react2.default.createElement(
          "div",
          _extends({}, rest, {
            style: _extends({}, styles.divSpinner, style)
          }),
          _react2.default.createElement(_Spinner2.default, { color: spinnerColor, style: styles.spinner })
        );

        if (svg) {

          component = _react2.default.createElement(
            "foreignObject",
            { width: "100%", height: "100%" },
            component
          );
        }
      } else if (this.state.error) {

        component = _react2.default.createElement(
          _Alert2.default,
          _extends({
            title: alt || src
          }, rest, {
            bsStyle: "danger",
            style: _extends({}, styles.alert, style)
          }),
          _react2.default.createElement(_Intl2.default, { text: "unable to load image", ucfirst: true }),
          "\xA0",
          alt || src
        );

        if (svg) {

          component = _react2.default.createElement(
            "foreignObject",
            { width: "100%", height: "100%" },
            component
          );
        }
      } else if (svg) {

        component = _react2.default.createElement("image", _extends({ xlinkHref: this.state.image }, { style: style, alt: alt }, rest));
      } else {

        component = _react2.default.createElement("img", _extends({ src: this.state.image }, { style: style, alt: alt }, rest));
      }

      return component;
    }
  }]);

  return Image;
}(_react2.default.PureComponent);

Image.propTypes = {
  src: _react.PropTypes.string,
  alt: _react.PropTypes.string,
  style: _react.PropTypes.object,
  spinnerColor: _react.PropTypes.string,
  svg: _react.PropTypes.bool
};

Image.defaultProps = { svg: false };

var _default = Image;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, "styles", "src/components/Image/index.js");

  __REACT_HOT_LOADER__.register(Image, "Image", "src/components/Image/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Image/index.js");
}();

;