import React from "react"
import Dial from "./"

module.exports = {

  categ : "UI components",

  construct : Dial,

  descript : "Cadrans",

  path : "react-toolbox/lib/Dial",

  link : "http://anthonyterrien.com/knob/",

  states : {

    default : () => <Dial/>,

    value : () => <Dial value={ 90 }/>,

    bounds : () => <Dial min={ 50 } max={ 180 }/>,

    steps : () => <Dial step={ 5 }/>,

    angles : () => <Dial angleOffset={ -90 } angleArc={ 180 }/>,

    readOnly : () => <Dial value={ 59 } readOnly/>,

    rotation : () => <Dial rotation="anticlockwise"/>,

    styles : () => <Dial thickness={ 0.2 } lineCap="round" font="console"/>,

    colors : () => <Dial inputColor="pink" bgColor="#AFA" fgColor="pink"/>,

    displayPrevious : () => <Dial displayPrevious/>

  }
}
