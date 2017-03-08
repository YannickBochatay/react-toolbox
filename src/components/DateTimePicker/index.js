import React, { Component, PropTypes } from "react"

import $ from "jquery"
import moment from "moment"

import "bootstrap/js/transition"
import "bootstrap/js/collapse"

import datetimepicker from "./bootstrap-datetimepicker.js"
import "./styles.less"

import { ucfirst } from "jsyg-strutils"

const defaults = {

  format : false,
  dayViewHeaderFormat : "MMMM YYYY",
  extraFormats : false,
  stepping : 1,
  minDate : false,
  maxDate : false,
  useCurrent : true,
  collapse : true,
  locale : moment.locale(),
  defaultDate : false,
  disabledDates : false,
  enabledDates : false,
  icons : {
    time : "glyphicon glyphicon-time",
    date : "glyphicon glyphicon-calendar",
    up : "glyphicon glyphicon-chevron-up",
    down : "glyphicon glyphicon-chevron-down",
    previous : "glyphicon glyphicon-chevron-left",
    next : "glyphicon glyphicon-chevron-right",
    today : "glyphicon glyphicon-screenshot",
    clear : "glyphicon glyphicon-trash",
    close : "glyphicon glyphicon-remove"
  },
  tooltips : {
    today : "Go to today",
    clear : "Clear selection",
    close : "Close the picker",
    selectMonth : "Select Month",
    prevMonth : "Previous Month",
    nextMonth : "Next Month",
    selectYear : "Select Year",
    prevYear : "Previous Year",
    nextYear : "Next Year",
    selectDecade : "Select Decade",
    prevDecade : "Previous Decade",
    nextDecade : "Next Decade",
    prevCentury : "Previous Century",
    nextCentury : "Next Century"
  },
  useStrict : false,
  sideBySide : false,
  daysOfWeekDisabled : false,
  calendarWeeks : false,
  viewMode : "days",
  toolbarPlacement : "default",
  showTodayButton : false,
  showClear : false,
  showClose : false,
  widgetPositioning : {
    horizontal : "auto",
    vertical : "auto"
  },
  widgetParent : null,
  ignoreReadonly : false,
  keepOpen : false,
  focusOnShow : true,
  inline : false,
  keepInvalid : false,
  datepickerInput : ".datepickerinput",
  keyBinds : {
    up(widget) {

      if (!widget) return

      const d = this.date() || moment()

      if (widget.find(".datepicker").is(":visible") ) {

        this.date(d.clone().subtract(7, "d") )

      } else {

        this.date(d.clone().add(this.stepping(), "m") )

      }

    },
    down(widget) {

      if (!widget) {

        this.show()

        return

      }

      const d = this.date() || moment()

      if (widget.find(".datepicker").is(":visible") ) {

        this.date(d.clone().add(7, "d") )

      } else {

        this.date(d.clone().subtract(this.stepping(), "m") )

      }

    },
    "control up"(widget) {

      if (!widget) return

      const d = this.date() || moment()

      if (widget.find(".datepicker").is(":visible") ) {

        this.date(d.clone().subtract(1, "y") )

      } else {

        this.date(d.clone().add(1, "h") )

      }

    },
    "control down"(widget) {

      if (!widget) return

      const d = this.date() || moment()

      if (widget.find(".datepicker").is(":visible") ) {

        this.date(d.clone().add(1, "y") )

      } else {

        this.date(d.clone().subtract(1, "h") )

      }

    },
    left(widget) {

      if (!widget) return

      const d = this.date() || moment()

      if (widget.find(".datepicker").is(":visible") ) {

        this.date(d.clone().subtract(1, "d") )

      }

    },
    right(widget) {

      if (!widget) return

      const d = this.date() || moment()

      if (widget.find(".datepicker").is(":visible") ) {

        this.date(d.clone().add(1, "d") )

      }

    },
    pageUp(widget) {

      if (!widget) return

      const d = this.date() || moment()

      if (widget.find(".datepicker").is(":visible") ) {

        this.date(d.clone().subtract(1, "M") )

      }

    },
    pageDown(widget) {

      if (!widget) return

      const d = this.date() || moment()

      if (widget.find(".datepicker").is(":visible") ) {

        this.date(d.clone().add(1, "M") )

      }

    },
    enter() {

      this.hide()

    },
    escape() {

      this.hide()

    },
    "control space"(widget) {

      if (widget.find(".timepicker").is(":visible") ) {

        widget.find(".btn[data-action=\"togglePeriod\"]").click()

      }

    },
    t() {

      this.date(moment() )

    },
    "delete"() {

      this.clear()

    }
  },
  debug : false,
  allowInputToggle : false,
  disabledTimeIntervals : false,
  disabledHours : false,
  enabledHours : false,
  viewDate : false
}


