"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _rcTreeSelect = require("rc-tree-select");

var _rcTreeSelect2 = _interopRequireDefault(_rcTreeSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function buildEchs() {
  for (var _len = arguments.length, echs = Array(_len), _key = 0; _key < _len; _key++) {
    echs[_key] = arguments[_key];
  }

  return echs.map(function (ech) {

    var jech = "J+" + ech;

    return {
      label: jech,
      value: jech,
      key: jech
    };
  });
}

var treeData = [{
  label: "CDP",
  value: "CDP",
  key: "CDP",
  children: [{
    label: "horaire",
    value: "CDPH",
    key: "CDPH",
    children: buildEchs(1, 2, 3)
  }, {
    label: "quotidien",
    value: "CDPQ",
    key: "CDPQ",
    children: buildEchs(1, 2, 3)
  }]
}, {
  label: "Modèle",
  value: "modele",
  key: "modele",
  children: [{
    label: "Arpège",
    value: "arpege",
    key: "arpege",
    children: buildEchs(1, 2, 3)
  }, {
    label: "CEP",
    value: "cep",
    key: "cep",
    children: buildEchs(1, 2, 3)
  }]
}];

var TreeSelect = function (_React$Component) {
  _inherits(TreeSelect, _React$Component);

  function TreeSelect(props) {
    _classCallCheck(this, TreeSelect);

    var _this = _possibleConstructorReturn(this, (TreeSelect.__proto__ || Object.getPrototypeOf(TreeSelect)).call(this, props));

    _this.state = { value: null };

    _this.handleChange = _this.handleChange.bind(_this);

    return _this;
  }

  _createClass(TreeSelect, [{
    key: "handleChange",
    value: function handleChange(value) {

      this.setState({ value: value });
    }
  }, {
    key: "render",
    value: function render() {

      return _react2.default.createElement(_rcTreeSelect2.default, _extends({ style: { width: 300 },
        value: this.state.value,
        onChange: this.handleChange
      }, this.props));
    }
  }]);

  return TreeSelect;
}(_react2.default.Component);

var _default2 = TreeSelect;
exports.default = _default2;


_rcTreeSelect2.default.displayName = "TreeSelect";

module.exports = {

  categ: "Form fields",

  construct: _rcTreeSelect2.default,

  path: "rc-tree-select",

  link: "http://react-component.github.io/tree-select/",

  states: { default: function _default() {
      return _react2.default.createElement(TreeSelect, { treeData: treeData });
    } }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(buildEchs, "buildEchs", "src/components/TreeSelect/descript.js");

  __REACT_HOT_LOADER__.register(treeData, "treeData", "src/components/TreeSelect/descript.js");

  __REACT_HOT_LOADER__.register(TreeSelect, "TreeSelect", "src/components/TreeSelect/descript.js");

  __REACT_HOT_LOADER__.register(_default2, "default", "src/components/TreeSelect/descript.js");
}();

;