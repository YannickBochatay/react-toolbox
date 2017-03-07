import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import moment from "moment"
import "moment-timezone"

import Row from "react-bootstrap/lib/Row"
import Col from "react-bootstrap/lib/Col"

import {
  STATE_PROPERTY,
  reducer,
  setHour,
  setMinute,
  setDate,
  setInterval,
  setTimezone,
  setFormat
} from "./ducks"

import {
  HourSelect,
  MinuteSelect,
  IntervalSelect,
  TimezoneSelect,
  FormatSelect
} from "./formfields"

export {
  STATE_PROPERTY,
  reducer,
  setHour,
  setMinute,
  setDate,
  setInterval,
  setTimezone,
  setFormat
}

export class DateComponent extends Component {

  formatDate() {

    const { timezone, format, set, interval } = this.props

    return moment()
    .utcOffset(0)
    .set(set)
    .add(interval)
    .tz(timezone)
    .format(format)

  }

  editionMode() {

    const {
      set,
      interval,
      timezone,
      format,
      onChangeHour,
      onChangeMinute,
      onChangeInterval,
      onChangeTimezone,
      onChangeFormat
    } = this.props

    return (
      <form className="form">
        <Row>
          <Col xs>
            <HourSelect value={ String(set.hour) } onChange={ onChangeHour }/>
          </Col>
          <Col xs>
            <MinuteSelect value={ String(set.minute) } onChange={ onChangeMinute }/>
          </Col>
          <Col xs>
            <IntervalSelect value={ String(interval.days) } onChange={ onChangeInterval }/>
          </Col>
        </Row>
        <Row>
          <Col xs>
            <TimezoneSelect value={ timezone } onChange={ onChangeTimezone }/>
          </Col>
        </Row>
        <Row>
          <Col xs>
            <FormatSelect value={ format } onChange={ onChangeFormat }/>
          </Col>
        </Row>
      </form>
    )

  }

  viewMode() {

    return (

      <div>{ this.formatDate() }</div>
    )

  }

  componentDidMount() {

    const { onMount } = this.props

    if (onMount) onMount()

  }

  render() {

    return this.props.editionMode ? this.editionMode() : this.viewMode()

  }
}

DateComponent.propTypes = {
  set : PropTypes.object.isRequired,
  interval : PropTypes.object,
  timezone : PropTypes.string,
  format : PropTypes.string,
  editionMode : PropTypes.bool,
  onChangeHour : PropTypes.func,
  onChangeMinute : PropTypes.func,
  onChangeInterval : PropTypes.func,
  onChangeTimezone : PropTypes.func,
  onChangeFormat : PropTypes.func,
  onMount : PropTypes.func
}

DateComponent.defaultProps = {
  set : {
    hour : null,
    minute : null
  },
  interval : { days : null },
  timezone : "GMT",
  format : "DD/MM/YYYY HH:mm:ss"
}

function mapStateToProps(state) {

  const { set, interval, timezone, format } = state[STATE_PROPERTY]

  return { set, interval, timezone, format }

}

function mapDispatchToProps(dispatch, ownProps) {

  return {

    onChangeHour(e) {

      dispatch(setHour(e.target.value))

    },

    onChangeMinute(e) {

      dispatch(setMinute(e.target.value))

    },

    onChangeInterval(e) {

      dispatch(setInterval(e.target.value))

    },

    onChangeTimezone(e) {

      dispatch(setTimezone(e.target.value))

    },

    onChangeFormat(e) {

      dispatch(setFormat(e.target.value))

    },

    onMount() {

      const { set, interval, timezone, format } = ownProps
      const date = {}

      if (set !== undefined) date.set = set
      if (interval !== undefined) date.interval = interval
      if (timezone !== undefined) date.timezone = timezone
      if (format !== undefined) date.format = format

      dispatch(setDate(date))

    }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DateComponent)
