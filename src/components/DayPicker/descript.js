import React from "react"
import { DayPicker } from "react-dates"

module.exports = {

  categ : "Form fields",

  construct : DayPicker,

  path : "react-dates",

  link : "https://github.com/airbnb/react-dates",

  states : { default : () => <DayPicker/> }
}
