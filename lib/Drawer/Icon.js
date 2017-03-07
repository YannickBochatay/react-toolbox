"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _Glyphicon = require("react-bootstrap/lib/Glyphicon");

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _ducks = require("./ducks");

var _ducks2 = require("components/Intl/ducks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = exports.Icon = function Icon(props) {
  return _react2.default.createElement(_Glyphicon2.default, _extends({}, props, { glyph: props.open ? "remove" : "menu-hamburger" }));
};

Icon.propTypes = {
  open: _react.PropTypes.bool,
  title: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};

function mapStateToProps(state) {

  return {
    open: state[_ducks.STATE_PROPERTY] && state[_ducks.STATE_PROPERTY].isOpen,
    title: state[_ducks2.STATE_PROPERTY] && state[_ducks2.STATE_PROPERTY].messages["show menu"] || "show menu"
  };
}

function mapDispatchToProps(dispatch) {

  return {
    onClick: function onClick(e) {

      e.preventDefault();
      dispatch((0, _ducks.toggleDrawer)());
    }
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Icon);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Icon, "Icon", "src/components/Drawer/Icon.js");

  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "src/components/Drawer/Icon.js");

  __REACT_HOT_LOADER__.register(mapDispatchToProps, "mapDispatchToProps", "src/components/Drawer/Icon.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Drawer/Icon.js");
}();

;