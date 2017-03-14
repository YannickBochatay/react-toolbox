import React from "react"
import Clock from "./"

module.exports = {

  categ : "UI components",

  description : "Affichage de l'heure courante à différents fuseaux horaires",

  construct : Clock,

  path : "react-toolbox/lib/Clock",

  states : {

    default : () => <Clock/>,

    paris : () => <Clock timezone="Europe/Paris" style={ { color : "red" } }/>,

    tokyo : () => <Clock timezone="Asia/Tokyo"/>
  }
}
