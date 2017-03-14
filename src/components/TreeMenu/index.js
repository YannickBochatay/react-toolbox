import React, { Component, PropTypes } from "react"
import Item from "./Item/"


const styles = {
  ul : {
    margin : 0,
    padding : 0,
    listStyleType : "none"
  },
  dark : { backgroundColor : "#263238" },
  sub : { paddingLeft : 22 }
}

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

          <ul style={ { ...styles.ul, ...styles.sub } }>
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

    const { style, dark, ...rest } = this.props

    for (const n in TreeMenu.propTypes) delete rest[n]

    return (
      <ul { ...rest } style={ { ...styles.ul, ...(dark ? styles.dark : null), ...style } }>
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
