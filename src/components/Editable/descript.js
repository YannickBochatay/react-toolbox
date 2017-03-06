import React from "react"
import Editable from "./"

module.exports = {

  categ : "Form Fields",

  construct : Editable,

  link : "http://vitalets.github.io/x-editable/docs.html",

  states : {

    text : () => <Editable type="text" pk="1">Texte éditable</Editable>,

    textArea : () => <Editable type="textarea" pk="1">Bloc éditable</Editable>,

    select : () => (
      <Editable
        type="select"
        pk="1"
        source={ { 0 : "Liste déroulante", 1 : "Choix1", 2 : "Choix2", 3 : "Choix3" } }
      >
        Liste déroulante
      </Editable>
    ),

    date : () => <Editable type="date" pk="1">2016-08-05</Editable>,

    comboDate : () => <Editable type="combodate" pk="1">2016-08-05</Editable>

  }
}
