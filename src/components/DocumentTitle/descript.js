import React from "react"
import { DocumentTitle } from "./"

module.exports = {

  construct : DocumentTitle,

  path : "components/DocumentTitle",

  states : { default : () => <DocumentTitle title="Hello"/> }
}
