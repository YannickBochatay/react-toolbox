import React from "react"
import Code from "./"

module.exports = {

  categ : "UI Components",

  construct : Code,

  descript : "Coloration syntaxique de code",

  externalLink : "https://github.com/conorhastings/react-syntax-highlighter",

  states : {

    default : () => <Code>{ "const Toto = (props) => <div>Toto</div>" }</Code>,

    python : () => <Code language="python">{ `def toto():
  return "Toto"` }
    </Code>

  }
}
