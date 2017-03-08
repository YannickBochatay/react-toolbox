import descriptions from "./descriptions"
import { getDisplayName } from "lib/jsx-serializer"

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
    icon : "•",
    link : link + firstState,
    items : []
  }

  for (const state in descript.states) {

    item.items.push({
      icon : "↳",
      label : state,
      link : link + state
    })

  }

  return item

}

export default descriptions.map(createItem)