const events = ["change", "hide", "show", "error", "update"]


function setOptions(options) {

  const settings = { ...defaults }

  for (const n in options) {

    if (typeof settings[n] != "undefined") settings[n] = options[n]

  }

  return settings

}


export default class DateTimePicker extends Component {

  componentDidMount() {

    const { props } = this
    const options = setOptions(props)

    const $root = $(this.root)

    events.forEach(eventName => {

      const prop = "on" + ucfirst(eventName)
      const eventListener = props[prop]

      if (eventListener) $root.on("dp." + eventName, eventListener)

    })

    if (options.icon) delete options.icon

    this.dateTimePicker = datetimepicker($root, options)

  }

  componentDidUpdate(prevProps) {

    for (const n in prevProps) {

      if (this.props[n] !== prevProps[n] && typeof this.dateTimePicker[n] !== "undefined") {

        this.dateTimePicker[n] = this.props[n]

      }

    }

  }

  componentWillUnmount() {

    const $root = $(this.root)

    $root.off(events.map(event => "dp." + event + " ") )

    this.dateTimePicker.destroy()

    this.dateTimePicker = null

  }

  render() {

    const { icon, inline } = this.props

    const getRef = (node) => this.root = node

    if (inline) {

      return <div ref={ getRef }/>

    } else if (icon) {

      return (

        <div className="input-group date" ref={ getRef } style={ { position : "relative" } }>
          <input type="text" className="form-control" />
          <span className="input-group-addon">
            <span className={ "glyphicon glyphicon-" + icon }></span>
          </span>
        </div>
      )

    } else {

      return <input type="text" className="form-control" ref={ getRef }/>

    }

  }
}

const datePropType = PropTypes.oneOfType( [
  PropTypes.instanceOf(Date),
  PropTypes.instanceOf(moment),
  PropTypes.string
] )

DateTimePicker.propTypes = {
  icon : PropTypes.node,
  format : PropTypes.string,
  dayViewHeaderFormat : PropTypes.string,
  extraFormats : PropTypes.string,
  stepping : PropTypes.number,
  minDate : datePropType,
  maxDate : datePropType,
  useCurrent : PropTypes.bool,
  collapse : PropTypes.bool,
  locale : PropTypes.string,
  defaultDate : datePropType,
  disabledDates : PropTypes.array,
  enabledDates : PropTypes.array,
  tooltips : PropTypes.object,
  useStrict : PropTypes.bool,
  sideBySide : PropTypes.bool,
  daysOfWeekDisabled : PropTypes.array,
  calendarWeeks : PropTypes.bool,
  viewMode : PropTypes.oneOf( ["decades", "years", "months", "days"] ),
  toolbarPlacement : PropTypes.oneOf( ["default", "top", "bottom"] ),
  showTodayButton : PropTypes.bool,
  showClear : PropTypes.bool,
  showClose : PropTypes.bool,
  widgetPositioning : PropTypes.object,
  widgetParent : PropTypes.oneOfType( [
    PropTypes.object,
    PropTypes.string
  ] ),
  ignoreReadonly : PropTypes.bool,
  keepOpen : PropTypes.bool,
  focusOnShow : PropTypes.bool,
  inline : PropTypes.bool,
  keepInvalid : PropTypes.bool,
  debug : PropTypes.bool,
  allowInputToggle : PropTypes.bool,
  disabledTimeIntervals : PropTypes.bool,
  disabledHours : PropTypes.bool,
  enabledHours : PropTypes.bool,
  viewDate : PropTypes.bool
}
