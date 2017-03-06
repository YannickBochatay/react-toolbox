import React from "react"
import { Clouds } from "./"

module.exports = {

  categ : "Presentation",

  construct : Clouds,

  description : "Animation de nuages avec WebGL (ThreeJS)",

  path : "components/Clouds",

  states : {

    animated : () => <Clouds animate style={ { width : 500, height : 500 } }/>,

    freezed : () => <Clouds animate={ false } style={ { width : 500, height : 500 } }/>
  }
}
