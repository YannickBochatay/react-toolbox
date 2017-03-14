import React, { PropTypes } from "react"
import BsModal from "react-bootstrap/lib/Modal"
import Modal from "../Modal"
import Button from "react-bootstrap/lib/Button"
import Intl from "../Intl"


class Confirm extends Modal {

  constructor(props) {

    super(props)

    this.handleCancel = this.handleCancel.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)

  }

  handleCancel() {

    this.hide()
    this.props.onCancel()

  }

  handleConfirm() {

    this.hide()
    this.props.onConfirm()

  }

  handleKeyPress(e) {

    if (!this.state.visible) return

    if (e.key === "Escape") this.handleCancel()
    else if (e.key === "Enter") {

      this.props.defaultChoice === "cancel" ? this.handleCancel() : this.handleConfirm()

    }

  }

  componentDidMount() {

    document.addEventListener("keydown", this.handleKeyPress)

  }

  componentWillUnmount() {

    document.addEventListener("keydown", this.handleKeyPress)

  }

  render() {

    const { visible } = this.state
    const { children, defaultChoice, ...rest } = this.props

    delete rest.onConfirm
    delete rest.onCancel

    return (
      <BsModal
        { ...rest }
        onHide={ this.handleCancel }
        show={ visible }
      >
        <BsModal.Body>
          { children }
        </BsModal.Body>
        <BsModal.Footer>
          <Button bsStyle={ defaultChoice === "confirm" ? "default" : "primary" } onClick={ this.handleCancel }>
            <Intl>no</Intl>
          </Button>
          &nbsp;
          <Button bsStyle={ defaultChoice === "cancel" ? "default" : "primary" } onClick={ this.handleConfirm }>
            <Intl>yes</Intl>
          </Button>
        </BsModal.Footer>
      </BsModal>
    )

  }

}

Confirm.propTypes = {
  ...Confirm.propTypes,
  onCancel : PropTypes.func.isRequired,
  onConfirm : PropTypes.func.isRequired,
  defaultChoice : PropTypes.oneOf(["cancel", "confirm"])
}

Confirm.defaultProps = {
  ...Confirm.defaultProps,
  defaultChoice : "confirm",
  onCancel() {}
}

export default Confirm
