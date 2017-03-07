"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotifSystem = exports.removeNotification = exports.addNotification = exports.STATE_PROPERTY = exports.reducer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ducks = require("./ducks");

Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _ducks.reducer;
  }
});
Object.defineProperty(exports, "STATE_PROPERTY", {
  enumerable: true,
  get: function get() {
    return _ducks.STATE_PROPERTY;
  }
});
Object.defineProperty(exports, "addNotification", {
  enumerable: true,
  get: function get() {
    return _ducks.addNotification;
  }
});
Object.defineProperty(exports, "removeNotification", {
  enumerable: true,
  get: function get() {
    return _ducks.removeNotification;
  }
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNotificationSystem = require("react-notification-system");

var _reactNotificationSystem2 = _interopRequireDefault(_reactNotificationSystem);

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotifSystem = exports.NotifSystem = function (_Component) {
  _inherits(NotifSystem, _Component);

  function NotifSystem() {
    _classCallCheck(this, NotifSystem);

    return _possibleConstructorReturn(this, (NotifSystem.__proto__ || Object.getPrototypeOf(NotifSystem)).apply(this, arguments));
  }

  _createClass(NotifSystem, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {

      var oldNotifs = prevProps.notifs;
      var notifs = this.props.notifs;

      for (var n in oldNotifs) {
        if (!(n in notifs)) this.system.removeNotification(n);
      }

      for (var _n in notifs) {
        if (!(_n in oldNotifs)) this.system.addNotification(notifs[_n]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_reactNotificationSystem2.default, { ref: function ref(elmt) {
          return _this2.system = elmt;
        } });
    }
  }]);

  return NotifSystem;
}(_react.Component);

NotifSystem.propTypes = { notifs: _react.PropTypes.object };

function mapStateToProps(state) {

  var notifs = state[_ducks.STATE_PROPERTY];

  return { notifs: notifs };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(NotifSystem);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NotifSystem, "NotifSystem", "src/components/NotifSystem/index.js");

  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "src/components/NotifSystem/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/NotifSystem/index.js");
}();

;