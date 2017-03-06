/* eslint react/jsx-no-bind:0 no-alert:0*/

import React from "react"
import MouseTooltip from "./"

const style = {
  width : 400,
  height : 400,
  backgroundColor : "pink"
}

module.exports = {

  categ : "UI Components",

  construct : MouseTooltip,

  states : {

    default : () => <MouseTooltip content="hello world" style={ style }/>,

    onMouseMove : () => (
      <MouseTooltip
        content="hello world"
        onMove={ pos => console.log(pos.x + "," + pos.y) }
        style={ style }
      />
    )

  }
}
