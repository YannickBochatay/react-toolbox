"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _throttle = require("lodash/throttle");

var _throttle2 = _interopRequireDefault(_throttle);

var _Nav = require("react-bootstrap/lib/Nav");

var _Nav2 = _interopRequireDefault(_Nav);

var _Glyphicon = require("react-bootstrap/lib/Glyphicon");

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _NavDropdown = require("react-bootstrap/lib/NavDropdown");

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = { kebab: { paddingRight: 120 } };

var RugMenu = function (_Component) {
  _inherits(RugMenu, _Component);

  function RugMenu(props) {
    _classCallCheck(this, RugMenu);

    var _this = _possibleConstructorReturn(this, (RugMenu.__proto__ || Object.getPrototypeOf(RugMenu)).call(this, props));

    _this.state = {
      menuContainerWidth: null,
      elementWidths: null
    };

    _this.onResize = (0, _throttle2.default)(_this.setMenuContainerWidth.bind(_this), 200, { leading: false });

    return _this;
  }

  _createClass(RugMenu, [{
    key: "getMenuContainerWidth",
    value: function getMenuContainerWidth() {

      var parent = _reactDom2.default.findDOMNode(this).parentElement;

      var style = window.getComputedStyle(parent, null);

      var width = Math.floor(parseFloat(style.getPropertyValue("width")));

      var kebabRef = this.kebabMenu;

      return width - (kebabRef ? _reactDom2.default.findDOMNode(kebabRef).offsetWidth : 0);
    }
  }, {
    key: "setMenuContainerWidth",
    value: function setMenuContainerWidth() {

      this.setState({ menuContainerWidth: this.getMenuContainerWidth() });
    }
  }, {
    key: "getElementWidths",
    value: function getElementWidths() {

      var domNode = _reactDom2.default.findDOMNode(this);

      return Array.prototype.map.call(domNode.children, function (child) {
        return child.offsetWidth;
      });
    }
  }, {
    key: "setElementWidths",
    value: function setElementWidths() {

      this.setState({ elementWidths: this.getElementWidths() });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      window.addEventListener("resize", this.onResize, false);

      this.setMenuContainerWidth();

      if (this.props.children.length) this.setElementWidths();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {

      var prevNbItems = prevProps.children.length;
      var nbItems = this.props.children.length;
      var prevWidth = this.state.menuContainerWidth;
      var width = this.getMenuContainerWidth();

      if (prevNbItems !== nbItems) this.setElementWidths();
      if (prevWidth !== width) this.setMenuContainerWidth();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      window.removeEventListener("resize", this.onResize, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          menuContainerWidth = _state.menuContainerWidth,
          elementWidths = _state.elementWidths;

      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ["children"]);

      var menuItems = [];
      var kebabMenuItems = [];
      var kebabMenu = null;

      if (elementWidths) {

        var accWidth = 0;

        _react2.default.Children.map(children, function (element, index) {

          if (_react2.default.isValidElement(element)) {

            var copy = _react2.default.cloneElement(element, { key: "__" + index });

            if ((accWidth += elementWidths[index]) <= menuContainerWidth) {

              menuItems.push(copy);
            } else kebabMenuItems.push(copy);
          }

          if (kebabMenuItems.length) {

            kebabMenu = _react2.default.createElement(
              _NavDropdown2.default,
              {
                ref: function ref(node) {
                  return _this2.kebabMenu = node;
                },
                title: _react2.default.createElement(_Glyphicon2.default, { glyph: "option-vertical" }),
                id: "nav-dropdown",
                style: styles,
                noCaret: true
              },
              kebabMenuItems
            );
          } else _this2.kebabMenu = null;
        });
      } else menuItems = children;

      return _react2.default.createElement(
        _Nav2.default,
        _extends({
          bsStyle: "tabs"
        }, rest),
        menuItems,
        kebabMenu
      );
    }
  }]);

  return RugMenu;
}(_react.Component);

var _default = RugMenu;
exports.default = _default;


RugMenu.propTypes = { children: _react.PropTypes.node };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, "styles", "src/components/RugMenu/index.js");

  __REACT_HOT_LOADER__.register(RugMenu, "RugMenu", "src/components/RugMenu/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/RugMenu/index.js");
}();

;