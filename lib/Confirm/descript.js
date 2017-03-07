"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("react-bootstrap/lib/Button");

var _Button2 = _interopRequireDefault(_Button);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalExample = function (_Component) {
  _inherits(ModalExample, _Component);

  function ModalExample(props) {
    _classCallCheck(this, ModalExample);

    var _this = _possibleConstructorReturn(this, (ModalExample.__proto__ || Object.getPrototypeOf(ModalExample)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleConfirm = _this.handleConfirm.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);

    _this.state = { confirmed: false };

    return _this;
  }

  _createClass(ModalExample, [{
    key: "handleClick",
    value: function handleClick() {

      this.dialog.show();
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {

      this.setState({ confirmed: true });
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {

      this.setState({ confirmed: false });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _2.default,
          {
            ref: function ref(elmt) {
              return _this2.dialog = elmt;
            },
            onConfirm: this.handleConfirm,
            onCancel: this.handleCancel
          },
          "Etes-vous s\xFBr ?"
        ),
        _react2.default.createElement(
          _Button2.default,
          { onClick: this.handleClick },
          "Afficher la bo\xEEte"
        ),
        _react2.default.createElement("br", null),
        this.state.confirmed ? "La confirmation a été faite" : "En attente de confirmation"
      );
    }
  }]);

  return ModalExample;
}(_react.Component);

module.exports = {

  categ: "UI Components",

  construct: _2.default,

  description: "Boîte de dialogue de type confirmation",

  states: { default: function _default() {
      return _react2.default.createElement(ModalExample, null);
    } }

};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ModalExample, "ModalExample", "src/components/Confirm/descript.js");
}();

;