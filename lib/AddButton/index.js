"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("react-bootstrap/lib/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Glyphicon = require("react-bootstrap/lib/Glyphicon");

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _OverlayTrigger = require("react-bootstrap/lib/OverlayTrigger");

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

var _Tooltip = require("react-bootstrap/lib/Tooltip");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = {
  container: {
    borderRadius: "50%",
    boxShadow: "0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24)"
  },
  button: { borderRadius: "50%" },
  normal: { padding: "10px 15px" },
  small: { padding: "5px 9px" }
};

var AddButton = function AddButton(_ref) {
  var children = _ref.children,
      bsStyle = _ref.bsStyle,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["children", "bsStyle", "size"]);

  return _react2.default.createElement(
    "div",
    rest,
    _react2.default.createElement(
      _OverlayTrigger2.default,
      {
        placement: "bottom",
        delay: 200,
        overlay: _react2.default.createElement(
          _Tooltip2.default,
          { id: "tooltip" + Math.random() },
          children || "new"
        )
      },
      _react2.default.createElement(
        _Button2.default,
        { bsStyle: bsStyle || "danger", style: _extends({}, styles.button, styles[size]) },
        _react2.default.createElement(_Glyphicon2.default, { glyph: "plus" })
      )
    )
  );
};

AddButton.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  bsStyle: _react.PropTypes.oneOf(["default", "primary", "warning", "danger", "success"]),
  size: _react.PropTypes.oneOf(["normal", "small"])
};

AddButton.defaultProps = { size: "normal" };

var _default = AddButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, "styles", "src/components/AddButton/index.js");

  __REACT_HOT_LOADER__.register(AddButton, "AddButton", "src/components/AddButton/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/AddButton/index.js");
}();

;