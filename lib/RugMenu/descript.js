"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _NavItem = require("react-bootstrap/lib/NavItem");

var _NavItem2 = _interopRequireDefault(_NavItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "Presentation",

  construct: _2.default,

  states: {

    default: function _default() {
      return _react2.default.createElement(
        _2.default,
        null,
        _react2.default.createElement(
          _NavItem2.default,
          { eventKey: 1, title: "home" },
          "NavItem 1 content"
        ),
        _react2.default.createElement(
          _NavItem2.default,
          { eventKey: 2, title: "Item" },
          "NavItem 2 content"
        ),
        _react2.default.createElement(
          _NavItem2.default,
          { eventKey: 3, disabled: true },
          "NavItem 3 content"
        ),
        _react2.default.createElement(
          _NavItem2.default,
          { eventKey: 4, title: "home" },
          "NavItem 4 content"
        ),
        _react2.default.createElement(
          _NavItem2.default,
          { eventKey: 5, title: "Item" },
          "NavItem 5 content"
        ),
        _react2.default.createElement(
          _NavItem2.default,
          { eventKey: 6, disabled: true },
          "NavItem 6 content"
        ),
        _react2.default.createElement(
          _NavItem2.default,
          { eventKey: 7, title: "home" },
          "NavItem 7 content"
        ),
        _react2.default.createElement(
          _NavItem2.default,
          { eventKey: 8, title: "Item" },
          "NavItem 8 content"
        ),
        _react2.default.createElement(
          _NavItem2.default,
          { eventKey: 8, disabled: true },
          "NavItem 9 content"
        )
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