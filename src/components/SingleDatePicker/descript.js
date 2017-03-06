import React, { Component } from "react"
import { SingleDatePicker } from "react-dates"

class DatePickerWrapper extends Component {

  constructor(props) {

    super(props)

    this.state = {
      focused : null,
      date : null
    }

    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleFocusChange = this.handleFocusChange.bind(this)

  }

  handleDateChange(date) {

    this.setState({ date })

  }

  handleFocusChange({ focused }) {

    this.setState({ focused })

  }

  render() {

    const { focused, date } = this.state

    return (
      <div>
        <SingleDatePicker
          { ...this.props }
          onDateChange={ this.handleDateChange }
          onFocusChange={ this.handleFocusChange }
          focused={ focused }
          date={ date }
          placeholder="Choix date"
        />
      </div>
    )

  }
}


module.exports = {

  categ : "Form fields",

  construct : SingleDatePicker,

  path : "react-dates",

  link : "https://github.com/airbnb/react-dates",

  states : { default : () => <DatePickerWrapper/> }
}
