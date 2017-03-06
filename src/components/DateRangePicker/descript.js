import React, { Component } from "react"
import { DateRangePicker } from "react-dates"

class DateRangePickerWrapper extends Component {

  constructor(props) {

    super(props)

    this.state = {
      focusedInput : null,
      startDate : null,
      endDate : null
    }

    this.handleDatesChange = this.handleDatesChange.bind(this)
    this.handleFocusChange = this.handleFocusChange.bind(this)

  }

  handleDatesChange({ startDate, endDate }) {

    this.setState({ startDate, endDate })

  }

  handleFocusChange(focusedInput) {

    this.setState({ focusedInput })

  }

  render() {

    const { focusedInput, startDate, endDate } = this.state

    return (
      <div>
        <DateRangePicker
          { ...this.props }
          onDatesChange={ this.handleDatesChange }
          onFocusChange={ this.handleFocusChange }
          focusedInput={ focusedInput }
          startDate={ startDate }
          endDate={ endDate }
          startDatePlaceholderText="Début"
          endDatePlaceholderText="Fin"
        />
      </div>
    )

  }
}


module.exports = {

  categ : "Form fields",

  construct : DateRangePicker,

  path : "components/DateRangePicker",

  link : "https://github.com/airbnb/react-dates",

  states : { default : () => <DateRangePickerWrapper/> }
}
