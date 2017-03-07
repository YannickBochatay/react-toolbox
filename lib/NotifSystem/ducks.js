"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.STATE_PROPERTY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addNotification = addNotification;
exports.removeNotification = removeNotification;

var _immutable = require("immutable");

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var STATE_PROPERTY = exports.STATE_PROPERTY = "notifications";

var ADD = STATE_PROPERTY + "/ADD_NOTIFICATION";
var REMOVE = STATE_PROPERTY + "/REMOVE_NOTIFICATION";

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];


  var immutableState = _immutable2.default.fromJS(state);

  switch (action.type) {

    case ADD:

      return immutableState.merge(_defineProperty({}, action.uid, action.props)).toJS();

    case REMOVE:

      return immutableState.delete(String(action.index)).toJS();

    default:

      return state;

  }
};

var uid = 0;

function addNotification(properties) {

  uid++;

  return {
    type: ADD,
    props: _extends({ uid: uid }, properties),
    uid: uid
  };
}

function removeNotification(index) {

  return {
    type: REMOVE,
    index: index
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(STATE_PROPERTY, "STATE_PROPERTY", "src/components/NotifSystem/ducks.js");

  __REACT_HOT_LOADER__.register(ADD, "ADD", "src/components/NotifSystem/ducks.js");

  __REACT_HOT_LOADER__.register(REMOVE, "REMOVE", "src/components/NotifSystem/ducks.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "src/components/NotifSystem/ducks.js");

  __REACT_HOT_LOADER__.register(uid, "uid", "src/components/NotifSystem/ducks.js");

  __REACT_HOT_LOADER__.register(addNotification, "addNotification", "src/components/NotifSystem/ducks.js");

  __REACT_HOT_LOADER__.register(removeNotification, "removeNotification", "src/components/NotifSystem/ducks.js");
}();

;