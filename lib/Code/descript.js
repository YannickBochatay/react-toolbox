"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "UI Components",

  construct: _2.default,

  descript: "Coloration syntaxique de code",

  externalLink: "https://github.com/conorhastings/react-syntax-highlighter",

  states: {

    default: function _default() {
      return _react2.default.createElement(
        _2.default,
        null,
        "const Toto = (props) => <div>Toto</div>"
      );
    },

    python: function python() {
      return _react2.default.createElement(
        _2.default,
        { language: "python" },
        "def toto():\n  return \"Toto\""
      );
    }

  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;