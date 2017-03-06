import React from "react"
import ShapeDrawer from "./"

const customStyle = { fill : "orange", strokeWidth : 4, stroke : "blue" }

module.exports = {

  categ : "SVG",

  construct : ShapeDrawer,

  states : {

    rectangle : () => <ShapeDrawer shape="rect"/>,

    circle : () => <ShapeDrawer shape="circle"/>,

    line : () => <ShapeDrawer shape="line"/>,

    ellipse : () => <ShapeDrawer shape="ellipse"/>,

    customStyle : () => <ShapeDrawer shape="rect" shapeStyle={ customStyle }/>

  }
}
