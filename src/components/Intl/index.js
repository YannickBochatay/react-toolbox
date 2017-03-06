import React, { PropTypes } from "react"
import { connect } from "react-redux"
import { ucfirst, lcfirst, ucwords } from "jsyg-strutils"
import { STATE_PROPERTY } from "./ducks"
export { STATE_PROPERTY, reducer, setLocale, getLocaleFromForage, logMissingMessages } from "./ducks"

export function Intl({ tag, message, ...rest }) {

  for (const n in Intl.propTypes) delete rest[n]

  delete rest.dispatch

  return React.createElement(tag, rest, message)

}

Intl.propTypes = {
  text : PropTypes.string,
  ucfirst : PropTypes.bool,
  lcfirst : PropTypes.bool,
  ucwords : PropTypes.bool,
  tag : PropTypes.string.isRequired,
  message : PropTypes.string
}

Intl.defaultProps = { tag : "span" }


function mapStateToProps(state, props) {

  let text = props.children || props.text

  if (typeof text !== "string") throw new Error("string is required (" + (typeof text) + " found)")

  text = text.toLowerCase()

  const intl = state[STATE_PROPERTY]

  let message = intl && intl.messages[text]

  if (!message) {
    if (intl && intl.log) console.warn(`"${text}" not found for locale ${intl.locale}`)
    message = text
  }

  if (props.ucfirst) message = ucfirst(message)
  if (props.lcfirst) message = lcfirst(message)
  if (props.ucwords) message = ucwords(message)

  return { message }

}

export default connect(mapStateToProps)(Intl)
