"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openDrawer = openDrawer;
exports.closeDrawer = closeDrawer;
exports.toggleDrawer = toggleDrawer;
var STATE_PROPERTY = exports.STATE_PROPERTY = "mainDrawer";

var OPEN = STATE_PROPERTY + "/OPEN";
var CLOSE = STATE_PROPERTY + "/CLOSE";
var TOGGLE = STATE_PROPERTY + "/TOGGLE";

var initialState = { isOpen: false };

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case OPEN:

      return { isOpen: true };

    case CLOSE:

      return { isOpen: false };

    case TOGGLE:

      return { isOpen: !state.isOpen };

    default:

      return state;

  }
}

var _default = reducer;
exports.default = _default;
function openDrawer() {

  return { type: OPEN };
}

function closeDrawer() {

  return { type: CLOSE };
}

function toggleDrawer() {

  return { type: TOGGLE };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(STATE_PROPERTY, "STATE_PROPERTY", "src/components/Drawer/ducks.js");

  __REACT_HOT_LOADER__.register(OPEN, "OPEN", "src/components/Drawer/ducks.js");

  __REACT_HOT_LOADER__.register(CLOSE, "CLOSE", "src/components/Drawer/ducks.js");

  __REACT_HOT_LOADER__.register(TOGGLE, "TOGGLE", "src/components/Drawer/ducks.js");

  __REACT_HOT_LOADER__.register(initialState, "initialState", "src/components/Drawer/ducks.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "src/components/Drawer/ducks.js");

  __REACT_HOT_LOADER__.register(openDrawer, "openDrawer", "src/components/Drawer/ducks.js");

  __REACT_HOT_LOADER__.register(closeDrawer, "closeDrawer", "src/components/Drawer/ducks.js");

  __REACT_HOT_LOADER__.register(toggleDrawer, "toggleDrawer", "src/components/Drawer/ducks.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Drawer/ducks.js");
}();

;