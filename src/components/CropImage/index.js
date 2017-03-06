import React, { PropTypes, Component } from "react"
import JSYGCropAndResize from "jsyg-cropandresize"

class CropImage extends Component {

  constructor(props) {

    super(props)

    this.handleDrag = this.handleDrag.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  setOptions() {

    const opt = { ...this.props }

    delete opt.width
    delete opt.height
    delete opt.disabled
    delete opt.onChange
    delete opt.onDrag

    this.crop.set(opt)

  }

  reset() {

    const ref = Object.getPrototypeOf(this.crop)

    for (const n in ref) {

      if (typeof ref[n] !== "function") this.crop[n] = ref[n]

    }

  }

  getBBox() {

    const bbox = this.crop.selection.getBBox()

    return {
      x : bbox.x,
      y : bbox.y,
      width : bbox.width,
      height : bbox.height
    }

  }

  componentDidMount() {

    this.crop = new JSYGCropAndResize(this.svg.firstElementChild)

    this.setOptions()

    if (!this.props.disabled) this.enable()

  }

  handleDrag() {

    if (this.props.onDrag) this.props.onDrag(this.getBBox())

  }

  handleChange() {

    if (this.props.onChange) this.props.onChange(this.getBBox())

  }

  enable() {

    this.crop.enable()
    this.crop.editor.on("drag", this.handleDrag)
    this.crop.editor.on("change", this.handleChange)

  }

  disable() {

    this.crop.disable()
    this.crop.editor.off("drag", this.handleDrag)
    this.crop.editor.off("change", this.handleChange)

  }

  update() {

    this.crop.update()

  }

  componentDidUpdate(prevProps) {

    this.setOptions()

    if (this.props.disabled) this.disable()
    else if (prevProps.disabled) this.enable()
    else if (this.props.src !== prevProps.src) this.update()

  }

  componentWillUnmount() {

    this.disable()
    this.reset()

  }

  render() {

    const { width, height, src, children, ...rest } = this.props

    delete rest.boxInit

    let image = null

    if (src) {

      image = (
        <image xlinkHref={ src }
          width={ width }
          height={ height }
        />
      )

    }

    return (
      <svg
        width={ width }
        height={ height }
        ref={ node => this.svg = node }
        { ...rest }
      >
        { image || children }
      </svg>
    )

  }

}

CropImage.propTypes = {
  src : PropTypes.string,
  width : PropTypes.number,
  height : PropTypes.number,
  disabled : PropTypes.bool,
  onDrag : PropTypes.func,
  onChange : PropTypes.func,
  children : PropTypes.node,
  boxInit : PropTypes.object
}

export default CropImage
