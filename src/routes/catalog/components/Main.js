import React, { PropTypes } from "react"
import Layout from "components/Layout"
import Sidebar from "./Sidebar"

import NotifSystem, { reducer, STATE_PROPERTY } from "components/NotifSystem"
import { injectReducers } from "store"

injectReducers({ [STATE_PROPERTY] : reducer })


const Main = ({ children }) => (
  <div>
    <Layout sidebar={ <Sidebar/> }>
      { children || <h2>Welcome to react-toolbox</h2> }
    </Layout>
    <NotifSystem/>
  </div>
)

Main.propTypes = { children : PropTypes.node }

export default Main
