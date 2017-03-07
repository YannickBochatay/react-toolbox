import React, { PropTypes } from "react"
import Layout from "components/Layout"
import Sidebar from "./Sidebar"

const Main = ({ children }) => (
  <Layout sidebar={ <Sidebar/> }>
    { children || <h2>Welcome to react-toolbox</h2> }
  </Layout>
)

Main.propTypes = { children : PropTypes.node }

export default Main