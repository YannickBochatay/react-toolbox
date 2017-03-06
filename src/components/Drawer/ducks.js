export const STATE_PROPERTY = "mainDrawer"

const OPEN = STATE_PROPERTY + "/OPEN"
const CLOSE = STATE_PROPERTY + "/CLOSE"
const TOGGLE = STATE_PROPERTY + "/TOGGLE"


const initialState = { isOpen : false }

function reducer(state = initialState, action) {

  switch (action.type) {

  case OPEN :

    return { isOpen : true }

  case CLOSE :

    return { isOpen : false }

  case TOGGLE :

    return { isOpen : !state.isOpen }

  default :

    return state

  }

}

export default reducer


export function openDrawer() {

  return { type : OPEN }

}

export function closeDrawer() {

  return { type : CLOSE }

}

export function toggleDrawer() {

  return { type : TOGGLE }

}
