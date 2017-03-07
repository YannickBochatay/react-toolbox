import React, { PropTypes } from "react"
import { connect } from "react-redux"
import Switch from "rc-switch"
import { STATE_PROPERTY, toggleClouds } from "../ducks"
import Intl from "components/Intl"


const styles = {
  div : {
    color : "white"
  },
  switch : {
    marginRight : "10px"
  }
}

const SwitchClouds = ({ onChange, checked, style, ...rest }) => {

  delete rest.dispatch

  return (
    <div { ...rest } style={ { ...styles.div, ...style } }>

      <Switch
        onChange={ onChange }
        checked={ checked }
        title="Animation des nuages"
        style={ styles.switch }
      />

      <Intl ucfirst>clouds animation</Intl>

    </div>
  )
}

SwitchClouds.propTypes = {
  onChange : PropTypes.func,
  checked : PropTypes.bool,
  style : PropTypes.object
}

const mapStateToProps = state => ({ checked : state[STATE_PROPERTY] && state[STATE_PROPERTY].display })

const mapDispatchToProps = dispatch => ({ onChange : () => dispatch(toggleClouds()) })

export default connect(mapStateToProps, mapDispatchToProps)(SwitchClouds)
