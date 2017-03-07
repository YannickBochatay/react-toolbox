"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.BreadCrumb = BreadCrumb;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BreadCrumb(props) {

  var rest = _extends({}, props);

  for (var n in this.constructor.propTypes) {
    delete rest[n];
  }var elmts = props.path.split(/\//);

  if (elmts[0] === "#") elmts.splice(0, 1);

  var path = "";

  return _react2.default.createElement(
    "ol",
    _extends({}, rest, { className: "breadcrumb " + props.className }),
    elmts.map(function (elmt, i) {
      return _react2.default.createElement(
        "li",
        { key: i },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: path += "/" + elmt },
          elmt
        )
      );
    })
  );
}

BreadCrumb.propTypes = {
  path: _react.PropTypes.string.isRequired,
  className: _react.PropTypes.string
};

function mapStateToProps(state) {

  var data = state.routing;

  return { path: data && data.locationBeforeTransitions.pathname };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(BreadCrumb);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BreadCrumb, "BreadCrumb", "src/components/BreadCrumb/index.js");

  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "src/components/BreadCrumb/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/BreadCrumb/index.js");
}();

;