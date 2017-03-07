import React from "react"
import Intl from "components/Intl/"
import Button from "react-bootstrap/lib/Button"
import { Link } from "react-router"

export default () => (
  <div>
    <Intl tag="h1" text="Welcome to react-toolbox" ucfirst/>
    <Link to="catalog">
      <Button bsStyle="primary">
        » <Intl text="go to catalog" ucfirst/>
      </Button>
    </Link>
  </div>
)