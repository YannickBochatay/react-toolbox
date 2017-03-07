import React from "react"
import descriptions from "./descriptions"
import Glyphicon from "react-bootstrap/lib/Glyphicon"
import { getDisplayName } from "lib/react/utils"


function getFirstState(states) {

  for (const n in states) return n

  return ""

}

function createItem(descript) {

  const name = getDisplayName(descript.construct)

  const firstState = getFirstState(descript.states)

  const link = "/catalog/" + name + "/"

  const item = {
    label : name,
    collapsed : true,
    icon : <Glyphicon glyph="asterisk"/>,
    link : link + firstState,
    items : []
  }

  for (const state in descript.states) {

    item.items.push({
      icon : <Glyphicon glyph="menu-right" style={ { fontSize : 8 } }/>,
      label : state,
      link : link + state
    })

  }

  return item

}

export default descriptions.map(createItem)
