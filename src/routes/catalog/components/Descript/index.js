import React, { PropTypes } from "react"
import Section from "../Section/"
import Code from "components/Code"
import Properties from "./Properties"
import { getDisplayName } from "lib/react/utils"

const Descript = ({ construct, description, state, path, externalLink, namedImport }) => {

  let linkSection = null

  const name = getDisplayName(construct)

  if (externalLink) {

    linkSection = (
      <Section title="Plus d'infos">
        <a href={ externalLink } target="_blank" rel="noopener noreferrer">
          { externalLink }
        </a>
      </Section>
    )

  }

  return (
    <section>
      <h2>Composant { name }</h2>
      <p>{ description || "composant " + name }</p>

      { state }

      <Section title="Chemin">
        <Code>
          { `import ${namedImport ? "{ " + name + " }" : name} from "${path || "components/" + name}"` }
        </Code>
      </Section>

      <Properties construct={ construct }/>

      { linkSection }

    </section>
  )

}

Descript.propTypes = {
  construct : PropTypes.func.isRequired,
  description : PropTypes.string,
  namedImport : PropTypes.bool,
  state : PropTypes.node,
  path : PropTypes.string,
  externalLink : PropTypes.string
}


export default Descript
