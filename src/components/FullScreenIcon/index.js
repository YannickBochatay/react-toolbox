import React, { Component, PropTypes } from "react"
import Glyphicon from "react-bootstrap/lib/Glyphicon"
import $ from "jquery"
import "jquery-fullscreen-plugin"
import { connect } from "react-redux"
import { STATE_PROPERTY as INTL_PROPERTY } from "../Intl/ducks"

export class FullScreenIcon extends Component {

  constructor(props) {

    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = { fullscreen : false }

  }

  handleClick(e) {

    e.preventDefault()

    $(document).toggleFullScreen()

  }

  onChange() {

    this.setState({ fullscreen : Boolean($(document).fullScreen()) })

  }

  componentDidMount() {

    $(document).on("fullscreenchange", this.onChange)

  }

  componentWillUnmount() {

    $(document).off("fullscreenchange", this.onChange)

  }

  render() {

    const title = this.state.fullscreen ? this.props.title : this.props.titleExit

    const style = { cursor : "pointer", ...this.props.style }

    const htmlProps = { ...this.props }

    for (const n in this.constructor.propTypes) delete htmlProps[n]

    return (
      <Glyphicon
        { ...htmlProps }
        style={ style }
        glyph={ this.state.fullscreen ? "resize-small" : "fullscreen" }
        onClick={ this.handleClick }
        title={ title }
      />
    )

  }

}

FullScreenIcon.propTypes = {
  title : PropTypes.string,
  titleExit : PropTypes.string,
  style : PropTypes.object
}

function mapStateToProps(state) {

  const data = state[INTL_PROPERTY]

  return {
    title : (data && data.messages.fullscreen) || "fullscreen",
    titleExit : (data && data.messages["exit fullscreen"]) || "exit fullscreen"
  }

}

export default connect(mapStateToProps)(FullScreenIcon)
