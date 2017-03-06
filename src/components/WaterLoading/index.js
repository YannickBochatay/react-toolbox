import React, { PropTypes, Component } from "react"
import classNames from "./style.css"

function size2px(size) {

  switch (size) {
  case "xs" : return 40
  case "sm" : return 80
  case "lg" : return 240
  case "md" : default : return 120
  }

}

class WaterLoading extends Component {

  constructor(props) {

    super(props)

    this.state = { animatedValue : 0 }

  }

  setAnimatedValue(animatedValue) {

    this.setState({ animatedValue })

  }

  launchAnimation(prevPercent) {

    let i = prevPercent

    const duration = this.props.duration || 800

    const delay = Math.round(duration / Math.abs(this.props.percent - i))

    this.interval = window.setInterval(() => {

      i < this.props.percent ? this.setAnimatedValue(++i) : this.stopAnimation()

    }, delay)

  }

  componentDidUpdate(prevProps) {

    if (this.props.animate && prevProps.percent !== this.props.percent) {

      this.launchAnimation(prevProps.percent)

    }

  }

  componentDidMount() {

    if (this.props.animate) this.launchAnimation(0)

  }

  stopAnimation() {

    window.clearInterval(this.interval)

  }

  componentWillUnmount() {

    this.stopAnimation()

  }

  render() {

    const size = size2px(this.props.size)
    const style = { width : size, height : size, ...this.props.style }

    let percent = this.props.animate ? this.state.animatedValue : this.props.percent

    percent = Math.min(100, Math.max(0, percent))

    const props = Object.assign({}, this.props)

    delete props.percent
    delete props.size
    delete props.animate

    return (
      <div className={ classNames.box } { ...props } style={ style }>
        <svg style={ { display : "none" } }>
          <symbol id="wave">
            <path d="M420,20
              c21.5-0.4,38.8-2.5,51.1-4.5
              c13.4-2.2,26.5-5.2,27.3-5.4
              C514,6.5,518,4.7,528.5,2.7
              c7.1-1.3,17.9-2.8,31.5-2.7
              c0,0,0,0,0,0
              v20
              H420
              z">
            </path>
            <path d="M420,20
              c-21.5-0.4-38.8-2.5-51.1-4.5
              c-13.4-2.2-26.5-5.2-27.3-5.4
              C326,6.5,322,4.7,311.5,2.7
              C304.3,1.4,293.6-0.1,280,0
              c0,0,0,0,0,0
              v20
              H420
              z">
            </path>
            <path d="M140,20
              c21.5-0.4,38.8-2.5,51.1-4.5
              c13.4-2.2,26.5-5.2,27.3-5.4
              C234,6.5,238,4.7,248.5,2.7
              c7.1-1.3,17.9-2.8,31.5-2.7
              c0,0,0,0,0,0
              v20
              H140
              z">
            </path>
            <path d="M140,20
              c-21.5-0.4-38.8-2.5-51.1-4.5
              c-13.4-2.2-26.5-5.2-27.3-5.4
              C46,6.5,42,4.7,31.5,2.7
              C24.3,1.4,13.6-0.1,0,0
              c0,0,0,0,0,0
              l0,20
              H140
              z">
            </path>
          </symbol>
        </svg>
        <div className={ classNames.percent } style={ { fontSize : Math.round(size / 4) } }>
          <div className={ classNames.percentNum } id="count">{ percent }</div>
          <div className={ classNames.percentB } >%</div>
        </div>
        <div id="water" className={ classNames.water } style={ { transform : `translate(0,${100 - percent}%)` } }>
          <svg viewBox="0 0 560 20" className={ classNames.water_wave + " " + classNames.water_wave_back }>
            <use xlinkHref="#wave"></use>
          </svg>
          <svg viewBox="0 0 560 20" className={ classNames.water_wave + " " + classNames.water_wave_front }>
            <use xlinkHref="#wave"></use>
          </svg>
        </div>
      </div>
    )

  }

}


WaterLoading.propTypes = {
  percent : PropTypes.number.isRequired,
  size : PropTypes.string,
  style : PropTypes.object,
  animate : PropTypes.bool,
  duration : PropTypes.number
}

WaterLoading.defaultProps = { percent : 0 }

export default WaterLoading
