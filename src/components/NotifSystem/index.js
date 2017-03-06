import React, { Component, PropTypes } from "react"
import NotificationSystem from "react-notification-system"
import { connect } from "react-redux"
export { reducer, STATE_PROPERTY, addNotification, removeNotification } from "./ducks"


export class NotifSystem extends Component {

  componentDidUpdate(prevProps) {

    const oldNotifs = prevProps.notifs
    const notifs = this.props.notifs

    for (const n in oldNotifs) {
      if (!(n in notifs)) this.system.removeNotification(n)
    }

    for (const n in notifs) {
      if (!(n in oldNotifs)) this.system.addNotification(notifs[n])
    }

  }

  render() {

    return (
      <NotificationSystem ref={ elmt => this.system = elmt }/>
    )

  }

}

NotifSystem.propTypes = { notifs : PropTypes.object }


function mapStateToProps(state) {

  return { notifs : state.notifications }

}

export default connect(mapStateToProps)(NotifSystem)