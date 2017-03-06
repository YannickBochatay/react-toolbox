import React from "react"
import Ripples from "./"

module.exports = {

  categ : "Presentation",

  construct : Ripples,

  states : {

    default : () => (
      <Ripples>
        <div style={ {
          padding : 20,
          display : "inline-block",
          cursor : "pointer",
          border : "1px solid #ddd"
        } }>Cliquez sur moi</div>
      </Ripples>
    )

  }
}
