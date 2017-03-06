import React, { Component, PropTypes } from "react"
import $ from "jquery"
import "jquery-knob"

export default class Dial extends Component {

  parseOptions() {

    const opt = { ...this.props }

    opt.change = opt.onChange

    delete opt.onChange

    return opt

  }

  componentDidMount() {

    $(this.input).dial(this.parseOptions())

  }

  componentWillUnmount() {

    $(this.input).dial("destroy")

  }

  componentDidUpdate() {

    $(this.input).trigger("configure", this.parseOptions())

  }

  render() {

    return (
      <input
        type="text"
        defaultValue={ this.props.value || 0 }
        className="dial"
        ref={ input => this.input = input }
      />
    )

  }

}

Dial.propTypes = {

  value : PropTypes.number,

  // events
  onChange : PropTypes.func,

  // behavior
  min : PropTypes.number,
  max : PropTypes.number,
  step : PropTypes.number,
  angleOffset : PropTypes.number,
  angleArc : PropTypes.number,
  readOnly : PropTypes.bool,
  rotation : PropTypes.string,

  // ui
  cursor : PropTypes.string,
  thickness : PropTypes.number,
  lineCap : PropTypes.oneOf(["butt", "round"]),
  width : PropTypes.number,
  height : PropTypes.number,
  displayInput : PropTypes.bool,
  displayPrevious : PropTypes.bool,
  fgColor : PropTypes.string,
  inputColor : PropTypes.string,
  font : PropTypes.string,
  fontWeight : PropTypes.string,
  bgColor : PropTypes.string

}
