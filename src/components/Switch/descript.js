import React from "react"
import RCSwitch from "rc-switch"

class Switch extends React.Component {

  constructor(props) {

    super(props)
    this.state = { disabled : false }

  }

  toggle() {

    this.setState({ disabled : !this.state.disabled })

  }

  render() {

    return <RCSwitch disabled={ this.state.disabled } { ...this.props }/>

  }
}

module.exports = {

  categ : "Form fields",

  construct : RCSwitch,

  link : "http://react-component.github.io/switch/",

  path : "rc-switch",

  states : {

    default : () => <Switch/>,

    onChange : () => <Switch onChange={ function log(value) {

      console.log(value)

    } }/>,

    initialValue : () => <Switch defaultChecked/>,

    labels : () => <Switch checkedChildren="On" unCheckedChildren="Off"/>

  }
}
