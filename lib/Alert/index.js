"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Modal2 = require("react-bootstrap/lib/Modal");

var _Modal3 = _interopRequireDefault(_Modal2);

var _Modal4 = require("../Modal");

var _Modal5 = _interopRequireDefault(_Modal4);

var _Button = require("react-bootstrap/lib/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Intl = require("../Intl");

var _Intl2 = _interopRequireDefault(_Intl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = function (_Modal) {
  _inherits(Alert, _Modal);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);

    return _this;
  }

  _createClass(Alert, [{
    key: "handleClose",
    value: function handleClose() {

      this.hide();

      if (this.props.onClose) this.props.onClose();
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {

      if (this.state.visible && (e.key === "Enter" || e.key === "Escape")) this.handleClose();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      document.addEventListener("keydown", this.handleKeyPress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      document.addEventListener("keydown", this.handleKeyPress);
    }
  }, {
    key: "render",
    value: function render() {
      var visible = this.state.visible;

      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ["children"]);

      delete rest.onClose;

      return _react2.default.createElement(
        _Modal3.default,
        _extends({}, rest, {
          onHide: this.handleClose,
          show: visible
        }),
        _react2.default.createElement(
          _Modal3.default.Body,
          null,
          children
        ),
        _react2.default.createElement(
          _Modal3.default.Footer,
          null,
          _react2.default.createElement(
            _Button2.default,
            { bsStyle: "primary", onClick: this.handleClose },
            _react2.default.createElement(_Intl2.default, { text: "OK" })
          )
        )
      );
    }
  }]);

  return Alert;
}(_Modal5.default);

Alert.propTypes = _extends({}, Alert.propTypes, {
  onClose: _react.PropTypes.func
});

var _default = Alert;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Alert, "Alert", "src/components/Alert/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Alert/index.js");
}();

;