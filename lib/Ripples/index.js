"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               The MIT License (MIT)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright (c) 2016 Rocky Wu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               The above copyright notice and this permission notice shall be included in all
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Adapted by Yannick Bochatay
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var rippleStyle = {
  position: "absolute",
  borderRadius: "50%",
  opacity: 0,
  width: 35,
  height: 35,
  transform: "translate(-50%, -50%)",
  pointerEvents: "none"
};

var wrapStyle = {
  position: "relative",
  display: "inline-block",
  overflow: "hidden"
};

var Ripples = function (_React$Component) {
  _inherits(Ripples, _React$Component);

  function Ripples(props) {
    _classCallCheck(this, Ripples);

    var _this = _possibleConstructorReturn(this, (Ripples.__proto__ || Object.getPrototypeOf(Ripples)).call(this, props));

    _this.state = {
      rippleStyle: {},
      wrapStyle: {}
    };

    _this.handleClick = _this.handleClick.bind(_this);

    return _this;
  }

  _createClass(Ripples, [{
    key: "handleClick",
    value: function handleClick(ev) {
      var _this2 = this;

      ev.stopPropagation();

      var _props = this.props,
          onClick = _props.onClick,
          color = _props.color,
          during = _props.during;
      var pageX = ev.pageX,
          pageY = ev.pageY,
          _ev$currentTarget = ev.currentTarget,
          offsetLeft = _ev$currentTarget.offsetLeft,
          offsetTop = _ev$currentTarget.offsetTop,
          offsetWidth = _ev$currentTarget.offsetWidth,
          offsetHeight = _ev$currentTarget.offsetHeight;


      var left = pageX - offsetLeft;
      var top = pageY - offsetTop;

      this.setState({
        rippleStyle: {
          top: top,
          left: left,
          opacity: 1,
          backgroundColor: color
        }
      });

      setTimeout(function () {

        var size = Math.max(offsetWidth, offsetHeight);

        _this2.setState({
          rippleStyle: {
            left: left,
            top: top,
            transform: rippleStyle.transform + " scale(" + size / 9 + ")",
            opacity: 0,
            transition: "all " + during + "ms"
          }
        });
      }, 50);

      if (typeof onClick === "function") {

        onClick(ev);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          style = _props2.style,
          props = _objectWithoutProperties(_props2, ["children", "style"]);

      var state = this.state;


      var s = _extends({}, style, wrapStyle, state.wrapStyle);

      return _react2.default.createElement(
        "div",
        _extends({}, props, { style: s, onClick: this.handleClick }),
        children,
        _react2.default.createElement("s", { style: _extends({}, rippleStyle, state.rippleStyle) })
      );
    }
  }]);

  return Ripples;
}(_react2.default.Component);

Ripples.propTypes = {
  during: _react.PropTypes.number,
  color: _react.PropTypes.string,
  style: _react.PropTypes.object,
  children: _react.PropTypes.node,
  onClick: _react.PropTypes.func
};

Ripples.defaultProps = {
  during: 600,
  color: "rgba(0, 0, 0, .3)"
};

var _default = Ripples;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(rippleStyle, "rippleStyle", "src/components/Ripples/index.js");

  __REACT_HOT_LOADER__.register(wrapStyle, "wrapStyle", "src/components/Ripples/index.js");

  __REACT_HOT_LOADER__.register(Ripples, "Ripples", "src/components/Ripples/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Ripples/index.js");
}();

;