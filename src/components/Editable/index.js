import React, { Component, PropTypes } from "react"
import $ from "jquery"
import "bootstrap/js/tooltip"
import "bootstrap/js/popover"
import "x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js"
import "x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css"

export default class Editable extends Component {

  updateValue(value) {

    $(this.a).editable("setValue", value)

  }

  componentDidMount() {

    $(this.a).editable(this.props)

  }

  componentDidUpdate() {

    $(this.a).editable("option", this.props)

  }

  componentWillUnmount() {

    $(this.a).editable("destroy")

  }

  render() {

    return (
      <a href="#" ref={ a => this.a = a }>
        { this.props.children }
      </a>
    )

  }

}

Editable.propTypes = { children : PropTypes.node }

