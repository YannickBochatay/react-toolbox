"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _Collapse = require("react-bootstrap/lib/Collapse");

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Intl = require("../../Intl");

var _Intl2 = _interopRequireDefault(_Intl);

var _Chevron = require("../Chevron");

var _Chevron2 = _interopRequireDefault(_Chevron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {

  link: {
    display: "flex",
    padding: 10,
    alignItems: "center",
    textDecoration: "none"
  },

  light: { color: "#333" },

  lightHover: {
    color: "#333",
    backgroundColor: "#F5F5F5",
    textDecoration: "none"
  },

  dark: { color: "rgba(163,175,183,.9)" },

  darkHover: {
    color: "rgba(255,255,255,.8)",
    backgroundColor: "#364248",
    textDecoration: "none"
  },

  li: {
    margin: 0,
    padding: 0
  },

  icon: {
    width: 20,
    textAlign: "left"
  },

  label: { flex: 1 }
};

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this.state = {
      collapsed: true,
      hover: false
    };

    _this.toggle = _this.toggle.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleMouseOver = _this.handleMouseOver.bind(_this);
    _this.handleMouseOut = _this.handleMouseOut.bind(_this);

    return _this;
  }

  _createClass(Item, [{
    key: "handleMouseOver",
    value: function handleMouseOver() {

      this.setState({ hover: true });
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {

      this.setState({ hover: false });
    }
  }, {
    key: "toggle",
    value: function toggle() {

      this.setState({ collapsed: !this.state.collapsed });
    }
  }, {
    key: "show",
    value: function show() {

      this.setState({ collapsed: false });
    }
  }, {
    key: "hide",
    value: function hide() {

      this.setState({ collapsed: true });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {

      if (this.props.collapsed !== this.state.collapsed) this.toggle();
    }
  }, {
    key: "createCollapse",
    value: function createCollapse() {
      var collapsed = this.state.collapsed;


      return _react2.default.createElement(
        _Collapse2.default,
        { "in": !collapsed },
        this.props.children
      );
    }
  }, {
    key: "createLabel",
    value: function createLabel() {

      return _react2.default.createElement(_Intl2.default, {
        text: this.props.label,
        ucfirst: true,
        style: styles.label
      });
    }
  }, {
    key: "createSpanIcon",
    value: function createSpanIcon() {
      var icon = this.props.icon;


      if (icon && (typeof icon === "undefined" ? "undefined" : _typeof(icon)) === "object") {

        return _react2.default.cloneElement(icon, { style: _extends({}, styles.icon, icon.props.style) });
      } else return _react2.default.createElement(
        "span",
        { style: styles.icon },
        icon
      );
    }
  }, {
    key: "createChevron",
    value: function createChevron() {
      var collapsed = this.state.collapsed;


      return _react2.default.createElement(_Chevron2.default, { collapsed: collapsed });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _props = this.props,
          onClick = _props.onClick,
          collapsible = _props.collapsible;


      if (collapsible) this.toggle();

      if (onClick) onClick();
    }
  }, {
    key: "getStyleLink",
    value: function getStyleLink() {
      var dark = this.props.dark;
      var hover = this.state.hover;


      return _extends({}, styles.link, styles[(dark ? "dark" : "light") + (hover ? "Hover" : "")]);
    }
  }, {
    key: "createLink",
    value: function createLink() {
      var _props2 = this.props,
          link = _props2.link,
          onClick = _props2.onClick;

      var spanIcon = this.createSpanIcon();
      var label = this.createLabel();

      if (link) {

        if (link.indexOf("http") === 0) {

          return _react2.default.createElement(
            "a",
            { href: link, onClick: onClick, style: this.getStyleLink() },
            spanIcon,
            " ",
            label
          );
        } else {

          return _react2.default.createElement(
            _reactRouter.Link,
            { to: link, style: this.getStyleLink(), onClick: onClick },
            spanIcon,
            " ",
            label
          );
        }
      } else {

        return _react2.default.createElement(
          "span",
          { role: "button", style: this.getStyleLink(), onClick: this.handleClick },
          spanIcon,
          " ",
          label
        );
      }
    }
  }, {
    key: "createCollapseLink",
    value: function createCollapseLink() {
      var link = this.props.link;

      var chevron = this.createChevron();
      var spanIcon = this.createSpanIcon();
      var label = this.createLabel();

      if (link) {

        if (link.indexOf("http") === 0) {

          return _react2.default.createElement(
            "a",
            { href: link, onClick: this.handleClick, style: this.getStyleLink() },
            spanIcon,
            " ",
            label,
            " ",
            chevron
          );
        } else {

          return _react2.default.createElement(
            _reactRouter.Link,
            { to: link, onClick: this.handleClick, style: this.getStyleLink() },
            spanIcon,
            " ",
            label,
            " ",
            chevron
          );
        }
      } else {

        return _react2.default.createElement(
          "span",
          { role: "button", onClick: this.handleClick, style: this.getStyleLink() },
          spanIcon,
          " ",
          label,
          " ",
          chevron
        );
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      this.node.addEventListener("mouseover", this.handleMouseOver);
      this.node.addEventListener("mouseout", this.handleMouseOut);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      this.node.removeEventListener("mouseover", this.handleMouseOver);
      this.node.removeEventListener("mouseout", this.handleMouseOut);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var link = void 0,
          collapse = void 0;

      if (this.props.collapsible) {

        link = this.createCollapseLink();
        collapse = this.createCollapse();
      } else {

        link = this.createLink();
        collapse = null;
      }

      return _react2.default.createElement(
        "li",
        { style: styles.li, ref: function ref(node) {
            return _this2.node = node;
          } },
        link,
        collapse
      );
    }
  }]);

  return Item;
}(_react.Component);

var _default = Item;
exports.default = _default;


Item.propTypes = {
  onClick: _react.PropTypes.func,
  link: _react.PropTypes.string,
  label: _react.PropTypes.string,
  icon: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
  collapsed: _react.PropTypes.bool,
  collapsible: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  dark: _react.PropTypes.bool,
  className: _react.PropTypes.string
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, "styles", "src/components/TreeMenu/Item/index.js");

  __REACT_HOT_LOADER__.register(Item, "Item", "src/components/TreeMenu/Item/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/TreeMenu/Item/index.js");
}();

;