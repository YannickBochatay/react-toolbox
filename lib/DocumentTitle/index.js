"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentTitle = DocumentTitle;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _reactDocumentTitle = require("react-document-title");

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _ducks = require("components/Intl/ducks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixe = "react-toolbox ";

function DocumentTitle(_ref) {
  var translated = _ref.translated,
      children = _ref.children;


  return _react2.default.createElement(
    _reactDocumentTitle2.default,
    { title: prefixe + (translated ? " : " + translated : "") },
    children
  );
}

DocumentTitle.propTypes = {
  title: _react.PropTypes.string.isRequired,
  translated: _react.PropTypes.string,
  children: _react.PropTypes.node
};

function mapStateToProps(state, props) {

  var data = state[_ducks.STATE_PROPERTY];

  return { translated: data && data.messages[props.title.toLowerCase()] || props.title };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(DocumentTitle);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(prefixe, "prefixe", "src/components/DocumentTitle/index.js");

  __REACT_HOT_LOADER__.register(DocumentTitle, "DocumentTitle", "src/components/DocumentTitle/index.js");

  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "src/components/DocumentTitle/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/DocumentTitle/index.js");
}();

;