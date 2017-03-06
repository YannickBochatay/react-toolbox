import React from "react"
import Steps from "rc-steps"

module.exports = {

  categ : "UI Components",

  construct : Steps,

  path : "rc-steps",

  states : {

    default : () => (
      <Steps current={ 1 }>
        <Steps.Step title="first" />
        <Steps.Step title="second" />
        <Steps.Step title="third" />
      </Steps>
    )
  }
}
