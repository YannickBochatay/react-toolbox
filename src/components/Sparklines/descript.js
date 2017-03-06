import React from "react"
import {
  Sparklines,
  SparklinesLine,
  SparklinesBars,
  SparklinesSpots,
  SparklinesReferenceLine,
  SparklinesNormalBand
} from "react-sparklines"

let sampleData = [5, 10, 5, 20, 12, 2, 4, 6, 8, 15, 0, 14, 13]

module.exports = {

  categ : "UI Components",

  construct : Sparklines,

  link : "https://github.com/borisyankov/react-sparklines",

  path : "react-sparklines",

  namedImport : true,

  states : {

    line : () => (
      <Sparklines data={ sampleData }>
        <SparklinesLine color="blue" />
      </Sparklines>
    ),

    bars : () => (
      <Sparklines data={ sampleData }>
        <SparklinesBars />
      </Sparklines>
    ),

    spots : () => (
      <Sparklines data={ sampleData }>
        <SparklinesLine style={ { fill : "none" } } />
        <SparklinesSpots />
      </Sparklines>
    ),

    referenceLine : () => (
      <Sparklines data={ sampleData }>
        <SparklinesLine />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
    ),

    normalBand : () => (
      <Sparklines data={ sampleData }>
        <SparklinesLine style={ { fill : "none" } }/>
        <SparklinesNormalBand />
      </Sparklines>
    )
  }
}

