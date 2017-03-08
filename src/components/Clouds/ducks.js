export const STATE_PROPERTY = "clouds"

const LAUNCH_ANIMATION = STATE_PROPERTY + "/LAUNCH_ANIMATION"
const STOP_ANIMATION = STATE_PROPERTY + "/STOP_ANIMATION"
const TOGGLE_ANIMATION = STATE_PROPERTY + "/TOGGLE_ANIMATION"
const HIDE = STATE_PROPERTY + "/HIDE"
const SHOW = STATE_PROPERTY + "/SHOW"
const TOGGLE = STATE_PROPERTY + "/TOGGLE"

const initialState = { display : false, animate : false }

export function reducer(state = initialState, action) {

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

export const launchCloudsAnimation = () => ({ type : LAUNCH_ANIMATION })

export const toggleCloudsAnimation = () => ({ type : TOGGLE_ANIMATION })

export const showClouds = () => ({ type : SHOW })

export const hideClouds = () => ({ type : HIDE })

export const toggleClouds = () => ({ type : TOGGLE })
