"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.reducer = reducer;
var STATE_PROPERTY = exports.STATE_PROPERTY = "clouds";

var LAUNCH_ANIMATION = STATE_PROPERTY + "/LAUNCH_ANIMATION";
var STOP_ANIMATION = STATE_PROPERTY + "/STOP_ANIMATION";
var TOGGLE_ANIMATION = STATE_PROPERTY + "/TOGGLE_ANIMATION";
var HIDE = STATE_PROPERTY + "/HIDE";
var SHOW = STATE_PROPERTY + "/SHOW";
var TOGGLE = STATE_PROPERTY + "/TOGGLE";

var initialState = { display: false, animate: false };

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case LAUNCH_ANIMATION:

      return _extends({}, state, { animate: true });

    case STOP_ANIMATION:

      return _extends({}, state, { animate: false });

    case TOGGLE_ANIMATION:

      return _extends({}, state, { animate: !state.animate });

    case SHOW:

      return _extends({}, state, { display: true });

    case HIDE:

      return _extends({}, state, { display: false });

    case TOGGLE:

      return _extends({}, state, { display: !state.display });

    default:

      return state;
  }
}

var launchCloudsAnimation = exports.launchCloudsAnimation = function launchCloudsAnimation() {
  return { type: LAUNCH_ANIMATION };
};

var toggleCloudsAnimation = exports.toggleCloudsAnimation = function toggleCloudsAnimation() {
  return { type: TOGGLE_ANIMATION };
};

var showClouds = exports.showClouds = function showClouds() {
  return { type: SHOW };
};

var hideClouds = exports.hideClouds = function hideClouds() {
  return { type: HIDE };
};

var toggleClouds = exports.toggleClouds = function toggleClouds() {
  return { type: TOGGLE };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(STATE_PROPERTY, "STATE_PROPERTY", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(LAUNCH_ANIMATION, "LAUNCH_ANIMATION", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(STOP_ANIMATION, "STOP_ANIMATION", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(TOGGLE_ANIMATION, "TOGGLE_ANIMATION", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(HIDE, "HIDE", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(SHOW, "SHOW", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(TOGGLE, "TOGGLE", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(initialState, "initialState", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(reducer, "reducer", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(launchCloudsAnimation, "launchCloudsAnimation", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(toggleCloudsAnimation, "toggleCloudsAnimation", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(showClouds, "showClouds", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(hideClouds, "hideClouds", "src/components/Clouds/ducks.js");

  __REACT_HOT_LOADER__.register(toggleClouds, "toggleClouds", "src/components/Clouds/ducks.js");
}();

;