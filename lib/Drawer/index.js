"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drawer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _ducks = require("./ducks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  pageWrap: function pageWrap(isOpen, width, right) {

    var offset = (width + 50) * (right ? -1 : 1);
    var angle = 15 * (right ? 1 : -1);

    return {
      transform: isOpen ? "" : "translate3d(" + offset + "px, 0, 0) rotateY(" + angle + "deg) scale(0.8)",
      transformOrigin: right ? "100% 50%" : "0% 50%",
      transformStyle: "preserve-3d",
      transition: "all 0.5s"
    };
  },
  outerContainer: function outerContainer(isOpen) {

    return {
      perspective: "1500px",
      overflow: isOpen ? "" : "hidden"
    };
  },
  overlay: function overlay(isOpen) {

    return {
      position: "fixed",
      zIndex: 1,
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      background: "rgba(0, 0, 0, 0.3)",
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? "" : "translate3d(-100%, 0, 0)",
      transition: isOpen ? "opacity 0.3s" : "opacity 0.3s, transform 0s 0.3s"
    };
  },
  menuWrap: function menuWrap(isOpen, width, right) {

    var transform = void 0;

    if (isOpen) transform = "";else if (right) transform = "translate3d(100%, 0, 0)";else transform = "translate3d(-100%, 0, 0)";

    return {
      position: "fixed",
      top: 0,
      left: right ? "inherit" : 0,
      right: right ? 0 : "inherit",
      zIndex: 2,
      width: width,
      height: "100%",
      transform: transform,
      transition: "all 0.5s"
    };
  },
  menu: function menu() {

    return {
      height: "100%",
      boxSizing: "border-box"
    };
  }
};

var Drawer = exports.Drawer = function (_Component) {
  _inherits(Drawer, _Component);

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _this.listenForClose = _this.listenForClose.bind(_this);

    return _this;
  }

  _createClass(Drawer, [{
    key: "toggleMenu",
    value: function toggleMenu() {

      this.applyWrapperStyles();
    }

    // Applies component-specific styles to external wrapper elements.

  }, {
    key: "applyWrapperStyles",
    value: function applyWrapperStyles() {

      this.handleExternalWrapper(this.props.pageWrapId, styles.pageWrap, true);
      this.handleExternalWrapper(this.props.outerContainerId, styles.outerContainer, true);
    }

    // Removes component-specific styles applied to external wrapper elements.

  }, {
    key: "clearWrapperStyles",
    value: function clearWrapperStyles() {

      this.handleExternalWrapper(this.props.pageWrapId, styles.pageWrap, false);
      this.handleExternalWrapper(this.props.outerContainerId, styles.outerContainer, false);
    }

    // Sets or unsets styles on DOM elements outside the menu component.
    // This is necessary for correct page interaction with some of the menus.
    // Throws and returns if the required external elements don't exist,
    // which means any external page animations won't be applied.

  }, {
    key: "handleExternalWrapper",
    value: function handleExternalWrapper(id, wrapperStyles, set) {

      var html = document.querySelector("html");
      var body = document.querySelector("body");
      var wrapper = document.getElementById(id);

      if (!wrapper) {

        console.error("Element with ID '" + id + "' not found");

        return;
      }

      var builtStyles = wrapperStyles(this.props.isOpen, this.props.width, this.props.right);

      for (var prop in builtStyles) {

        if (builtStyles.hasOwnProperty(prop)) {

          wrapper.style[prop] = set ? builtStyles[prop] : "";
        }
      }

      // Prevent any horizontal scroll.
      [html, body].forEach(function (element) {

        element.style["overflow-x"] = set ? "hidden" : "";
      });
    }

    // Builds styles incrementally for a given element.

  }, {
    key: "getStyles",
    value: function getStyles(el, index) {

      return styles[el](this.props.isOpen, this.props.width, this.props.right, index + 1);
    }
  }, {
    key: "listenForClose",
    value: function listenForClose(e) {

      if (this.props.isOpen && (e.key === "Escape" || e.keyCode === 27)) {

        this.toggleMenu();
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {

      if (styles.pageWrap && !this.props.pageWrapId) {

        console.warn("No pageWrapId supplied");
      }

      if (styles.outerContainer && !this.props.outerContainerId) {

        console.warn("No outerContainerId supplied");
      }

      if (this.props.isOpen) this.toggleMenu();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      window.addEventListener("keydown", this.listenForClose, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      window.removeEventListener("keydown", this.listenForClose, false);
      this.clearWrapperStyles();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {

      if (typeof nextProps.isOpen === "boolean" && nextProps.isOpen !== this.props.isOpen) {

        this.toggleMenu(nextProps.isOpen);
      }
    }
  }, {
    key: "render",
    value: function render() {

      var overlay = void 0;

      if (!this.props.noOverlay) {

        overlay = _react2.default.createElement("div", {
          className: "bm-overlay",
          onClick: this.props.onClickOverlay,
          style: this.getStyles("overlay")
        });
      }

      return _react2.default.createElement(
        "div",
        null,
        overlay,
        _react2.default.createElement(
          "div",
          { id: this.props.id, className: "bm-menu-wrap", style: this.getStyles("menuWrap") },
          _react2.default.createElement(
            "div",
            { className: "bm-menu", style: Object.assign(this.getStyles("menu"), this.props.style) },
            this.props.children
          )
        )
      );
    }
  }]);

  return Drawer;
}(_react.Component);

Drawer.propTypes = {
  id: _react.PropTypes.string,
  isOpen: _react.PropTypes.bool,
  noOverlay: _react.PropTypes.bool,
  outerContainerId: _react.PropTypes.string,
  pageWrapId: _react.PropTypes.string,
  right: _react.PropTypes.bool,
  width: _react.PropTypes.number,
  onClickOverlay: _react.PropTypes.func,
  children: _react.PropTypes.node,
  style: _react.PropTypes.object
};

Drawer.defaultProps = {
  id: "",
  noOverlay: false,
  outerContainerId: "",
  pageWrapId: "",
  width: 250
};

function mapStateToProps(state) {

  var data = state[_ducks.STATE_PROPERTY];

  return { isOpen: data && data.isOpen };
}

function mapDispatchToProps(dispatch) {

  return {
    onClickOverlay: function onClickOverlay() {
      dispatch((0, _ducks.closeDrawer)());
    }
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Drawer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, "styles", "src/components/Drawer/index.js");

  __REACT_HOT_LOADER__.register(Drawer, "Drawer", "src/components/Drawer/index.js");

  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "src/components/Drawer/index.js");

  __REACT_HOT_LOADER__.register(mapDispatchToProps, "mapDispatchToProps", "src/components/Drawer/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Drawer/index.js");
}();

;