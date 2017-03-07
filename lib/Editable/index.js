"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

require("bootstrap/js/tooltip");

require("bootstrap/js/popover");

require("x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js");

require("x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editable = function (_Component) {
  _inherits(Editable, _Component);

  function Editable() {
    _classCallCheck(this, Editable);

    return _possibleConstructorReturn(this, (Editable.__proto__ || Object.getPrototypeOf(Editable)).apply(this, arguments));
  }

  _createClass(Editable, [{
    key: "updateValue",
    value: function updateValue(value) {

      (0, _jquery2.default)(this.a).editable("setValue", value);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      (0, _jquery2.default)(this.a).editable(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {

      (0, _jquery2.default)(this.a).editable("option", this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      (0, _jquery2.default)(this.a).editable("destroy");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "a",
        { href: "#", ref: function ref(a) {
            return _this2.a = a;
          } },
        this.props.children
      );
    }
  }]);

  return Editable;
}(_react.Component);

var _default = Editable;
exports.default = _default;


Editable.propTypes = { children: _react.PropTypes.node };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Editable, "Editable", "src/components/Editable/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Editable/index.js");
}();

;