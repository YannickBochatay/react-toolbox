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

var _Modal4 = require("components/Modal");

var _Modal5 = _interopRequireDefault(_Modal4);

var _Button = require("react-bootstrap/lib/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Intl = require("components/Intl");

var _Intl2 = _interopRequireDefault(_Intl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Confirm = function (_Modal) {
  _inherits(Confirm, _Modal);

  function Confirm(props) {
    _classCallCheck(this, Confirm);

    var _this = _possibleConstructorReturn(this, (Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call(this, props));

    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.handleConfirm = _this.handleConfirm.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    return _this;
  }

  _createClass(Confirm, [{
    key: "handleCancel",
    value: function handleCancel() {

      this.hide();
      this.props.onCancel();
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {

      this.hide();
      this.props.onConfirm();
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {

      if (!this.state.visible) return;

      if (e.key === "Escape") this.handleCancel();else if (e.key === "Enter") {
        this.props.defaultChoice === "cancel" ? this.handleCancel() : this.handleConfirm();
      }
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
          defaultChoice = _props.defaultChoice,
          rest = _objectWithoutProperties(_props, ["children", "defaultChoice"]);

      delete rest.onConfirm;
      delete rest.onCancel;

      return _react2.default.createElement(
        _Modal3.default,
        _extends({}, rest, {
          onHide: this.handleCancel,
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
            { bsStyle: defaultChoice === "confirm" ? "default" : "primary", onClick: this.handleCancel },
            _react2.default.createElement(
              _Intl2.default,
              null,
              "no"
            )
          ),
          "\xA0",
          _react2.default.createElement(
            _Button2.default,
            { bsStyle: defaultChoice === "cancel" ? "default" : "primary", onClick: this.handleConfirm },
            _react2.default.createElement(
              _Intl2.default,
              null,
              "yes"
            )
          )
        )
      );
    }
  }]);

  return Confirm;
}(_Modal5.default);

Confirm.propTypes = _extends({}, Confirm.propTypes, {
  onCancel: _react.PropTypes.func.isRequired,
  onConfirm: _react.PropTypes.func.isRequired,
  defaultChoice: _react.PropTypes.oneOf(["cancel", "confirm"])
});

Confirm.defaultProps = _extends({}, Confirm.defaultProps, {
  defaultChoice: "confirm",
  onCancel: function onCancel() {}
});

var _default = Confirm;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Confirm, "Confirm", "src/components/Confirm/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Confirm/index.js");
}();

;