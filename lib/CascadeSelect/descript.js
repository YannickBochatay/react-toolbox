"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _rcCascadeSelect = require("rc-cascade-select");

var _rcCascadeSelect2 = _interopRequireDefault(_rcCascadeSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function simulateData(value) {

  if (!value) {

    return [{
      name: "CDP",
      value: "CDP"
    }, {
      name: "Modèle",
      value: "modele"
    }];
  } else if (value === "CDP") {

    return [{
      name: "Horaire",
      value: "CDPH"
    }, {
      name: "Quotidien",
      value: "CDPQ"
    }];
  } else if (value === "modele") {

    return [{
      name: "Arpège",
      value: "arpege"
    }, {
      name: "CEP",
      value: "cep"
    }];
  } else {

    return [{
      name: "J+1",
      value: "J+1"
    }, {
      name: "J+2",
      value: "J+2"
    }, {
      name: "J+3",
      value: "J+3"
    }];
  }
}

function loadData(value, callback) {

  callback(null, simulateData(value));
}

var CascadeSelect = function (_Component) {
  _inherits(CascadeSelect, _Component);

  function CascadeSelect(props) {
    _classCallCheck(this, CascadeSelect);

    var _this = _possibleConstructorReturn(this, (CascadeSelect.__proto__ || Object.getPrototypeOf(CascadeSelect)).call(this, props));

    _this.state = { value: [] };

    _this.handleChange = _this.handleChange.bind(_this);

    return _this;
  }

  _createClass(CascadeSelect, [{
    key: "handleChange",
    value: function handleChange(value) {

      this.setState({ value: value });
    }
  }, {
    key: "render",
    value: function render() {

      return _react2.default.createElement(
        _rcCascadeSelect2.default,
        _extends({
          value: this.state.value,
          allText: "",
          onChange: this.handleChange
        }, this.props),
        _react2.default.createElement("select", { className: "form-control", key: "select1" }),
        _react2.default.createElement("select", { className: "form-control", key: "select2" }),
        _react2.default.createElement("select", { className: "form-control", key: "select3" })
      );
    }
  }]);

  return CascadeSelect;
}(_react.Component);

CascadeSelect.propTypes = { children: _react.PropTypes.node };

module.exports = {

  categ: "Form fields",

  construct: _rcCascadeSelect2.default,

  path: "rc-cascade-select",

  link: "http://react-component.github.io/cascade-select/",

  states: {

    default: function _default() {
      return _react2.default.createElement(CascadeSelect, { loader: loadData });
    }
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(simulateData, "simulateData", "src/components/CascadeSelect/descript.js");

  __REACT_HOT_LOADER__.register(loadData, "loadData", "src/components/CascadeSelect/descript.js");

  __REACT_HOT_LOADER__.register(CascadeSelect, "CascadeSelect", "src/components/CascadeSelect/descript.js");
}();

;