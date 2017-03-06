import React from "react"
import RCTreeSelect from "rc-tree-select"

function buildEchs(...echs) {

  return echs.map(ech => {

    const jech = "J+" + ech

    return {
      label : jech,
      value : jech,
      key : jech
    }

  })

}

const treeData = [{
  label : "CDP",
  value : "CDP",
  key : "CDP",
  children : [{
    label : "horaire",
    value : "CDPH",
    key : "CDPH",
    children : buildEchs(1, 2, 3)
  }, {
    label : "quotidien",
    value : "CDPQ",
    key : "CDPQ",
    children : buildEchs(1, 2, 3)
  }]
}, {
  label : "Modèle",
  value : "modele",
  key : "modele",
  children : [{
    label : "Arpège",
    value : "arpege",
    key : "arpege",
    children : buildEchs(1, 2, 3)
  }, {
    label : "CEP",
    value : "cep",
    key : "cep",
    children : buildEchs(1, 2, 3)
  }]
}]


export default class TreeSelect extends React.Component {

  constructor(props) {

    super(props)

    this.state = { value : null }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(value) {

    this.setState({ value })

  }

  render() {

    return (
      <RCTreeSelect style={ { width : 300 } }
        value={ this.state.value }
        onChange={ this.handleChange }
        { ...this.props }
      />
    )

  }
}

RCTreeSelect.displayName = "TreeSelect"

module.exports = {

  categ : "Form fields",

  construct : RCTreeSelect,

  path : "rc-tree-select",

  link : "http://react-component.github.io/tree-select/",

  states : { default : () => <TreeSelect treeData={ treeData }/> }
}
