import React, { PropTypes } from "react"

import ControlLabel from "react-bootstrap/lib/ControlLabel"
import FormGroup from "react-bootstrap/lib/FormGroup"
import FormControl from "react-bootstrap/lib/FormControl"

import Intl from "components/Intl"

import moment from "moment"
import "moment-timezone"

export const HourSelect = ({ onChange, value }) => {

  const hours = []

  for (let i = 0; i < 24; i++) hours.push(i)

  return (
    <FormGroup>
      <ControlLabel>hours</ControlLabel>
      <FormControl componentClass="select" onChange={ onChange } value={ value }>
        { hours.map(hour => (
          <option key={ "hour_" + hour } value={ hour }>
            { hour }
          </option>
        )) }
      </FormControl>
    </FormGroup>
  )

}

HourSelect.propTypes = {
  onChange : PropTypes.func,
  value : PropTypes.string
}


export const MinuteSelect = ({ onChange, value }) => {

  const minutes = []

  for (let i = 0; i < 60; i += 5) minutes.push(i)

  return (
    <FormGroup>
      <ControlLabel>
        <Intl text="minutes"/>
      </ControlLabel>
      <FormControl componentClass="select" onChange={ onChange } value={ value }>
        { minutes.map(minute => <option key={ "minute_" + minute } value={ minute }>{ minute }</option>) }
      </FormControl>
    </FormGroup>
  )

}

MinuteSelect.propTypes = {
  onChange : PropTypes.func,
  value : PropTypes.string
}

export const IntervalSelect = ({ onChange, value }) => (
  <FormGroup>
    <ControlLabel>
      <Intl text="interval (days)"/>
    </ControlLabel>
    <FormControl type="number" value={ value } onChange={ onChange } />
  </FormGroup>
)

IntervalSelect.propTypes = {
  onChange : PropTypes.func,
  value : PropTypes.string
}

export const TimezoneSelect = ({ onChange, value }) => {

  const favorites = ["GMT", "Europe/Paris"]

  const others = moment.tz.names().filter(name => favorites.indexOf(name) === -1)

  const createZone = name => <option value={ name } key={ name }>{ name }</option>

  return (
    <FormGroup>
      <ControlLabel>
        <Intl text="timezone"/>
      </ControlLabel>
      <FormControl componentClass="select" onChange={ onChange } value={ value }>
        <optgroup label="favorites">
          { favorites.map(createZone) }
        </optgroup>
        <optgroup label="others">
          { others.map(createZone) }
        </optgroup>
      </FormControl>
    </FormGroup>
  )

}

TimezoneSelect.propTypes = {
  onChange : PropTypes.func,
  value : PropTypes.string
}

export const FormatSelect = ({ onChange, value }) => (
  <FormGroup>
    <ControlLabel>
      <Intl text="format"/>
    </ControlLabel>
    <FormControl
      type="text"
      value={ value }
      onChange={ onChange }
    />
  </FormGroup>
)

FormatSelect.propTypes = {
  onChange : PropTypes.func,
  value : PropTypes.string
}

