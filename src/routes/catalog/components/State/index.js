import React, { PropTypes, Component } from "react"
import Code from "components/Code"
import Section from "../Section/"
import { elmtToJSX } from "lib/jsx-serializer"
import classNames from "./style.css"
import Button from "react-bootstrap/lib/Button"
import { ucfirst } from "jsyg-strutils"

class Descript extends Component {

  constructor(props) {

    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = { hideComponent : true }

  }

  toggleComponent() {

    this.setState({ hideComponent : !this.state.hideComponent })

  }

  handleClick() {

    this.toggleComponent()

  }

  render() {

    const { component, description, hideComponent } = this.props

    let content

    if (hideComponent && this.state.hideComponent) {

      content = (
        <Button onClick={ this.handleClick } bsStyle="primary">
          Afficher le composant
        </Button>
      )

    } else {

      content = (
        <div className={ classNames.renderer }>
          { component }
        </div>
      )

    }

    return (
      <section>
        <h3>{ ucfirst(description) }</h3>
        <br/>
        <br/>
        <Section title="Rendu">
          { content }
        </Section>
        <Section title="Code">
          <Code>
            { elmtToJSX(component) }
          </Code>
        </Section>
      </section>
    )

  }
}

Descript.propTypes = {
  component : PropTypes.node,
  description : PropTypes.string,
  hideComponent : PropTypes.bool
}


export default Descript
