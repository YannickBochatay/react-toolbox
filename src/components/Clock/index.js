import React, { Component, PropTypes } from "react"
import moment from "moment"
import "moment-timezone"
import classNames from "./style.css"


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

    let className = classNames.div

    if (this.props.className) className += " " + this.props.className

    const props = { ...this.props }

    delete props.timezone

    return (
      <div { ...props } className={ className }>
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
  className : PropTypes.string
}

Clock.defaultProps = { timezone : "GMT" }

export default Clock
