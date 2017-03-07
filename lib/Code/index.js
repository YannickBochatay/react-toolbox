"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = Code;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSyntaxHighlighter = require("react-syntax-highlighter");

var _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);

var _docco = require("react-syntax-highlighter/dist/styles/docco");

var _docco2 = _interopRequireDefault(_docco);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Code(_ref) {
  var children = _ref.children,
      language = _ref.language;


  return _react2.default.createElement(
    _reactSyntaxHighlighter2.default,
    { language: language, style: _docco2.default },
    children
  );
}

Code.propTypes = {
  language: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.node
};

Code.defaultProps = { language: "jsx" };

var _default = Code;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Code, "Code", "src/components/Code/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Code/index.js");
}();

;