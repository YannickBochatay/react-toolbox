import React from "react"
import { DocumentTitle } from "./"

module.exports = {

  construct : DocumentTitle,

  path : "react-toolbox/lib/DocumentTitle",

  states : { default : () => <DocumentTitle title="Hello"/> }
}
