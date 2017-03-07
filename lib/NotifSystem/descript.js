"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Notif = require("./Notif");

var _Notif2 = _interopRequireDefault(_Notif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "UI components",

  construct: _Notif2.default,

  descript: "Syst\xE8me de notifications. Pour une notification qui doit appara\xEEtre sur toutes les pages,\n              on peut utiliser l'action addNotification du store (fichier components/NotifSystem/ducks)",

  path: "components/NotifSystem/Notif",

  link: "https://github.com/igorprado/react-notification-system",

  states: {

    success: function success() {
      return _react2.default.createElement(
        _Notif2.default,
        { level: "success" },
        "Hello world"
      );
    },

    error: function error() {
      return _react2.default.createElement(
        _Notif2.default,
        { level: "error" },
        "Hello world"
      );
    },

    warning: function warning() {
      return _react2.default.createElement(
        _Notif2.default,
        { level: "warning" },
        "Hello world"
      );
    },

    info: function info() {
      return _react2.default.createElement(
        _Notif2.default,
        { level: "info" },
        "Hello world"
      );
    },

    topLeft: function topLeft() {
      return _react2.default.createElement(
        _Notif2.default,
        { position: "tl" },
        "Hello world"
      );
    },

    topCenter: function topCenter() {
      return _react2.default.createElement(
        _Notif2.default,
        { position: "tc" },
        "Hello world"
      );
    },

    bottomLeft: function bottomLeft() {
      return _react2.default.createElement(
        _Notif2.default,
        { position: "bl" },
        "Hello world"
      );
    },

    bottomCenter: function bottomCenter() {
      return _react2.default.createElement(
        _Notif2.default,
        { position: "bc" },
        "Hello world"
      );
    },

    bottomRight: function bottomRight() {
      return _react2.default.createElement(
        _Notif2.default,
        { position: "br" },
        "Hello world"
      );
    },

    multiple: function multiple() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _Notif2.default,
          { level: "success" },
          "Hello world"
        ),
        _react2.default.createElement(
          _Notif2.default,
          { level: "error" },
          "Hello world"
        ),
        _react2.default.createElement(
          _Notif2.default,
          { level: "warning" },
          "Hello world"
        ),
        _react2.default.createElement(
          _Notif2.default,
          { level: "info" },
          "Hello world"
        ),
        _react2.default.createElement(
          _Notif2.default,
          { position: "tl" },
          "Hello world"
        ),
        _react2.default.createElement(
          _Notif2.default,
          { position: "tc" },
          "Hello world"
        ),
        _react2.default.createElement(
          _Notif2.default,
          { position: "bl" },
          "Hello world"
        ),
        _react2.default.createElement(
          _Notif2.default,
          { position: "bc" },
          "Hello world"
        ),
        _react2.default.createElement(
          _Notif2.default,
          { position: "br" },
          "Hello world"
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