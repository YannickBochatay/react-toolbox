/*
The MIT License (MIT)

Copyright (c) 2016 Rocky Wu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


Adapted by Yannick Bochatay
*/

import React, { PropTypes } from "react"

const rippleStyle = {
  position : "absolute",
  borderRadius : "50%",
  opacity : 0,
  width : 35,
  height : 35,
  transform : "translate(-50%, -50%)",
  pointerEvents : "none"
}

const wrapStyle = {
  position : "relative",
  display : "inline-block",
  overflow : "hidden"
}

class Ripples extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      rippleStyle : {},
      wrapStyle : {}
    }

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(ev) {

    ev.stopPropagation()

    const { onClick, color, during } = this.props
    const { pageX, pageY, currentTarget : { offsetLeft, offsetTop, offsetWidth, offsetHeight } } = ev

    const left = pageX - offsetLeft
    const top = pageY - offsetTop

    this.setState({
      rippleStyle : {
        top,
        left,
        opacity : 1,
        backgroundColor : color
      }
    })

    setTimeout(() => {

      const size = Math.max(offsetWidth, offsetHeight)

      this.setState({
        rippleStyle : {
          left,
          top,
          transform : `${rippleStyle.transform} scale(${size / 9})`,
          opacity : 0,
          transition : `all ${during}ms`
        }
      })

    }, 50)

    if (typeof onClick === "function") {

      onClick(ev)

    }

  }

  render() {

    const { children, style, ...props } = this.props
    const { state } = this

    let s = {
      ...style,
      ...wrapStyle,
      ...state.wrapStyle
    }

    return (
      <div { ...props } style={ s } onClick={ this.handleClick }>
        { children }

        <s style={ {
          ...rippleStyle,
          ...state.rippleStyle
        } } />
      </div>
    )

  }

}

Ripples.propTypes = {
  during : PropTypes.number,
  color : PropTypes.string,
  style : PropTypes.object,
  children : PropTypes.node,
  onClick : PropTypes.func
}

Ripples.defaultProps = {
  during : 600,
  color : "rgba(0, 0, 0, .3)"
}

export default Ripples
