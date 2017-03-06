import React, { PropTypes } from "react" // eslint-disable-line import/no-extraneous-dependencies
import classNames from "./style.css"

const Spinner = ({ fadeIn, className, color, size, ...rest }) => {

  let fullClassName = ""

  if (fadeIn) fullClassName += classNames.fadein
  if (className) fullClassName += " " + className

  const style = { backgroundColor : color, width : size, height : size }

  return (
    <div { ...rest } className={ fullClassName }>
      <div className={ classNames.threebounce1 } style={ style } />
      <div className={ classNames.threebounce2 } style={ style } />
      <div className={ classNames.threebounce3 } style={ style } />
    </div>
  )
}

Spinner.propTypes = {
  fadeIn : PropTypes.bool,
  className : PropTypes.string,
  color : PropTypes.string,
  size : PropTypes.number
}

Spinner.defaultProps = {
  color : "#333",
  size : 18
}

export default Spinner
