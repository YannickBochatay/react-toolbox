import React from "react"
import { BreadCrumb } from "./"

module.exports = {

  categ : "UI components",

  construct : BreadCrumb,

  path : "react-toolbox/lib/BreadCrumb",

  description : "Fil d'ariane (aide à la navigation)",

  states : { default : () => <BreadCrumb path="path/to/the/current/page"/> }

}
