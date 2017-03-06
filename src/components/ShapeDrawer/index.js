import React, { PropTypes, Component } from "react"
import JSYGShapeDrawer from "jsyg-shapedrawer"

class ShapeDrawer extends Component {

  constructor(props) {

    super(props)

    this.handleMousedown = this.handleMousedown.bind(this)

  }

  setOptions() {

    const opt = { ...this.props }

    if (opt.onEnd) {

      this.drawer.on("end", opt.onEnd)
      delete opt.onEnd

    }

    if (opt.onDraw) {

      this.drawer.on("draw", opt.onDraw)
      delete opt.onDraw

    }

    delete opt.width
    delete opt.height
    delete opt.children
    delete opt.disabled
    delete opt.shape

    this.drawer.set(opt)

  }

  handleMousedown(e) {

    const shape = this.shape.cloneNode(true)

    this.svg.appendChild(shape)

    this.drawer.draw(shape, e)

  }

  componentDidMount() {

    this.drawer = new JSYGShapeDrawer(this.svg)

    this.setOptions()

    if (!this.props.disabled) this.enable()

  }

  enable() {

    this.drawer.enable()
    this.svg.addEventListener("mousedown", this.handleMousedown)

  }

  disable() {

    this.drawer.disable()
    this.svg.removeEventListener("mousedown", this.handleMousedown)

  }

  componentDidUpdate(prevProps) {

    this.setOptions()

    if (this.props.disabled) this.disable()
    else if (prevProps.disabled) this.enable()

  }

  componentWillUnmount() {

    this.disable()
    this.drawer.destroy()

  }

  render() {

    const { children, shape, shapeStyle, disabled, width, height, ...rest } = this.props

    for (const n in ShapeDrawer.propTypes) delete rest[n]

    const shapeComponent = React.createElement(shape, {
      style : shapeStyle,
      ref : node => this.shape = node
    })

    return (
      <svg
        width={ width }
        height={ height }
        { ...rest }
        ref={ node => this.svg = node }
      >
        { children }
        { disabled ? null : shapeComponent }
      </svg>
    )

  }

}

ShapeDrawer.propTypes = {
  onDraw : PropTypes.func,
  onEnd : PropTypes.func,
  minArea : PropTypes.number,
  options : PropTypes.object,
  width : PropTypes.number.isRequired,
  height : PropTypes.number.isRequired,
  children : PropTypes.node,
  shape : PropTypes.oneOf(["circle", "ellipse", "line", "rect"]).isRequired,
  shapeStyle : PropTypes.object,
  disabled : PropTypes.bool
}

ShapeDrawer.defaultProps = {
  width : 500,
  height : 500,
  shapeStyle : {
    fill : "none",
    stroke : "black"
  }
}

export default ShapeDrawer
