import React, { PropTypes } from "react"
import BsModal from "react-bootstrap/lib/Modal"
import Modal from "components/Modal"
import Button from "react-bootstrap/lib/Button"
import Intl from "components/Intl"


class Alert extends Modal {

  constructor(props) {

    super(props)

    this.handleClose = this.handleClose.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)

  }

  handleClose() {

    this.hide()

    if (this.props.onClose) this.props.onClose()

  }

  handleKeyPress(e) {

    if (this.state.visible && (e.key === "Enter" || e.key === "Escape")) this.handleClose()

  }

  componentDidMount() {

    document.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount() {

    document.addEventListener("keydown", this.handleKeyPress)
  }

  render() {

    const { visible } = this.state
    const { children, ...rest } = this.props

    delete rest.onClose

    return (
      <BsModal
        { ...rest }
        onHide={ this.handleClose }
        show={ visible }
      >
        <BsModal.Body>
          { children }
        </BsModal.Body>
        <BsModal.Footer><Button bsStyle="primary" onClick={ this.handleClose }>
          <Intl text="OK"/>
        </Button></BsModal.Footer>
      </BsModal>
    )

  }

}

Alert.propTypes = {
  ...Alert.propTypes,
  onClose : PropTypes.func
}

export default Alert
