import Immutable from "immutable"

export const STATE_PROPERTY = "components/date/edit/"

const SET_DATE = STATE_PROPERTY + "/SET_DATE"
const SET_HOUR = STATE_PROPERTY + "/SET_HOUR"
const SET_MINUTE = STATE_PROPERTY + "/SET_MINUTE"
const SET_INTERVAL = STATE_PROPERTY + "/SET_INTERVAL"
const SET_TIMEZONE = STATE_PROPERTY + "/SET_TIMEZONE"
const SET_FORMAT = STATE_PROPERTY + "/SET_FORMAT"


const initialState = {
  set : {
    hour : null,
    minute : null
  },
  interval : { days : null },
  timezone : "GMT",
  format : "DD/MM/YYYY HH:mm:ss"
}

export function reducer(state = initialState, action) {

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


export const setDate = date => ({ type : SET_DATE, date })

export const setHour = hour => ({ type : SET_HOUR, hour })

export const setMinute = minute => ({ type : SET_MINUTE, minute })

export const setInterval = days => ({ type : SET_INTERVAL, days })

export const setTimezone = timezone => ({ type : SET_TIMEZONE, timezone })

export const setFormat = format => ({ type : SET_FORMAT, format })
