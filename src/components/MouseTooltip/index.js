import React, { PropTypes } from "react"
import Tooltip from "react-bootstrap/lib/Tooltip"
import classNames from "./style.css"
import { getCursorPos } from "jsyg-utils"

export default class MouseTooltip extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      x : 0,
      y : 0,
      display : false
    }

    this.handleMove = this.handleMove.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)

    this.id = "tooltip" + Math.random()

  }

  handleMove(e) {

    const pos = getCursorPos(e, this.container)

    pos.x = Math.round(pos.x)
    pos.y = Math.round(pos.y)

    this.setState({ ...pos })

    if (this.props.onMove) this.props.onMove(pos)

  }

  handleMouseOver() {

    this.setState({ display : true })

  }

  handleMouseOut() {

    this.setState({ display : false })

  }

  render() {

    const { placement, className, children, content, offsetX, offsetY, ...rest } = this.props

    delete rest.onMove

    const style = {
      left : this.state.x + 3 + offsetX,
      top : this.state.y - 12 + offsetY
    }

    let tooltip = null

    if (this.state.display) {

      tooltip = (
        <Tooltip
          placement={ placement }
          className={ "in " + classNames.tooltip }
          style={ style }
          id={ this.id }
        >
        { content }
        </Tooltip>
      )

    }

    return (
      <div
        { ...rest }
        className={ classNames.div + (className ? " " + className : "") }
        ref={ node => this.container = node }
        onMouseMove={ this.handleMove }
        onMouseOver={ this.handleMouseOver }
        onMouseOut={ this.handleMouseOut }
      >
        { tooltip }
        { children }
      </div>
    )

  }
}

MouseTooltip.propTypes = {
  placement : PropTypes.oneOf(["top", "right", "bottom", "left"]),
  className : PropTypes.string,
  children : PropTypes.node,
  onMove : PropTypes.func,
  content : PropTypes.node.isRequired,
  offsetX : PropTypes.number,
  offsetY : PropTypes.number
}

MouseTooltip.defaultProps = {
  offsetX : 0,
  offsetY : 0,
  placement : "right"
}
