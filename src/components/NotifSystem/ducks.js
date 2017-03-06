import Immutable from "immutable"

export const STATE_PROPERTY = "notifications"

const ADD = STATE_PROPERTY + "/ADD_NOTIFICATION"
const REMOVE = STATE_PROPERTY + "/REMOVE_NOTIFICATION"

export const reducer = (state = {}, action) => {

  const immutableState = Immutable.fromJS(state)

  switch (action.type) {

  case ADD :

    return immutableState.merge({ [action.uid] : action.props }).toJS()

  case REMOVE :

    return immutableState.delete(String(action.index)).toJS()

  default :

    return state

  }

}

let uid = 0

export function addNotification(properties) {

  uid++

  return {
    type : ADD,
    props : { uid, ...properties },
    uid
  }

}

export function removeNotification(index) {

  return {
    type : REMOVE,
    index
  }

}
