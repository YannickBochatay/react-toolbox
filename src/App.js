import React from "react"
import { Provider } from "react-redux"
import { Router, hashHistory } from "react-router"
import { store } from "./store"
import Welcome from "./components/Welcome"
import "styles"


const rootRoute = {

  childRoutes : [{

    path : "/",

    component : ({ children }) => (children || <Welcome/>),

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
