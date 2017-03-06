import React, { PropTypes } from "react"
import { connect } from "react-redux"
import Switch from "rc-switch"
import { toggleClouds } from "../ducks"
import Intl from "components/Intl"
import classNames from "./style.css"

const SwitchClouds = ({ onChange, checked, className, ...rest }) => {

  delete rest.dispatch

  return (
    <div { ...rest } className={ classNames.div + (className ? " " + className : "") }>

      <Switch
        onChange={ onChange }
        checked={ checked }
        title="Animation des nuages"
        className={ classNames.switch }
      />

      <Intl ucfirst>clouds animation</Intl>

    </div>
  )
}

SwitchClouds.propTypes = {
  onChange : PropTypes.func,
  checked : PropTypes.bool,
  className : PropTypes.string
}

const mapStateToProps = state => ({ checked : state.clouds.display })

const mapDispatchToProps = dispatch => ({ onChange : () => dispatch(toggleClouds()) })

export default connect(mapStateToProps, mapDispatchToProps)(SwitchClouds)
