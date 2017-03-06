import React from "react"
import { FullScreenIcon } from "./"

module.exports = {

  construct : FullScreenIcon,

  states : {

    default : () => <FullScreenIcon/>,

    customStyle : () => <FullScreenIcon style={ { color : "violet", fontSize : 50 } }/>

  }
}
