import React from "react"
import Slider from "rc-slider"

module.exports = {

  categ : "Form fields",

  construct : Slider,

  link : "https://github.com/react-component/slider",

  path : "rc-slider",

  states : {

    default : () => <Slider min={ 0 } max={ 20 } defaultValue={ 3 } />,

    marks : () => <Slider min={ 0 } max={ 20 } marks={ { 5 : "5°C", 7 : "7°C", 9 : "9°C" } } />,

    range : () => (
      <Slider
        min={ 0 }
        max={ 20 }
        range
        defaultValue={ [3, 12] }
      />
    ),

    pushable : () => (
      <Slider
        min={ 0 }
        max={ 20 }
        range={ 3 }
        defaultValue={ [3, 6, 12] }
        pushable
      />
    ),

    vertical : () => <div style={ { height : 100 } }>
      <Slider min={ 0 } max={ 20 } vertical />
    </div>
  }
}
