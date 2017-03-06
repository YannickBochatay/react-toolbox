import React, { Component } from "react"
import Modal from "./"
import Button from "react-bootstrap/lib/Button"

class ModalExample extends Component {

  constructor(props) {

    super(props)

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick() {

    this.dialog.show()

  }


  render() {

    return (
      <div>
        <Modal ref={ elmt => this.dialog = elmt } title="Modal example">Hello World</Modal>
        <Button onClick={ this.handleClick }>Show dialog</Button>
      </div>
    )

  }
}

module.exports = {

  categ : "UI components",

  construct : Modal,

  path : "react-bootstrap/lib/Modal",

  link : "https://react-bootstrap.github.io/components.html#modals",

  states : { default : () => <ModalExample/> }
}
