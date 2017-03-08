import React, { Component, PropTypes } from "react"
import { Link } from "react-router"
import Collapse from "react-bootstrap/lib/Collapse"

import Intl from "components/Intl/"

import Chevron from "../Chevron"
import classNames from "./style.css"


export default class Item extends Component {

  constructor(props) {

    super(props)

    this.state = { collapsed : true }

    this.toggle = this.toggle.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  toggle() {

    this.setState({ collapsed : !this.state.collapsed })

  }

  show() {

    this.setState({ collapsed : false })

  }

  hide() {

    this.setState({ collapsed : true })

  }

  componentWillMount() {

    if (this.props.collapsed !== this.state.collapsed) this.toggle()

  }


  createCollapse() {

    const { collapsed } = this.state

    return (
      <Collapse in={ !collapsed }>
        { this.props.children }
      </Collapse>
    )

  }

  createLabel() {

    return (
      <Intl
        text={ this.props.label }
        ucfirst
        className={ classNames.label }
      />
    )

  }

  createSpanIcon() {

    const { icon } = this.props

    if (icon && typeof icon === "object") {

      const className = classNames.icon + (icon.props.className ? " " + icon.props.className : "")

      return React.cloneElement(icon, { className })

    } else return <span className={ classNames.icon }>{ icon }</span>

  }

  createChevron() {

    const { collapsed } = this.state

    return <Chevron collapsed={ collapsed }/>

  }

  handleClick() {

    const { onClick, collapsible } = this.props

    if (collapsible) this.toggle()

    if (onClick) onClick()

  }

  getClassNameLink() {

    let className = classNames.link + " " + (this.props.dark ? classNames.dark : classNames.light)

    if (this.props.className) className += " " + this.props.className

    return className

  }

  createLink() {

    let { link, onClick } = this.props
    const spanIcon = this.createSpanIcon()
    const label = this.createLabel()

    if (link) {

      if (link.indexOf("http") === 0) {

        return (
          <a href={ link } className={ this.getClassNameLink() } onClick={ onClick }>
            { spanIcon } { label }
          </a>
        )

      } else {

        return (
          <Link to={ link } className={ this.getClassNameLink() } onClick={ onClick }>
            { spanIcon } { label }
          </Link>
        )

      }

    } else {

      return (
        <span role="button" className={ this.getClassNameLink() } onClick={ this.handleClick }>
          { spanIcon } { label }
        </span>
      )

    }

  }

  createCollapseLink() {

    const { link } = this.props
    const chevron = this.createChevron()
    const spanIcon = this.createSpanIcon()
    const label = this.createLabel()

    if (link) {

      if (link.indexOf("http") === 0) {

        return (
          <a href={ link } onClick={ this.handleClick } className={ this.getClassNameLink() }>
            { spanIcon } { label } { chevron }
          </a>
        )

      } else {

        return (
          <Link to={ link } onClick={ this.handleClick } className={ this.getClassNameLink() }>
            { spanIcon } { label } { chevron }
          </Link>
        )

      }

    } else {

      return (
        <span role="button" onClick={ this.handleClick } className={ this.getClassNameLink() }>
          { spanIcon } { label } { chevron }
        </span>
      )

    }

  }

  render() {

    let link, collapse

    if (this.props.collapsible) {

      link = this.createCollapseLink()
      collapse = this.createCollapse()

    } else {

      link = this.createLink()
      collapse = null

    }

    return (
      <li className={ classNames.li }>
        { link }
        { collapse }
      </li>
    )

  }

}

Item.propTypes = {
  onClick : PropTypes.func,
  link : PropTypes.string,
  label : PropTypes.string,
  icon : PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  collapsed : PropTypes.bool,
  collapsible : PropTypes.bool,
  children : PropTypes.node,
  dark : PropTypes.bool,
  className : PropTypes.string
}
