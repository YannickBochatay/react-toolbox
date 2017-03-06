import { injectReducers } from "store"
import Immutable from "immutable"

const prefixe = "components/date/edit/"

const SET_DATE = prefixe + "SET_DATE"
const SET_HOUR = prefixe + "SET_HOUR"
const SET_MINUTE = prefixe + "SET_MINUTE"
const SET_INTERVAL = prefixe + "SET_INTERVAL"
const SET_TIMEZONE = prefixe + "SET_TIMEZONE"
const SET_FORMAT = prefixe + "SET_FORMAT"


const initialState = {
  set : {
    hour : null,
    minute : null
  },
  interval : { days : null },
  timezone : "GMT",
  format : "DD/MM/YYYY HH:mm:ss"
}

function reducer(state = initialState, action) {

  const imState = Immutable.fromJS(state)

  switch (action.type) {

  case SET_DATE :

    return imState.mergeDeep(action.date).toJS()

  case SET_HOUR :

    return imState.mergeDeep({ set : { hour : action.hour } }).toJS()

  case SET_MINUTE :

    return imState.mergeDeep({ set : { minute : action.minute } }).toJS()

  case SET_INTERVAL :

    return imState.mergeDeep({ interval : { days : action.days } }).toJS()

  case SET_TIMEZONE :

    return imState.set("timezone", action.timezone).toJS()

  case SET_FORMAT :

    return imState.set("format", action.format).toJS()

  default :

    return state
  }

}

injectReducers({ dateComponent : reducer })

export default reducer


export const setDate = date => ({ type : SET_DATE, date })

export const setHour = hour => ({ type : SET_HOUR, hour })

export const setMinute = minute => ({ type : SET_MINUTE, minute })

export const setInterval = days => ({ type : SET_INTERVAL, days })

export const setTimezone = timezone => ({ type : SET_TIMEZONE, timezone })

export const setFormat = format => ({ type : SET_FORMAT, format })
