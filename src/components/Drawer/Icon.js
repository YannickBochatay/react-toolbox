import React, { PropTypes } from "react"
import { connect } from "react-redux"
import Glyphicon from "react-bootstrap/lib/Glyphicon"
import { STATE_PROPERTY, toggleDrawer } from "./ducks"
import { STATE_PROPERTY as INTL_PROPERTY } from "../Intl/ducks"

export const Icon = props => (
  <Glyphicon { ...props } glyph={ props.open ? "remove" : "menu-hamburger" }/>
)

Icon.propTypes = {
  open : PropTypes.bool,
  title : PropTypes.string,
  onClick : PropTypes.func
}

function mapStateToProps(state) {

  return {
    open : state[STATE_PROPERTY] && state[STATE_PROPERTY].isOpen,
    title : state[INTL_PROPERTY] && state[INTL_PROPERTY].messages["show menu"] || "show menu"
  }

}

function mapDispatchToProps(dispatch) {

  return {

    onClick(e) {

      e.preventDefault()
      dispatch(toggleDrawer())

    }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Icon)
