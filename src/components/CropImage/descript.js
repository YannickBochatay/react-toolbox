/* eslint react/jsx-no-bind:0 */
import React from "react"
import CropImage from "./"
import src from "images/monkeybird.jpg"

module.exports = {

  categ : "SVG",

  construct : CropImage,

  states : {

    default : () => <CropImage width={ 600 } height={ 379 } src={ src }/>,

    onChange : () => (
      <CropImage
        width={ 600 }
        height={ 379 }
        src={ src }
        onChange={ bbox => console.log(bbox) }
      />
    ),

    onDrag : () => (
      <CropImage
        width={ 600 }
        height={ 379 }
        src={ src }
        onDrag={ bbox => console.log(bbox) }
      />
    )

  }
}
