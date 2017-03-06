import React from "react"
import RCCascader from "rc-cascader"

const echsCE = [{
  label : "J+1",
  value : "J+1"
}, {
  label : "J+2",
  value : "J+2"
}, {
  label : "J+3",
  value : "J+3"
}]

const options = [{
  label : "CDP",
  value : "CDP",
  children : [{
    label : "horaire",
    value : "CDPH",
    children : echsCE
  }, {
    label : "quotidien",
    value : "CDPQ",
    children : echsCE
  }]
}, {
  label : "Modèle",
  value : "modele",
  children : [{
    label : "Arpège",
    value : "arpege",
    children : echsCE
  }, {
    label : "CEP",
    value : "cep",
    children : echsCE
  }]
}]

class Cascader extends React.Component {

  constructor(props) {

    super(props)

    this.state = { inputValue : "" }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(value, selectedOptions) {

    this.setState({ inputValue : selectedOptions.map(o => o.label).join(", ") })

  }

  render() {

    return (
      <RCCascader onChange={ this.handleChange } { ...this.props }>
        <input className="form-control" placeholder="choose data" value={ this.state.inputValue }/>
      </RCCascader>
    )

  }
}


module.exports = {

  categ : "Form fields",

  construct : RCCascader,

  path : "rc-cascader",

  link : "http://react-component.github.io/cascader/",

  states : {

    default : () => <Cascader options={ options } changeOnSelect/>,

    animation : () => <Cascader options={ options } changeOnSelect transitionName="slide-up"/>

  }
}
