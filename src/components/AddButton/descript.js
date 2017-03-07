import React from "react"
import AddButton from "./"

module.exports = {

  categ : "UI components",

  construct : AddButton,

  path : "components/AddButton",

  description : "Simple Add Button (inspired by Material Design)",

  states : { default : () => <AddButton>New Element</AddButton> }

}
