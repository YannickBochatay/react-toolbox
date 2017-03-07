import React, { PropTypes } from "react"
import Tooltip from "react-bootstrap/lib/Tooltip"
import { getCursorPos } from "jsyg-utils"

const styles = {
  div : {
    position : "relative",
    overflow : "visible",
  },
  tooltip : {
    position : "absolute"
  }
}

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

    const { placement, style, children, content, offsetX, offsetY, ...rest } = this.props

    delete rest.onMove

    const tooltipStyle = {
      ...styles.tooltip,
      left : this.state.x + 3 + offsetX,
      top : this.state.y - 12 + offsetY
    }

    let tooltip = null

    if (this.state.display) {

      tooltip = (
        <Tooltip
          placement={ placement }
          className="in"
          style={ tooltipStyle }
          id={ this.id }
        >
        { content }
        </Tooltip>
      )

    }

    return (
      <div
        { ...rest }
        style={ { ...styles.div, ...style } }
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
  style : PropTypes.object,
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
