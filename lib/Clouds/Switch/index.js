"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _rcSwitch = require("rc-switch");

var _rcSwitch2 = _interopRequireDefault(_rcSwitch);

var _ducks = require("../ducks");

var _Intl = require("components/Intl");

var _Intl2 = _interopRequireDefault(_Intl);

var _style = require("./style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SwitchClouds = function SwitchClouds(_ref) {
  var onChange = _ref.onChange,
      checked = _ref.checked,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["onChange", "checked", "className"]);

  delete rest.dispatch;

  return _react2.default.createElement(
    "div",
    _extends({}, rest, { className: _style2.default.div + (className ? " " + className : "") }),
    _react2.default.createElement(_rcSwitch2.default, {
      onChange: onChange,
      checked: checked,
      title: "Animation des nuages",
      className: _style2.default.switch
    }),
    _react2.default.createElement(
      _Intl2.default,
      { ucfirst: true },
      "clouds animation"
    )
  );
};

SwitchClouds.propTypes = {
  onChange: _react.PropTypes.func,
  checked: _react.PropTypes.bool,
  className: _react.PropTypes.string
};

var mapStateToProps = function mapStateToProps(state) {
  return { checked: state[_ducks.STATE_PROPERTY] && state[_ducks.STATE_PROPERTY].display };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { onChange: function onChange() {
      return dispatch((0, _ducks.toggleClouds)());
    } };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SwitchClouds);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SwitchClouds, "SwitchClouds", "src/components/Clouds/Switch/index.js");

  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "src/components/Clouds/Switch/index.js");

  __REACT_HOT_LOADER__.register(mapDispatchToProps, "mapDispatchToProps", "src/components/Clouds/Switch/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Clouds/Switch/index.js");
}();

;