import React from "react"
import DateTimePicker from "components/DateTimePicker"

module.exports = {

  categ : "Form fields",

  construct : DateTimePicker,

  path : "components/DateTimePicker",

  description : "sélectionneur de dates",

  externalLink : "http://eonasdan.github.io/bootstrap-datetimepicker/",

  states : { default : () => <div style={ { position : "relative" } }><DateTimePicker/></div> }

}
