import localForage from "localforage"
import moment from "moment"

export const STATE_PROPERTY = "intl"

const SET_LOCALE = STATE_PROPERTY + "/SET_LOCALE"
const LOG_MISSING_MESSAGES = STATE_PROPERTY + "/LOG_MISSING_MESSAGES"

const FORAGE_NAME = STATE_PROPERTY + "/locale"


const initialState = {
  lang : null,
  locale : null,
  log : false,
  messages : {}
}

export function reducer(state = initialState, action) {

  switch (action.type) {

  case SET_LOCALE :

    return { ...action.data, log : state.log }

  case LOG_MISSING_MESSAGES :

    return { ...state, log : action.value }

  default:

    return state

  }

}


export const setLocale = locale => dispatch => {

  require.ensure([], require => {

    const messages = require("locale/" + locale)

    localForage.setItem(FORAGE_NAME, locale)

    moment.locale(locale)

    return dispatch({
      type : SET_LOCALE,
      data : {
        locale,
        messages
      }
    })

  })

}

export const getLocaleFromForage = () => dispatch => {

  localForage.getItem(FORAGE_NAME).then(locale => {

    if (locale) dispatch(setLocale(locale))
    else throw new Error(locale + " : unknown locale")

  })
  .catch(() => {

    dispatch(setLocale("fr"))

  })

}


export function logMissingMessages(value) {

  return {
    type : LOG_MISSING_MESSAGES,
    value : Boolean(value)
  }

}
