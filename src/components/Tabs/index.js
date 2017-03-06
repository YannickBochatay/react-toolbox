import React, { PropTypes, Component } from "react"
import RCTabs from "rc-tabs"

import TabContent from "rc-tabs/lib/TabContent"
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar"

import "rc-tabs/assets/index.css"
import "./style.css"

export { TabPane } from "rc-tabs"

export default class Tabs extends Component {

  constructor(props) {

    super(props)

    this.state = { activeKey : null }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(activeKey) {

    this.changeTab(activeKey)

    if (this.props.onChange) this.props.onChange()

  }

  changeTab(activeKey) {

    this.setState({ activeKey })

  }

  renderTabBar() {

    return <ScrollableInkTabBar />

  }

  renderTabContent() {

    return <TabContent />

  }

  render() {

    return (
      <RCTabs
        onChange={ this.handleChange }
        renderTabBar={ this.renderTabBar }
        renderTabContent={ this.renderTabContent }
        { ...this.props }
      >
        { this.props.children }
      </RCTabs>
    )

  }
}

Tabs.propTypes = {
  children : PropTypes.node,
  onChange : PropTypes.func,
  defaultActiveKey : PropTypes.string
}

Tabs.defaultProps = { defaultActiveKey : 1 }
