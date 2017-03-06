import React, { Component, PropTypes } from "react"
import Modal from "react-bootstrap/lib/Modal"

export default class Dialog extends Component {

  constructor(props) {

    super(props)

    this.state = { visible : false }

    this.handleClose = this.handleClose.bind(this)

  }

  handleClose() {

    this.hide()

    if (this.props.onClose) this.props.onClose()

  }

  show() {

    this.setState({ visible : true })

  }

  hide() {

    this.setState({ visible : false })

  }


  render() {

    const { visible } = this.state
    const { title, children, footer, ...rest } = this.props

    return (
      <Modal
        { ...rest }
        onHide={ this.handleClose }
        show={ visible }
      >
        <Modal.Header closeButton>
          <Modal.Title>{ title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { children }
        </Modal.Body>
        { footer ? <Modal.Footer>{ footer }</Modal.Footer> : "" }
      </Modal>
    )

  }

}

Dialog.propTypes = {
  title : PropTypes.string,
  onClose : PropTypes.func,
  children : PropTypes.node,
  footer : PropTypes.node
}
