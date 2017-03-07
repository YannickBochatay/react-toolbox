import React from "react"
import Intl from "components/Intl/"
import DocumentTitle from "components/DocumentTitle"
import Button from "react-bootstrap/lib/Button"
import { Link } from "react-router"
import classNames from "./style.css"

const NotFound = () => (

  <DocumentTitle title="Page not found">
    <article className={ classNames.article }>
      <Intl tag="h1" text="page not found" ucfirst/>
      <Link to="catalog">
        <Button bsStyle="primary">
          « <Intl text="back to catalog" ucfirst/>
        </Button>
      </Link>
    </article>
  </DocumentTitle>

)

export default NotFound
