import React, { PropTypes } from "react"
import classNames from "./style.css"
import Scrollbar from "components/Scrollbar"
import Header from "./Header"
import MainArea from "./MainArea"
import Drawer from "components/Drawer"

const Main = ({
  children,
  header,
  drawer,
  sidebar,
  sidebarRight,
  sidebarWidth,
  sidebarRightWidth,
  className,
  ...rest
}) => {

  for (const n in Main.propTypes) delete rest[n]
  delete rest.dispatch

  let drawerMenu = null

  if (drawer) {
    drawerMenu = (
      <Drawer pageWrapId="pageWrap" outerContainerId="outerContainer">
        { drawer }
      </Drawer>
    )
  }

  let sidebarMenu = null

  if (sidebar) {
    sidebarMenu = (
      <Scrollbar className={ classNames.sidebar } tag="aside" style={ { minWidth : sidebarWidth } }>
        { sidebar }
      </Scrollbar>
    )
  }

  let sidebarRightMenu = null

  if (sidebarRight) {
    sidebarRightMenu = (
      <Scrollbar className={ classNames.sidebar } tag="aside" style={ { minWidth : sidebarRightWidth } }>
        { sidebarRight }
      </Scrollbar>
    )
  }

  return (
    <div id="outerContainer">
      { drawerMenu }
      <div className={ classNames.pageWrap + " " + classNames.background } id="pageWrap">
        <Header>{ header }</Header>
        <div className={ classNames.container + (className ? " " + className : "") }>
          { sidebarMenu }
          <MainArea>
            { children }
          </MainArea>
          { sidebarRightMenu }
        </div>
      </div>
    </div>
  )

}

Main.propTypes = {
  header : PropTypes.node,
  drawer : PropTypes.node,
  sidebar : PropTypes.node,
  sidebarWidth : PropTypes.number,
  sidebarRight : PropTypes.node,
  sidebarRightWidth : PropTypes.number,
  children : PropTypes.node,
  contentTitle : PropTypes.string,
  className : PropTypes.string
}

Main.defaultProps = {
  sidebarWidth : 260,
  sidebarRightWidth : 260
}

export default Main
