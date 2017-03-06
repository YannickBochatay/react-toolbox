import { injectReducers } from "store"

const LAUNCH_ANIMATION = "clouds/LAUNCH_ANIMATION"
const STOP_ANIMATION = "clouds/STOP_ANIMATION"
const TOGGLE_ANIMATION = "clouds/TOGGLE_ANIMATION"
const HIDE = "clouds/HIDE"
const SHOW = "clouds/SHOW"
const TOGGLE = "clouds/TOGGLE"

const initialState = { display : false, animate : false }

function reducer(state = initialState, action) {

  switch (action.type) {

  case LAUNCH_ANIMATION :

    return { ...state, animate : true }

  case STOP_ANIMATION :

    return { ...state, animate : false }

  case TOGGLE_ANIMATION :

    return { ...state, animate : !state.animate }

  case SHOW :

    return { ...state, display : true }

  case HIDE :

    return { ...state, display : false }

  case TOGGLE :

    return { ...state, display : !state.display }

  default :

    return state
  }

}

injectReducers({ clouds : reducer })

export default reducer

export function launchCloudsAnimation() {

  return { type : LAUNCH_ANIMATION }

}

export function stopCloudsAnimation() {

  return { type : STOP_ANIMATION }

}

export function toggleCloudsAnimation() {

  return { type : TOGGLE_ANIMATION }

}

export function showClouds() {

  return { type : SHOW }

}

export function hideClouds() {

  return { type : HIDE }

}

export function toggleClouds() {

  return { type : TOGGLE }

}
