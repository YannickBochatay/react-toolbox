import React, { PropTypes } from "react"
import Descript from "./components/Descript"
import State from "./components/State"
import Main from "./components/Main"

function createRoute(item) {

  const construct = item.construct || item.constructor
  const description = item.descript || item.description
  const link = item.link || item.externalLink
  const name = (construct.displayName || construct.name).replace(/Connect\((\w+)\)/g, "$1")

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
