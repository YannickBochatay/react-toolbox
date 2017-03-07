import React from "react"
import FlagIcons from "./"

let flagIcons = require.context("flag-icon-css/flags/4x3/", false, /.*.svg$/)

const keys = flagIcons.keys()

flagIcons = keys.map(flagIcons)


module.exports = {

  categ : "Icones",

  name : "FlagIcons",

  construct : FlagIcons,

  path : "http://flag-icon-css.lip.is/",

  states : {

    Flags : () => (
      <div>
        {
          flagIcons.map( (src, i) => (
            <img
              src={ src }
              style={ { margin : 20, width : 80 } }
              key={ "flagIcon" + i }
              title={ "flag-icon-css/flags/4x3/" + keys[i].replace(/\.\//, "") }
            />
          ) )
        }
      </div>
    )
  }
}
