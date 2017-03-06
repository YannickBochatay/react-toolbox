import React from "react"
import WaterLoading from "./"

module.exports = {

  categ : "Presentation",

  construct : WaterLoading,

  externalLink : "",

  states : {

    default : () => <WaterLoading percent={ 40 }/>,

    "extra-small" : () => <WaterLoading percent={ 60 } size="xs"/>,

    small : () => <WaterLoading percent={ 60 } size="sm"/>,

    large : () => <WaterLoading percent={ 60 } size="lg"/>,

    custom : () => <WaterLoading percent={ 60 } size={ 150 }/>,

    animated : () => <WaterLoading percent={ 40 } size="lg" animate/>,

    slowAnimation : () => (
      <WaterLoading
        percent={ 60 }
        size="lg"
        animate
        duration={ 5000 }
      />
    )
  }
}
