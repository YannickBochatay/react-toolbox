import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import { hashHistory } from "react-router"
import { routerMiddleware as createRouterMiddleware, routerReducer as routing } from "react-router-redux"


let DevTools

if (process.env.NODE_ENV !== "production") {

  DevTools = require("../components/DevTools/Panel")

}


const routerMiddleware = createRouterMiddleware(hashHistory)

const middlewares = applyMiddleware(thunkMiddleware, routerMiddleware)


let reducers = { routing }


export const store = createStore(

  combineReducers(reducers),

  DevTools ? compose(middlewares, DevTools.instrument()) : middlewares
)

export function injectReducers(newReducers) {

  if (typeof newReducers == "object") reducers = { ...reducers, ...newReducers }
  else throw new TypeError((typeof newReducers) + " : newReducers should be an object of reducers (functions)")

  store.replaceReducer(combineReducers(reducers))

}
