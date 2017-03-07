import React, { Component, PropTypes } from "react"
import { hideClouds } from "components/Clouds/ducks"
import classNames from "./style.css"
import { connect } from "react-redux"
import DocumentTitle from "components/DocumentTitle/"
import Scrollbar from "components/Scrollbar"


class Main extends Component {

  componentDidMount() {

    const { onMount } = this.props

    if (onMount) onMount()

  }

  render() {

    const { children, sidebar, sidebarRight, sidebarWidth, sidebarRightWidth, title, transparent, className, ...rest } = this.props

    delete rest.onMount

    let rightBar = null

    if (sidebarRight) {

      rightBar = (
        <Scrollbar className={ classNames.sidebar } tag="aside" style={ { width : sidebarRightWidth } }>
          { sidebarRight }
        </Scrollbar>
      )

    }

    return (
      <DocumentTitle title={ title || "" }>

        <div { ...rest } className={ classNames.container + (className ? " " + className : "") /* + " animated zoomIn" */ }>

          <Scrollbar className={ classNames.sidebar } tag="aside" style={ { width : sidebarWidth } }>
            { sidebar }
          </Scrollbar>

          <div className={ transparent ? classNames.mainTransparent : classNames.main }>
            { children }
          </div>

          { rightBar }

        </div>

      </DocumentTitle>
    )

  }

}

Main.propTypes = {
  sidebar : PropTypes.node,
  sidebarWidth : PropTypes.number,
  sidebarRight : PropTypes.node,
  sidebarRightWidth : PropTypes.number,
  onMount : PropTypes.func,
  children : PropTypes.node,
  title : PropTypes.string,
  transparent : PropTypes.bool,
  className : PropTypes.string
}

Main.defaultProps = {
  sidebarWidth : 230,
  sidebarRightWidth : 230
}


const mapDispatchToProps = (dispatch) => ({

  onMount() {

    dispatch(hideClouds())

  }
})

export default connect(null, mapDispatchToProps)(Main)

