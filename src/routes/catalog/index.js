import React, { PropTypes } from "react"
import Descript from "./components/Descript"
import State from "./components/State"
import Main from "./components/Main"
import { getDisplayName } from "lib/jsx-serializer"

function createRoute(item) {

  const construct = item.construct || item.constructor
  const description = item.descript || item.description
  const link = item.link || item.externalLink
  const name = getDisplayName(construct)

  const Component = ({ children }) => (
    <Descript
      name={ name }
      construct={ construct }
      namedImport={ Boolean(item.namedImport) }
      description={ description }
      state={ children }
      path={ item.path }
      externalLink={ link }
    />
  )

  Component.propTypes = { children : PropTypes.node }

  return {

    path : name,

    component : Component,

    childRoutes : Object.keys(item.states).map(key => {

      const state = item.states[key]
      const descript = state.descript || state.description || key
      const render = state.render || state

      return {

        path : key,

        component : () => (
          <State
            description={ descript }
            component={ render() }
            hideComponent={ state.hideComponent }
          />
        )

      }

    })
  }

}


module.exports = {

  path : "catalog",

  component : Main,

  getChildRoutes(partialNextState, cb) {

    require.ensure([], require => {

      const items = require("./descriptions")

      cb(null, items.map(createRoute))

    })

  }
}
