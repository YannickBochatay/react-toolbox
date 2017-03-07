import React, { PropTypes } from "react"
import classNames from "./style.css"


export default function Chevron({ collapsed }) {

  return <span className={ collapsed ? classNames.closed : classNames.open }>▶</span>

}

Chevron.propTypes = { collapsed : PropTypes.bool }
