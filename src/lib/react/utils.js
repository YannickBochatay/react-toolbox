import React from "react"
import cloneDeep from "lodash/fp/cloneDeep"

function processChildren(children, callback) {

  if (!children) return null
  else if (Array.isArray(children)) return children.map(callback)
  else return callback(children)

}

function processProps(props) {

  const res = {}

  for (const name in props) {

    if (props.hasOwnProperty(name)) {

      const value = props[name]

      if (name !== "children" && name !== "className" && typeof value != "function") {

        if (typeof value == "object") res[name] = cloneDeep(value)
        else res[name] = value

      }

    }

  }

  return res

}


export function objectToElmt(object) {

  if (!object || !object.type) return object

  return React.createElement(
    object.type,
    object.props,
    processChildren(object.children, objectToElmt)
  )

}

function processType(type) {

  switch (typeof type) {
  case "string" : return type
  case "function" : return type.displayName || type.name
  default : throw new TypeError((typeof type) + " : string or function required")
  }

}


export function elmtToObject(elmt) {

  if (!elmt || typeof elmt != "object") return elmt

  return {
    type : processType(elmt.type),
    props : processProps(elmt.props),
    children : processChildren(elmt.props.children, elmtToObject)
  }

}

export function elmtToJSON(elmt) {

  return JSON.stringify(elmtToObject(elmt), null, 4)

}

const indentPattern = " "


function propsToStr(props, defaultProps = {}, indent = 0) {

  const keys = Object.keys(props).sort()

  const sep = (keys.length > 3) ? ("\n" + indentPattern.repeat(indent + 1)) : " "

  return keys.reduce((prev, key) => {

    if (key === "children") return prev

    // propriétés par défaut
    if (defaultProps[key] !== undefined && props[key] === defaultProps[key]) return prev

    const value = (typeof props[key] === "function") ? "function() {}" : JSON.stringify(props[key])

    return prev + sep + `${key}={ ${value} }`

  }, "")

}

function childrenToStr(childrenArg, indent = 0) {

  let children = processChildren(childrenArg, elmt => elmtToJSX(elmt, indent + 1))

  if (Array.isArray(children)) children = children.join("\n")

  return children

}

export function elmtToJSX(elmt, indent = 0) {

  if (!elmt || typeof elmt == "string") return elmt || ""

  const tag = removeConnect(processType(elmt.type))
  const children = childrenToStr(elmt.props.children)
  const strIndent = indentPattern.repeat(indent)
  const strProps = propsToStr(elmt.props, elmt.type.defaultProps, indent)

  let jsxStr

  if (children) {

    jsxStr = `${strIndent}<${tag}${strProps}>
${strIndent + indentPattern + children}
${strIndent}</${tag}>`

  } else {

    jsxStr = `${strIndent}<${tag}${strProps}/>`

  }

  return jsxStr

}


function bindFn(fn) {

  if (typeof this[fn] == "function") this[fn] = this[fn].bind(this)

}

export function bind(obj, fn) {

  if (Array.isArray(fn)) fn.forEach(bindFn.bind(obj))
  else bindFn.call(obj, fn)

}


export function removeConnect(displayName) {

  return displayName.replace(/Connect\((\w+)\)/g, "$1")

}

export function getDisplayName(elmt) {

  if (!elmt.displayName && !elmt.name) {

    throw new Error("elmt has no property displayName nor name")

  }

  return removeConnect(elmt.displayName || elmt.name)

}

export function createStructure(obj) {

  if (!obj) return null
  else if (typeof obj == "string") return obj
  else if (Array.isArray(obj)) return obj.map(createStructure)

  return React.createElement(obj.type, obj.props, createStructure(obj.children))

}
