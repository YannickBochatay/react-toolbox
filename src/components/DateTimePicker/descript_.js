import React from "react"
import DateTimePicker from "../DateTimePicker"

module.exports = {

  categ : "Form fields",

  construct : DateTimePicker,

  path : "react-toolbox/lib/DateTimePicker",

  description : "sélectionneur de dates",

  externalLink : "http://eonasdan.github.io/bootstrap-datetimepicker/",

  states : { default : () => <div style={ { position : "relative" } }><DateTimePicker/></div> }

}
