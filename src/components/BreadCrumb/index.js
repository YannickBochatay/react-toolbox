import React, { PropTypes } from "react"
import { connect } from "react-redux"
import { Link } from "react-router"

export function BreadCrumb(props) {

  const rest = { ...props }

  for (const n in BreadCrumb.propTypes) delete rest[n]

  const elmts = props.path.split(/\//)

  if (elmts[0] === "#") elmts.splice(0, 1)

  let path = ""

  return (
    <ol { ...rest } className={ "breadcrumb " + props.className }>{

      elmts.map((elmt, i) => (
        <li key={ i }>
          <Link to={ path += "/" + elmt }>
            { elmt }
          </Link>
        </li>
      ))

    }</ol>
  )

}

BreadCrumb.propTypes = {
  path : PropTypes.string.isRequired,
  className : PropTypes.string
}

function mapStateToProps(state) {

  const data = state.routing

  return { path : data && data.locationBeforeTransitions.pathname }

}

export default connect(mapStateToProps)(BreadCrumb)
