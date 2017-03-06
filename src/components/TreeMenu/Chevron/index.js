import React, { PropTypes } from "react"
import CaretIcon from "react-icons/lib/fa/caret-right"
import style from "./style.css"


export default function Chevron({ collapsed }) {

  return <CaretIcon className={ collapsed ? style.closed : style.open } size={ 13 }/>

}

Chevron.propTypes = { collapsed : PropTypes.bool }
