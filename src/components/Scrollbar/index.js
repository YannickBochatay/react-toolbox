import React, { Component, PropTypes } from "react"
import "perfect-scrollbar/src/css/main.scss"
import Ps from "perfect-scrollbar"

export default class Scrollbar extends Component {

  componentDidMount() {

    Ps.initialize(this.div)

  }

  componentDidUpdate() {

    Ps.update(this.div)

  }

  componentWillUnMount() {

    Ps.destroy(this.div)

  }

  render() {

    const style = {
      position : "relative",
      height : "100%",
      overflow : "hidden",
      ...(this.props.style || {})
    }

    const htmlProps = { ...this.props }

    for (const n in Scrollbar.propTypes) delete htmlProps[n]

    return React.createElement(
      this.props.tag,
      { ...htmlProps, style, ref : node => (this.div = node) },
      this.props.children
    )

  }

}

Scrollbar.propTypes = {
  tag : PropTypes.string,
  style : PropTypes.object,
  children : PropTypes.node
}

Scrollbar.defaultProps = { tag : "div" }
