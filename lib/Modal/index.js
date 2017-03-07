"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Modal = require("react-bootstrap/lib/Modal");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.state = { visible: false };

    _this.handleClose = _this.handleClose.bind(_this);

    return _this;
  }

  _createClass(Dialog, [{
    key: "handleClose",
    value: function handleClose() {

      this.hide();

      if (this.props.onClose) this.props.onClose();
    }
  }, {
    key: "show",
    value: function show() {

      this.setState({ visible: true });
    }
  }, {
    key: "hide",
    value: function hide() {

      this.setState({ visible: false });
    }
  }, {
    key: "render",
    value: function render() {
      var visible = this.state.visible;

      var _props = this.props,
          title = _props.title,
          children = _props.children,
          footer = _props.footer,
          rest = _objectWithoutProperties(_props, ["title", "children", "footer"]);

      return _react2.default.createElement(
        _Modal2.default,
        _extends({}, rest, {
          onHide: this.handleClose,
          show: visible
        }),
        _react2.default.createElement(
          _Modal2.default.Header,
          { closeButton: true },
          _react2.default.createElement(
            _Modal2.default.Title,
            null,
            title
          )
        ),
        _react2.default.createElement(
          _Modal2.default.Body,
          null,
          children
        ),
        footer ? _react2.default.createElement(
          _Modal2.default.Footer,
          null,
          footer
        ) : ""
      );
    }
  }]);

  return Dialog;
}(_react.Component);

var _default = Dialog;
exports.default = _default;


Dialog.propTypes = {
  title: _react.PropTypes.string,
  onClose: _react.PropTypes.func,
  children: _react.PropTypes.node,
  footer: _react.PropTypes.node
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Dialog, "Dialog", "src/components/Modal/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Modal/index.js");
}();

;