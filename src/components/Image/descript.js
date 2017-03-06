import React from "react"
import Image from "./"


module.exports = {

  categ : "Synopsis",

  construct : Image,

  path : "",

  states : {

    default : () => <Image src="src/images/logo.png"/>,

    error : () => <Image src="src/images/logo_toto.png"/>

  }
}
