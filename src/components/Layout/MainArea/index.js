import React, { PropTypes } from "react"
import classNames from "./style.css"

export const MainArea = ({ children, ...rest }) => (
  <div { ...rest } className={ classNames.main }>
    { children }
  </div>
)

MainArea.propTypes = {
  children : PropTypes.node
}

export default MainArea
