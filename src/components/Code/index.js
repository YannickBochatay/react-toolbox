import React, { PropTypes } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import docco from "react-syntax-highlighter/dist/styles/docco"

export function Code({ children, language }) {

  return (
    <SyntaxHighlighter language={ language } style={ docco }>
      { children }
    </SyntaxHighlighter>
  )

}

Code.propTypes = {
  language : PropTypes.string.isRequired,
  children : PropTypes.node
}

Code.defaultProps = { language : "jsx" }

export default Code
