/* eslint react/jsx-no-bind:0 no-alert:0*/

import React from "react"
import Pipette from "./"

const style = {
  width : 400,
  height : 400,
  backgroundColor : "pink"
}

class DynamicTooltip extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      x : 0,
      y : 0
    }

    this.handleMove = this.handleMove.bind(this)

  }

  handleMove(pos) {

    this.setState({ ...pos })

  }

  render() {

    return (
      <Pipette
        onMove={ this.handleMove }
        tooltip={ this.state.x + " " + this.state.y }
        style={ style }
      />
    )

  }
}

module.exports = {

  categ : "UI Components",

  construct : Pipette,

  states : {

    default : () => (
      <Pipette onClick={ pos => window.alert(pos.x + "," + pos.y) } style={ style }/>
    ),

    onMouseMove : () => (
      <Pipette onMouseMove={ pos => console.log(pos.x + "," + pos.y) } style={ style }/>
    ),

    tooltip : () => (
      <Pipette tooltip="hello world" style={ style }/>
    ),

    dynamicTooltip : () => <DynamicTooltip/>

  }
}
