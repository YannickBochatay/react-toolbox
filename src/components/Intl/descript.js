import React from "react"
import Intl from "./"

module.exports = {

  construct : Intl,

  path : "components/Intl",

  states : {

    default : () => <Intl text="Hello world"/>,

    ucfirst : () => <Intl text="Hello world" ucfirst/>,

    ucwords : () => <Intl text="Hello world" ucwords/>,

    customTag : () => <Intl text="Hello world" tag="pre"/>
  }
}
