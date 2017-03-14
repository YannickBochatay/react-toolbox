import React from "react"
import Viewer from "./"
import src from "images/satellite.jpg"

module.exports = {

  categ : "Widgets",

  construct : Viewer,

  path : "react-toolbox/lib/Viewer",

  description : "composant Viewer",

  states : {

    default : () => (
      <Viewer
        width={ 750 }
        height={ 500 }
        initialScale={ 1.5 }
      >
        <img src={ src } width={ 750 } height={ 500 } />
      </Viewer>
    )

  }
}
