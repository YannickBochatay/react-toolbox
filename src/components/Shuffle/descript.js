import React, { Component } from "react"
import Shuffle from "react-shuffle"

const styles = {
  item : {
    display : "inline-block",
    padding : 20,
    margin : 2,
    backgroundColor : "#ddd"
  }
}

function shuffle(array) {

  let currentIndex = array.length

  while (0 !== currentIndex) {

    const randomIndex = Math.floor(Math.random() * currentIndex)

    currentIndex -= 1

    const temporaryValue = array[currentIndex]

    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue

  }

  return array

}

const items = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Praesent fermentum sem non diam commodo,
a tristique massa ultrices.
Nam fringilla id urna in imperdiet.
Donec bibendum massa nisl.
Nunc volutpat nunc ut orci consectetur,
in mattis nibh dictum.
Nulla ultrices urna mauris,
nec auctor nisi bibendum ut.
Quisque eu ligula nisl.
Maecenas interdum est orci,
in luctus enim volutpat a.
Etiam luctus, erat id pellentesque sodales,
ex lorem iaculis elit,
sed feugiat odio arcu sed est.
Integer sit amet bibendum dui.
Phasellus vitae varius lacus.
Vivamus nibh mauris, vestibulum vel lacus vitae,
hendrerit iaculis neque.
Etiam tempus, justo ac vestibulum viverra,
tellus massa rutrum eros,
bibendum vestibulum nulla tortor a turpis.
Suspendisse eu posuere purus.
Proin ac turpis suscipit nibh molestie ultrices.
Morbi vel purus molestie, molestie nisi eu, pretium dolor.
Integer ac sem nec odio egestas auctor porttitor cursus justo.`.split(/[\.,]?\s/)


class ShuffleExample extends Component {

  constructor(props) {

    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = { items }

  }

  handleClick() {

    this.setState({ items : shuffle(this.state.items) })

  }

  handleChange(e) {

    this.setState({ items : items.filter(item => item.indexOf(e.target.value) !== -1) })

  }

  render() {

    return (
      <div>
        <input type="text" onChange={ this.handleChange } placeholder="filter"/>
        &nbsp;&nbsp;
        <button onClick={ this.handleClick }>Shuffle</button>
        <Shuffle>
          { this.state.items.map(item => <span key={ item } style={ styles.item }>{ item }</span>) }
        </Shuffle>
      </div>
    )

  }
}


module.exports = {

  name : "Shuffle",

  construct : Shuffle,

  path : "react-shuffle",

  link : "https://github.com/FormidableLabs/react-shuffle",

  states : { default : () => <ShuffleExample/> }
}
