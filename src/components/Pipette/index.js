import React, { PropTypes } from "react"
import Tooltip from "react-bootstrap/lib/Tooltip"
import { getCursorPos } from "jsyg-utils"

const styles = {
  container : {
    position : "relative",
    cursor : "crosshair",
    display : "inline-block"
  },
  tooltip : { position : "absolute" }
}


class Pipette extends React.Component {

  constructor(props) {

    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleMove = this.handleMove.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)

    this.state = {
      x : 0,
      y : 0,
      displayTooltip : false
    }

    this.id = "tooltip" + Math.random()

  }

  round(pos) {

    return {
      x : Math.round(pos.x),
      y : Math.round(pos.y)
    }

  }

  handleMouseOver() {

    this.setState({ displayTooltip : true })

  }

  handleMouseOut() {

    this.setState({ displayTooltip : false })

  }

  handleClick(e) {

    if (this.props.onClick) {

      const pos = getCursorPos(e, this.container)

      this.props.onClick(this.round(pos))

    }

  }

  handleMove(e) {

    const pos = this.round(getCursorPos(e, this.container))

    this.setState({ ...pos })

    if (this.props.onMove) this.props.onMove(pos)

  }

  render() {

    const { children, style, tooltip, ...rest } = this.props

    delete rest.onMove
    delete rest.onClick

    let tooltipComponent = null

    if (tooltip && this.state.displayTooltip) {

      const tooltipStyle = {
        ...styles.tooltip,
        left : this.state.x + 8,
        top : this.state.y - 12
      }

      tooltipComponent = (
        <Tooltip
          placement="right"
          className="in"
          style={ tooltipStyle }
          id={ this.id }
        >
        { tooltip }
        </Tooltip>
      )

    }

    return (
      <div
        { ...rest }
        ref={ node => this.container = node }
        style={ { ...styles.container, ...style } }
        onClick={ this.handleClick }
        onMouseMove={ this.handleMove }
        onMouseOver={ this.handleMouseOver }
        onMouseOut={ this.handleMouseOut }
      >
        { tooltipComponent }
        { children }
      </div>
    )

  }

}

Pipette.propTypes = {
  children : PropTypes.node,
  onMove : PropTypes.func,
  onClick : PropTypes.func,
  style : PropTypes.object,
  tooltip : PropTypes.string
}

export default Pipette
