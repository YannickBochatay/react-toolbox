"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _ducks = require("./ducks");

var _store = require("store");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notif = function (_Component) {
  _inherits(Notif, _Component);

  function Notif() {
    _classCallCheck(this, Notif);

    return _possibleConstructorReturn(this, (Notif.__proto__ || Object.getPrototypeOf(Notif)).apply(this, arguments));
  }

  _createClass(Notif, [{
    key: "showNotif",
    value: function showNotif() {
      var _this2 = this;

      if (this.uid) return;

      var notifAction = (0, _ducks.addNotification)(_extends({
        message: String(this.props.children),
        autoDismiss: false
      }, this.props, {
        onRemove: function onRemove() {

          _this2.uid = null;
          if (_this2.props.onRemove) _this2.props.onRemove();
        }
      }));

      this.uid = notifAction.uid;

      _store.store.dispatch(notifAction);
    }
  }, {
    key: "hideNotif",
    value: function hideNotif() {

      if (this.uid) {

        _store.store.dispatch((0, _ducks.removeNotification)(this.uid));
        this.uid = null;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      this.showNotif();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      this.hideNotif();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {

      this.showNotif();
    }
  }, {
    key: "render",
    value: function render() {

      return null;
    }
  }]);

  return Notif;
}(_react.Component);

var _default = Notif;
exports.default = _default;


Notif.propTypes = {
  title: _react.PropTypes.string,
  message: _react.PropTypes.string,
  level: _react.PropTypes.oneOf(["success", "error", "warning", "info"]),
  position: _react.PropTypes.oneOf(["tr", "tl", "tc", "br", "bl", "bc"]),
  autoDismiss: _react.PropTypes.number,
  dismissible: _react.PropTypes.bool,
  action: _react.PropTypes.object,
  children: _react.PropTypes.string,
  onAdd: _react.PropTypes.func,
  onRemove: _react.PropTypes.func
};

Notif.defaultProps = { level: "success" };
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Notif, "Notif", "src/components/NotifSystem/Notif.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/NotifSystem/Notif.js");
}();

;