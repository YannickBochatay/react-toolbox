"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Item = require("./Item/");

var _Item2 = _interopRequireDefault(_Item);

var _style = require("./style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeMenu = function (_Component) {
  _inherits(TreeMenu, _Component);

  function TreeMenu(props) {
    _classCallCheck(this, TreeMenu);

    var _this = _possibleConstructorReturn(this, (TreeMenu.__proto__ || Object.getPrototypeOf(TreeMenu)).call(this, props));

    _this.renderItem = _this.renderItem.bind(_this);

    return _this;
  }

  _createClass(TreeMenu, [{
    key: "renderItem",
    value: function renderItem(item, i) {
      var link = item.link,
          label = item.label,
          icon = item.icon,
          collapsed = item.collapsed,
          items = item.items,
          onClick = item.onClick;
      var _props = this.props,
          dark = _props.dark,
          classItem = _props.classItem;


      if (items && items.length > 0) {

        return _react2.default.createElement(
          _Item2.default,
          { key: "item" + i,
            link: link,
            label: label,
            icon: icon,
            onClick: onClick,
            collapsed: collapsed,
            dark: dark,
            className: classItem,
            collapsible: true
          },
          _react2.default.createElement(
            "ul",
            { className: _style2.default.ul + " " + _style2.default.sub },
            items.map(this.renderItem)
          )
        );
      } else {

        return _react2.default.createElement(_Item2.default, {
          key: "item" + i,
          link: link,
          icon: icon,
          label: label,
          dark: dark,
          className: classItem,
          onClick: onClick
        });
      }
    }
  }, {
    key: "render",
    value: function render() {

      var htmlProps = _extends({}, this.props);

      for (var n in TreeMenu.propTypes) {
        delete htmlProps[n];
      }var className = _style2.default.ul;

      if (this.props.dark) className += " " + _style2.default.dark;

      if (this.props.className) className += " " + this.props.className;

      return _react2.default.createElement(
        "ul",
        _extends({}, htmlProps, { className: className }),
        this.props.items.map(this.renderItem)
      );
    }
  }]);

  return TreeMenu;
}(_react.Component);

var _default = TreeMenu;
exports.default = _default;


TreeMenu.propTypes = {
  style: _react.PropTypes.object,
  items: _react.PropTypes.array.isRequired,
  className: _react.PropTypes.string,
  classItem: _react.PropTypes.string,
  dark: _react.PropTypes.bool,
  uniqueItemShown: _react.PropTypes.bool
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TreeMenu, "TreeMenu", "src/components/TreeMenu/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/TreeMenu/index.js");
}();

;