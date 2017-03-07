"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPane = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rcTabs = require("rc-tabs");

Object.defineProperty(exports, "TabPane", {
  enumerable: true,
  get: function get() {
    return _rcTabs.TabPane;
  }
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _TabContent = require("rc-tabs/lib/TabContent");

var _TabContent2 = _interopRequireDefault(_TabContent);

var _ScrollableInkTabBar = require("rc-tabs/lib/ScrollableInkTabBar");

var _ScrollableInkTabBar2 = _interopRequireDefault(_ScrollableInkTabBar);

require("rc-tabs/assets/index.css");

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = { activeKey: null };

    _this.handleChange = _this.handleChange.bind(_this);

    return _this;
  }

  _createClass(Tabs, [{
    key: "handleChange",
    value: function handleChange(activeKey) {

      this.changeTab(activeKey);

      if (this.props.onChange) this.props.onChange();
    }
  }, {
    key: "changeTab",
    value: function changeTab(activeKey) {

      this.setState({ activeKey: activeKey });
    }
  }, {
    key: "renderTabBar",
    value: function renderTabBar() {

      return _react2.default.createElement(_ScrollableInkTabBar2.default, null);
    }
  }, {
    key: "renderTabContent",
    value: function renderTabContent() {

      return _react2.default.createElement(_TabContent2.default, null);
    }
  }, {
    key: "render",
    value: function render() {

      return _react2.default.createElement(
        _rcTabs2.default,
        _extends({
          onChange: this.handleChange,
          renderTabBar: this.renderTabBar,
          renderTabContent: this.renderTabContent
        }, this.props),
        this.props.children
      );
    }
  }]);

  return Tabs;
}(_react.Component);

var _default = Tabs;
exports.default = _default;


Tabs.propTypes = {
  children: _react.PropTypes.node,
  onChange: _react.PropTypes.func,
  defaultActiveKey: _react.PropTypes.string
};

Tabs.defaultProps = { defaultActiveKey: 1 };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Tabs, "Tabs", "src/components/Tabs/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Tabs/index.js");
}();

;