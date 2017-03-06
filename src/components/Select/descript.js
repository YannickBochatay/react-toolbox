import React from "react"
import RCSelect from "react-select"

const options = [
    { value : "one", label : "One" },
    { value : "two", label : "Two" },
    { value : "three", label : "Three" }
]

class Select extends React.Component {

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
      <RCSelect
        name="form-field-name"
        value={ this.state.value }
        onChange={ this.handleChange }
        { ...this.props }
      />
    )

  }
}


module.exports = {

  categ : "Form fields",

  construct : RCSelect,

  path : "react-select",

  link : "http://jedwatson.github.io/react-select/",

  states : {

    default : () => <Select options={ options }/>,

    multi : () => <Select options={ options } multi/>

  }
}
