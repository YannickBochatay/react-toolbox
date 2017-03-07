"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("perfect-scrollbar/src/css/main.scss");

var _perfectScrollbar = require("perfect-scrollbar");

var _perfectScrollbar2 = _interopRequireDefault(_perfectScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scrollbar = function (_Component) {
  _inherits(Scrollbar, _Component);

  function Scrollbar() {
    _classCallCheck(this, Scrollbar);

    return _possibleConstructorReturn(this, (Scrollbar.__proto__ || Object.getPrototypeOf(Scrollbar)).apply(this, arguments));
  }

  _createClass(Scrollbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {

      _perfectScrollbar2.default.initialize(this.div);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {

      _perfectScrollbar2.default.update(this.div);
    }
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {

      _perfectScrollbar2.default.destroy(this.div);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = _extends({
        position: "relative",
        height: "100%",
        overflow: "hidden"
      }, this.props.style || {});

      var htmlProps = _extends({}, this.props);

      for (var n in Scrollbar.propTypes) {
        delete htmlProps[n];
      }return _react2.default.createElement(this.props.tag, _extends({}, htmlProps, { style: style, ref: function ref(node) {
          return _this2.div = node;
        } }), this.props.children);
    }
  }]);

  return Scrollbar;
}(_react.Component);

var _default = Scrollbar;
exports.default = _default;


Scrollbar.propTypes = {
  tag: _react.PropTypes.string,
  style: _react.PropTypes.object,
  children: _react.PropTypes.node
};

Scrollbar.defaultProps = { tag: "div" };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Scrollbar, "Scrollbar", "src/components/Scrollbar/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Scrollbar/index.js");
}();

;