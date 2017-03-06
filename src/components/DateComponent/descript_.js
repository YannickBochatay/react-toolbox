import React from "react"
import Connected, { DateComponent } from "./"

module.exports = {

  categ : "Production Components",

  construct : DateComponent,

  description : "Composant date permettant l'affichage de dates relatives",

  path : "components/Date",

  states : {

    default : {

      description : "Composant par défaut",

      render : () => <Connected/>

    },

    tomorrow : {

      description : "Date calée à J+1",

      render : () => <Connected interval={ { days : 1 } }/>
    },

    editionMode : {

      description : "Composant en mode édition",

      render : () => <Connected editionMode/>
    }

  }

}
