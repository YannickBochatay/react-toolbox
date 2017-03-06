import React, { PropTypes } from "react"
import { connect } from "react-redux"
import DocTitle from "react-document-title"
import { STATE_PROPERTY as INTL_PROPERTY } from "components/Intl/ducks"

const prefixe = "Métronome "

export function DocumentTitle({ translated, children }) {

  return (
    <DocTitle title={ prefixe + (translated ? " : " + translated : "") }>
      { children }
    </DocTitle>
  )

}

DocumentTitle.propTypes = {
  title : PropTypes.string.isRequired,
  translated : PropTypes.string,
  children : PropTypes.node
}


function mapStateToProps(state, props) {

  return { translated : state[INTL_PROPERTY].messages[props.title.toLowerCase()] || props.title }

}

export default connect(mapStateToProps)(DocumentTitle)
