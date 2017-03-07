import React, { PropTypes } from "react"
import { connect } from "react-redux"
import locales from "locales"
import Select from "react-select"
import classNames from "./style.css"
import Intl from "components/Intl"
import { STATE_PROPERTY as INTL_PROPERTY, setLocale } from "components/Intl/ducks"

const options = Object.keys(locales).map(locale => ({
  value : locale,
  label : locales[locale].lang,
  icon : locales[locale].icon
}))

const renderOption = option => (
  <span>
    <img src={ option.icon } className={ classNames.flag } />
    <Intl text={ option.label } ucfirst/>
  </span>
)

export const LangChoice = ({ value, onChange, className }) => (
  <Select
    value={ value }
    onChange={ onChange }
    clearable={ false }
    options={ options }
    className={ classNames.select + (className ? " " + className : "") }
    optionRenderer={ renderOption }
    valueRenderer={ renderOption }
  />
)

LangChoice.propTypes = {
  value : PropTypes.string,
  onChange : PropTypes.func,
  className : PropTypes.string
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
