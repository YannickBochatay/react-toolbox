import React, { Component, PropTypes } from "react"
import isEqual from "lodash/fp/isEqual"

import ZoomAndPan from "jsyg-zoomandpan"
import "jsyg-zoomandpan/JSYG.ZoomAndPan.css"

import classNames from "./style.css"
import ZoomInIcon from "react-icons/lib/md/zoom-in"
import ZoomOutIcon from "react-icons/lib/md/zoom-out"
import Button from "react-bootstrap/lib/Button"


export default class Viewer extends Component {

  constructor(props) {

    super(props)

    this.zoomIn = this.zoomIn.bind(this)
    this.zoomOut = this.zoomOut.bind(this)

  }

  componentWillUnmount() {

    this.zap.disable()
    this.zap = null

  }

  componentDidUpdate(prevProps) {

    const { mousePan, mouseWheelZoom } = this.props

    this.zap.set(this.props)

    if (!isEqual(prevProps.mousePan, mousePan)) {

      if (mousePan) {

        this.zap.mousePan.set(mousePan)
        if (!prevProps.mousePan) this.zap.mousePan.enable()

      } else if (prevProps.mousePan) this.zap.mousePan.disable()

    }

    if (!isEqual(prevProps.mouseWheelZoom, mouseWheelZoom)) {

      if (mouseWheelZoom) {

        this.zap.mouseWheelZoom.set(mouseWheelZoom)
        if (!prevProps.mouseWheelZoom) this.zap.mouseWheelZoom.enable()

      } else if (prevProps.mouseWheelZoom) this.zap.mouseWheelZoom.disable()

    }

  }

  componentDidMount() {

    this.zap = new ZoomAndPan(this.viewer)

    this.zap.scaleMin = 0.1

    this.zap.enable(this.props)

    this.zap.scale(this.props.initialScale)

    if (this.props.mousePan) this.zap.mousePan.enable(this.props.mousePan)

    if (this.props.mouseWheelZoom) this.zap.mouseWheelZoom.enable(this.props.mouseWheelZoom)

  }

  zoomIn() {

    this.zap.scale(1.1)

  }

  zoomOut() {

    this.zap.scale(0.9)

  }

  render() {

    const child = React.Children.only(this.props.children)

    const { zoomIn, zoomOut } = this

    const style = { width : this.props.width, height : this.props.height, ...this.props.style }

    return (

      <div { ...this.props } className={ classNames.div } style={ style }>

        <svg
          ref={ node => this.viewer = node }
          width={ this.props.width }
          height={ this.props.height }
          preserveAspectRatio="none"
          className={ classNames.svg }
        >

          <foreignObject width={ this.props.width } height={ this.props.height } className={ classNames.foreignObject }>
            { child }
          </foreignObject>

        </svg>

        <Button
          bsStyle="default"
          title="zoom in"
          onClick={ zoomIn }
          className={ classNames.zoomIn }
        >
          <ZoomInIcon size={ 20 }/>
        </Button>

        <Button
          bsStyle="default"
          title="zoom out"
          onClick={ zoomOut }
          className={ classNames.zoomOut }
        >
          <ZoomOutIcon size={ 20 }/>
        </Button>

      </div>
    )

  }
}

Viewer.propTypes = {
  width : PropTypes.number.isRequired,
  height : PropTypes.number.isRequired,
  children : PropTypes.node,
  style : PropTypes.object,
  initialScale : PropTypes.number,
  mouseWheelZoom : PropTypes.any,
  mousePan : PropTypes.any
}

Viewer.defaultProps = {
  width : 700,
  height : 1000,
  initialScale : 0.9,
  mouseWheelZoom : true,
  mousePan : true
}
