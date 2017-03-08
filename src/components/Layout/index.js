import React, { Component, PropTypes } from "react"
import DocumentTitle from "components/DocumentTitle/"
import Scrollbar from "components/Scrollbar"


const styles = {
  container : {
    display : "flex",
    flex : 1
  },
  sidebar : {
    overflowY : "auto",
    color : "white",
    background : "#263238",
    height : "100vh"
  },
  main : {
    flex : 1,
    overflowY : "auto",
    padding : "5px 20px 20px 20px",
    margin : "0 1% 1% 1%",
    backgroundColor : "rgba(255, 255, 255, 0.9)",
    borderRadius : 3,
    height : "100vh"
  }
}

export default class Main extends Component {

  componentDidMount() {

    const { onMount } = this.props

    if (onMount) onMount()

  }

  render() {

    const { children, sidebar, sidebarRight, sidebarWidth, sidebarRightWidth, title, style, ...rest } = this.props

    delete rest.onMount

    let rightBar = null

    if (sidebarRight) {

      rightBar = (
        <Scrollbar tag="aside" style={ { ...styles.sidebar, width : sidebarRightWidth } }>
          { sidebarRight }
        </Scrollbar>
      )

    }

    return (
      <DocumentTitle title={ title || "" }>

        <div { ...rest } style={ { ...styles.container, ...style } }>

          <Scrollbar tag="aside" style={ { ...styles.sidebar, width : sidebarWidth } }>
            { sidebar }
          </Scrollbar>

          <div style={ styles.main }>
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
  style : PropTypes.object
}

Main.defaultProps = {
  sidebarWidth : 230,
  sidebarRightWidth : 230
}

