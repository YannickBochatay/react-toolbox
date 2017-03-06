import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { closeDrawer, STATE_PROPERTY } from "./ducks"

const styles = {

  pageWrap(isOpen, width, right) {

    const offset = (width + 50) * (right ? -1 : 1)
    const angle = 15 * (right ? 1 : -1)

    return {
      transform : isOpen ? "" : `translate3d(${offset}px, 0, 0) rotateY(${angle}deg) scale(0.8)`,
      transformOrigin : right ? "100% 50%" : "0% 50%",
      transformStyle : "preserve-3d",
      transition : "all 0.5s"
    }

  },

  outerContainer(isOpen) {

    return {
      perspective : "1500px",
      overflow : isOpen ? "" : "hidden"
    }

  },

  overlay(isOpen) {

    return {
      position : "fixed",
      zIndex : 1,
      width : "100%",
      height : "100%",
      top : 0,
      left : 0,
      background : "rgba(0, 0, 0, 0.3)",
      opacity : isOpen ? 1 : 0,
      transform : isOpen ? "" : "translate3d(-100%, 0, 0)",
      transition : isOpen ? "opacity 0.3s" : "opacity 0.3s, transform 0s 0.3s"
    }

  },

  menuWrap(isOpen, width, right) {

    let transform

    if (isOpen) transform = ""
    else if (right) transform = "translate3d(100%, 0, 0)"
    else transform = "translate3d(-100%, 0, 0)"

    return {
      position : "fixed",
      top : 0,
      left : right ? "inherit" : 0,
      right : right ? 0 : "inherit",
      zIndex : 2,
      width,
      height : "100%",
      transform,
      transition : "all 0.5s"
    }

  },

  menu() {

    return {
      height : "100%",
      boxSizing : "border-box"
    }

  }

}

export class Drawer extends Component {

  constructor(props) {

    super(props)

    this.listenForClose = this.listenForClose.bind(this)

  }

  toggleMenu() {

    this.applyWrapperStyles()

  }

  // Applies component-specific styles to external wrapper elements.
  applyWrapperStyles() {

    this.handleExternalWrapper(this.props.pageWrapId, styles.pageWrap, true)
    this.handleExternalWrapper(this.props.outerContainerId, styles.outerContainer, true)

  }

  // Removes component-specific styles applied to external wrapper elements.
  clearWrapperStyles() {

    this.handleExternalWrapper(this.props.pageWrapId, styles.pageWrap, false)
    this.handleExternalWrapper(this.props.outerContainerId, styles.outerContainer, false)

  }

  // Sets or unsets styles on DOM elements outside the menu component.
  // This is necessary for correct page interaction with some of the menus.
  // Throws and returns if the required external elements don't exist,
  // which means any external page animations won't be applied.
  handleExternalWrapper(id, wrapperStyles, set) {

    const html = document.querySelector("html")
    const body = document.querySelector("body")
    const wrapper = document.getElementById(id)

    if (!wrapper) {

      console.error("Element with ID '" + id + "' not found")

      return

    }

    const builtStyles = wrapperStyles(this.props.isOpen, this.props.width, this.props.right)

    for (const prop in builtStyles) {

      if (builtStyles.hasOwnProperty(prop)) {

        wrapper.style[prop] = set ? builtStyles[prop] : ""

      }

    }

    // Prevent any horizontal scroll.
    [html, body].forEach((element) => {

      element.style["overflow-x"] = set ? "hidden" : ""

    })

  }

  // Builds styles incrementally for a given element.
  getStyles(el, index) {

    return styles[el](this.props.isOpen, this.props.width, this.props.right, index + 1)

  }

  listenForClose(e) {

    if (this.props.isOpen && (e.key === "Escape" || e.keyCode === 27)) {

      this.toggleMenu()

    }

  }

  componentWillMount() {

    if (styles.pageWrap && !this.props.pageWrapId) {

      console.warn("No pageWrapId supplied")

    }

    if (styles.outerContainer && !this.props.outerContainerId) {

      console.warn("No outerContainerId supplied")

    }

    if (this.props.isOpen) this.toggleMenu()

  }

  componentDidMount() {

    window.addEventListener("keydown", this.listenForClose, false)

  }

  componentWillUnmount() {

    window.removeEventListener("keydown", this.listenForClose, false)
    this.clearWrapperStyles()

  }

  componentWillReceiveProps(nextProps) {

    if (typeof nextProps.isOpen === "boolean" && nextProps.isOpen !== this.props.isOpen) {

      this.toggleMenu(nextProps.isOpen)

    }

  }

  render() {

    let overlay

    if (!this.props.noOverlay) {

      overlay = (<div
        className="bm-overlay"
        onClick={ this.props.onClickOverlay }
        style={ this.getStyles("overlay") }
                 ></div>)

    }

    return (
      <div>
        { overlay }
        <div id={ this.props.id } className="bm-menu-wrap" style={ this.getStyles("menuWrap") }>
          <div className="bm-menu" style={ Object.assign(this.getStyles("menu"), this.props.style) } >
           { this.props.children }
          </div>
        </div>
      </div>
    )

  }

}

Drawer.propTypes = {
  id : PropTypes.string,
  isOpen : PropTypes.bool,
  noOverlay : PropTypes.bool,
  outerContainerId : PropTypes.string,
  pageWrapId : PropTypes.string,
  right : PropTypes.bool,
  width : PropTypes.number,
  onClickOverlay : PropTypes.func,
  children : PropTypes.node,
  style : PropTypes.object
}

Drawer.defaultProps = {
  id : "",
  noOverlay : false,
  outerContainerId : "",
  pageWrapId : "",
  width : 250
}

function mapStateToProps(state) {

  return { isOpen : state[STATE_PROPERTY].isOpen }

}

function mapDispatchToProps(dispatch) {

  return {

    onClickOverlay() {
      dispatch(closeDrawer())
    }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
