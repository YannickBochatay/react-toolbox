import React from "react"
import { Provider } from "react-redux"
import { Router, hashHistory } from "react-router"
import { store } from "./store"
import "styles"

const rootRoute = {

  childRoutes : [{

    path : "/",

    component : ({ children }) => children || <h1>Welcome to react-toolbox</h1>,

    childRoutes : [
      require("./routes/catalog"),
      require("./routes/notfound")
    ]

  }]
}

export default () => (
  <Provider store={ store }>
    <Router history={ hashHistory } routes={ rootRoute } />
  </Provider>
)
