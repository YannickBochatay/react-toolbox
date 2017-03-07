import React, { Component, PropTypes } from "react"
import moment from "moment"
import "moment-timezone"

const styles = {
  div : {
    margin : 2,
    padding : "5px 10px",
    backgroundColor : "rgba(0, 0, 0, 0.1)",
    overflow : "hidden",
    textOverflow : "ellipsis"
  }
}

export class Clock extends Component {

  constructor(props) {

    super(props)

    this.state = {
      offset : 0,
      date : null,
      time : null
    }

    this.updateDateTime = this.updateDateTime.bind(this)

  }

  updateDateTime() {

    const time = moment().tz(this.props.timezone)

    this.setState({
      offset : time.format("Z"),
      date : time.format("DD/MM/YYYY"),
      time : time.format("HH:mm:ss")
    })

  }

  componentDidMount() {

    this.intervalID = window.setInterval(this.updateDateTime, 1000)

    this.updateDateTime()

  }

  componentWillUnmount() {

    window.clearInterval(this.intervalID)

  }

  render() {

    const { style, ...rest } = this.props

    delete rest.timezone

    return (
      <div { ...rest } style={ { ...styles.div, ...style } }>
        <strong>{ this.props.timezone }</strong>
        <span className="badge pull-right">{ this.state.offset }</span>
        <p>
          <span className="pull-left">{ this.state.date }</span>
          <span className="pull-right">{ this.state.time }</span>
        </p>
      </div>
    )

  }
}

Clock.propTypes = {
  timezone : PropTypes.string.isRequired,
  style : PropTypes.object
}

Clock.defaultProps = { timezone : "GMT" }

export default Clock
