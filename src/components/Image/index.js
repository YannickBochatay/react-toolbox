import React, { PropTypes } from "react"
import Spinner from "components/Spinner"
import Alert from "react-bootstrap/lib/Alert"
import Intl from "components/Intl"
import classNames from "./style.css"

class Image extends React.PureComponent {

  constructor(props) {

    super(props)

    this.state = {
      image : null,
      isLoading : false,
      error : null
    }

  }

  toDataURL() {

    const canvas = document.createElement("canvas")

    canvas.width = this.image.width
    canvas.height = this.image.height

    const ctx = canvas.getContext("2d")

    ctx.drawImage(this.image, 0, 0)

    return canvas.toDataURL("image/png")

  }

  loadImage(src) {

    this.setState({ image : null, isLoading : true, error : null })

    const img = document.createElement("img")

    img.onload = () => this.setState({ isLoading : false, image : this.toDataURL(img) })
    img.onerror = e => this.setState({ isLoading : false, error : e })

    img.crossOrigin = ""
    img.src = src

    this.image = img

  }

  componentWillUpdate(nextProps) {

    if (this.props.src !== nextProps.src) this.loadImage(nextProps.src)

  }

  componentWillMount() {

    if (!this.image && !this.state.isLoading) this.loadImage(this.props.src)

  }

  render() {

    const { className, src, alt, spinnerColor, svg, ...rest } = this.props

    let component

    if (this.state.isLoading) {

      component = (
        <div
          { ...rest }
          className={ classNames.divSpinner + (className ? " " + className : "") }
        >
          <Spinner color={ spinnerColor } className={ classNames.spinner }/>
        </div>
      )

      if (svg) {

        component = (
          <foreignObject width="100%" height="100%">
            { component }
          </foreignObject>
        )

      }

    } else if (this.state.error) {

      component = (
        <Alert
          title={ alt || src }
          { ...rest }
          bsStyle="danger"
          className={ classNames.alert + (className ? " " + className : "") }
        >
          <Intl text="unable to load image" ucfirst/>
          &nbsp;{ alt || src }
        </Alert>
      )

      if (svg) {

        component = (
          <foreignObject width="100%" height="100%">
            { component }
          </foreignObject>
        )

      }

    } else if (svg) {

      component = <image xlinkHref={ this.state.image } { ...{ className, alt } } { ...rest }/>

    } else {

      component = <img src={ this.state.image } { ...{ className, alt } } { ...rest }/>

    }

    return component

  }

}


Image.propTypes = {
  src : PropTypes.string,
  alt : PropTypes.string,
  className : PropTypes.string,
  spinnerColor : PropTypes.string,
  svg : PropTypes.bool
}

Image.defaultProps = { svg : false }

export default Image
