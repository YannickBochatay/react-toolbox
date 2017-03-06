import React, { Component, PropTypes } from "react"
import RCCascadeSelect from "rc-cascade-select"

function simulateData(value) {

  if (!value) {

    return [{
      name : "CDP",
      value : "CDP"
    }, {
      name : "Modèle",
      value : "modele"
    }]

  } else if (value === "CDP") {

    return [{
      name : "Horaire",
      value : "CDPH"
    }, {
      name : "Quotidien",
      value : "CDPQ"
    }]

  } else if (value === "modele") {

    return [{
      name : "Arpège",
      value : "arpege"
    }, {
      name : "CEP",
      value : "cep"
    }]

  } else {

    return [{
      name : "J+1",
      value : "J+1"
    }, {
      name : "J+2",
      value : "J+2"
    }, {
      name : "J+3",
      value : "J+3"
    }]

  }

}

function loadData(value, callback) {

  callback(null, simulateData(value))

}

class CascadeSelect extends Component {

  constructor(props) {

    super(props)

    this.state = { value : [] }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(value) {

    this.setState({ value })

  }

  render() {

    return (
      <RCCascadeSelect
        value={ this.state.value }
        allText=""
        onChange={ this.handleChange }
        { ...this.props }
      >
        <select className="form-control" key="select1"/>
        <select className="form-control" key="select2"/>
        <select className="form-control" key="select3"/>
      </RCCascadeSelect>
    )

  }

}

CascadeSelect.propTypes = { children : PropTypes.node }


module.exports = {

  categ : "Form fields",

  construct : RCCascadeSelect,

  path : "rc-cascade-select",

  link : "http://react-component.github.io/cascade-select/",

  states : {

    default : () => (
      <CascadeSelect loader={ loadData }/>
    )
  }
}
