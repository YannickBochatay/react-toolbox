import React, { PropTypes } from "react"
import Button from "react-bootstrap/lib/Button"
import Glyphicon from "react-bootstrap/lib/Glyphicon"
import OverlayTrigger from "react-bootstrap/lib/OverlayTrigger"
import Tooltip from "react-bootstrap/lib/Tooltip"
// import Ripples from "components/Ripples"
import classNames from "./style.css"

const AddButton = ({ children, bsStyle, size, ...rest }) => (

  <div { ...rest }>
    { /* <Ripples className={ classNames.container }> */ }
    <OverlayTrigger
      placement="bottom"
      delay={ 200 }
      overlay={
        <Tooltip id={ "tooltip" + Math.random() }>
          { children || "new" }
        </Tooltip>
      }
    >
      <Button bsStyle={ bsStyle || "danger" } className={ classNames.button + " " + classNames[size] }>
        <Glyphicon glyph="plus"/>
      </Button>
    </OverlayTrigger>
    { /* </Ripples> */ }
  </div>
)

AddButton.propTypes = {
  className : PropTypes.string,
  children : PropTypes.node,
  bsStyle : PropTypes.oneOf(["default", "primary", "warning", "danger", "success"]),
  size : PropTypes.oneOf(["normal", "small"])
}

AddButton.defaultProps = {
  size : "normal"
}

export default AddButton
