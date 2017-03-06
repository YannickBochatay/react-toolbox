import React, { Component, PropTypes } from "react"
import Item from "./Item/"
import classNames from "./style.css"

export default class TreeMenu extends Component {

  constructor(props) {

    super(props)

    this.renderItem = this.renderItem.bind(this)

  }

  renderItem(item, i) {

    const { link, label, icon, collapsed, items, onClick } = item
    const { dark, classItem } = this.props

    if (items && items.length > 0) {

      return (

        <Item key={ "item" + i }
          link={ link }
          label={ label }
          icon={ icon }
          onClick={ onClick }
          collapsed={ collapsed }
          dark={ dark }
          className={ classItem }
          collapsible
        >

          <ul className={ classNames.ul + " " + classNames.sub }>
            { items.map(this.renderItem) }
          </ul>

        </Item>
      )

    } else {

      return (
        <Item
          key={ "item" + i }
          link={ link }
          icon={ icon }
          label={ label }
          dark={ dark }
          className={ classItem }
          onClick={ onClick }
        />
      )

    }

  }

  render() {

    const htmlProps = { ...this.props }

    for (const n in TreeMenu.propTypes) delete htmlProps[n]

    let className = classNames.ul

    if (this.props.dark) className += " " + classNames.dark

    if (this.props.className) className += " " + this.props.className

    return (
      <ul { ...htmlProps } className={ className }>
       { this.props.items.map(this.renderItem) }
      </ul>
    )

  }

}

TreeMenu.propTypes = {
  style : PropTypes.object,
  items : PropTypes.array.isRequired,
  className : PropTypes.string,
  classItem : PropTypes.string,
  dark : PropTypes.bool,
  uniqueItemShown : PropTypes.bool
}
