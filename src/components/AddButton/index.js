import React, { PropTypes } from "react"
import Button from "react-bootstrap/lib/Button"
import Glyphicon from "react-bootstrap/lib/Glyphicon"
import OverlayTrigger from "react-bootstrap/lib/OverlayTrigger"
import Tooltip from "react-bootstrap/lib/Tooltip"

const styles = {
  container : {
    borderRadius : "50%",
    boxShadow : "0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24)"
  },
  button : { borderRadius : "50%" },
  normal : { padding : "10px 15px" },
  small : { padding : "5px 9px" }
}


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
      <Button bsStyle={ bsStyle || "danger" } style={ { ...styles.button, ...styles[size] } }>
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

AddButton.defaultProps = { size : "normal" }

export default AddButton
