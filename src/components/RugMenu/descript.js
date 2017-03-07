import React from "react"
import RugMenu from "./"
import NavItem from "react-bootstrap/lib/NavItem"

module.exports = {

  categ : "Presentation",

  construct : RugMenu,

  states : {

    default : () => (
      <RugMenu>
        <NavItem eventKey={ 1 } title="home">NavItem 1 content</NavItem>
        <NavItem eventKey={ 2 } title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={ 3 } disabled>NavItem 3 content</NavItem>
        <NavItem eventKey={ 4 } title="home">NavItem 4 content</NavItem>
        <NavItem eventKey={ 5 } title="Item">NavItem 5 content</NavItem>
        <NavItem eventKey={ 6 } disabled>NavItem 6 content</NavItem>
        <NavItem eventKey={ 7 } title="home">NavItem 7 content</NavItem>
        <NavItem eventKey={ 8 } title="Item">NavItem 8 content</NavItem>
        <NavItem eventKey={ 8 } disabled>NavItem 9 content</NavItem>
      </RugMenu>
    )

  }
}
