import React, { PropTypes } from "react"
import { connect } from "react-redux"
import locales from "locales"
import Select from "react-select"
import Intl from "../"
import { STATE_PROPERTY as INTL_PROPERTY, setLocale } from "../ducks"

const styles = {
  flag : {
    width : 25,
    marginRight : 10
  },
  select : {
    textAlign : "left",
    width : 150
  }
}

const options = Object.keys(locales).map(locale => ({
  value : locale,
  label : locales[locale].lang,
  icon : locales[locale].icon
}))

const renderOption = option => (
  <span>
    <img src={ option.icon } style={ styles.flag } />
    <Intl text={ option.label } ucfirst/>
  </span>
)

export const LangChoice = ({ value, onChange, style }) => (
  <Select
    value={ value }
    onChange={ onChange }
    clearable={ false }
    options={ options }
    style={ { ...styles.select, ...style } }
    optionRenderer={ renderOption }
    valueRenderer={ renderOption }
  />
)

LangChoice.propTypes = {
  value : PropTypes.string,
  onChange : PropTypes.func,
  style : PropTypes.object
}

function mapStateToProps(state) {

  const data = state[INTL_PROPERTY]

  return { value : data && data.locale }

}

function mapDispatchToProps(dispatch, ownProps) {

  return {

    onChange(option) {

      dispatch(setLocale(option.value))

      if (ownProps.onChange) ownProps.onChange()

    }

  }

}


export default connect(mapStateToProps, mapDispatchToProps)(LangChoice)
