import "react-hot-loader/patch"
import { AppContainer } from "react-hot-loader"
import React from "react"
import { render } from "react-dom"
import "babel-polyfill"
import App from "./App"

const rootEl = document.getElementById("content")

if (process.env.NODE_ENV === "production") render(<App/>, rootEl)
else {

  render(
    <AppContainer>
      <App/>
    </AppContainer>,
    rootEl
  )

  if (module.hot) {

    module.hot.accept("./App", () => {

      const NextApp = require("./App").default

      render(
        <AppContainer>
          <NextApp/>
        </AppContainer>,
        rootEl
      )

    })

  }

}
