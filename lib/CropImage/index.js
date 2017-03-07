"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jsygCropandresize = require("jsyg-cropandresize");

var _jsygCropandresize2 = _interopRequireDefault(_jsygCropandresize);

require("jsyg-editor/JSYG.Editor.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CropImage = function (_Component) {
  _inherits(CropImage, _Component);

  function CropImage(props) {
    _classCallCheck(this, CropImage);

    var _this = _possibleConstructorReturn(this, (CropImage.__proto__ || Object.getPrototypeOf(CropImage)).call(this, props));

    _this.handleDrag = _this.handleDrag.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);

    return _this;
  }

  _createClass(CropImage, [{
    key: "setOptions",
    value: function setOptions() {

      var opt = _extends({}, this.props);

      delete opt.width;
      delete opt.height;
      delete opt.disabled;
      delete opt.onChange;
      delete opt.onDrag;

      this.crop.set(opt);
    }
  }, {
    key: "reset",
    value: function reset() {

      var ref = Object.getPrototypeOf(this.crop);

      for (var n in ref) {

        if (typeof ref[n] !== "function") this.crop[n] = ref[n];
      }
    }
  }, {
    key: "getBBox",
    value: function getBBox() {

      var bbox = this.crop.selection.getBBox();

      return {
        x: bbox.x,
        y: bbox.y,
        width: bbox.width,
        height: bbox.height
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      this.crop = new _jsygCropandresize2.default(this.svg.firstElementChild);

      this.setOptions();

      if (!this.props.disabled) this.enable();
    }
  }, {
    key: "handleDrag",
    value: function handleDrag() {

      if (this.props.onDrag) this.props.onDrag(this.getBBox());
    }
  }, {
    key: "handleChange",
    value: function handleChange() {

      if (this.props.onChange) this.props.onChange(this.getBBox());
    }
  }, {
    key: "enable",
    value: function enable() {

      this.crop.enable();
      this.crop.editor.on("drag", this.handleDrag);
      this.crop.editor.on("change", this.handleChange);
    }
  }, {
    key: "disable",
    value: function disable() {

      this.crop.disable();
      this.crop.editor.off("drag", this.handleDrag);
      this.crop.editor.off("change", this.handleChange);
    }
  }, {
    key: "update",
    value: function update() {

      this.crop.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {

      this.setOptions();

      if (this.props.disabled) this.disable();else if (prevProps.disabled) this.enable();else if (this.props.src !== prevProps.src) this.update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      this.disable();
      this.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          width = _props.width,
          height = _props.height,
          src = _props.src,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ["width", "height", "src", "children"]);

      delete rest.boxInit;

      var image = null;

      if (src) {

        image = _react2.default.createElement("image", { xlinkHref: src,
          width: width,
          height: height
        });
      }

      return _react2.default.createElement(
        "svg",
        _extends({
          width: width,
          height: height,
          ref: function ref(node) {
            return _this2.svg = node;
          }
        }, rest),
        image || children
      );
    }
  }]);

  return CropImage;
}(_react.Component);

CropImage.propTypes = {
  src: _react.PropTypes.string,
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  disabled: _react.PropTypes.bool,
  onDrag: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  children: _react.PropTypes.node,
  boxInit: _react.PropTypes.object
};

var _default = CropImage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CropImage, "CropImage", "src/components/CropImage/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/CropImage/index.js");
}();

;