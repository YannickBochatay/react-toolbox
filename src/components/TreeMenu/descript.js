import React from "react"
import TreeMenu from "./"

const items = [{ label : "Home", link : "/" }, {

  label : "Get started",
  collapsed : true,
  items : [{ label : "Installation" }, { label : "Code" }, {
    label : "Examples",
    collapsed : true,
    items : [{ label : "Basic" }, { label : "Persons" }, { label : "DataConfig" }]
  }, { label : "Tips" }]

}]

module.exports = {

  categ : "Presentation",

  construct : TreeMenu,

  states : {

    default : () => <TreeMenu items={ items }/>,

    dark : () => <TreeMenu items={ items } dark/>

  }
}
