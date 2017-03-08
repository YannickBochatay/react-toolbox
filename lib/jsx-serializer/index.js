"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getDisplayName = getDisplayName;
exports.objectToElmt = objectToElmt;
exports.elmtToObject = elmtToObject;
exports.JSONToElmt = JSONToElmt;
exports.elmtToJSON = elmtToJSON;
exports.elmtToJSX = elmtToJSX;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _cloneDeep = require("lodash/fp/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function processChildren(children, callback) {

  if (!children) return null;else if (Array.isArray(children)) return children.map(callback);else return callback(children);
}

function processProps(props) {

  var res = {};

  for (var name in props) {

    if (props.hasOwnProperty(name)) {

      var value = props[name];

      if (name !== "children" && name !== "className" && typeof value != "function") {

        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object") res[name] = (0, _cloneDeep2.default)(value);else res[name] = value;
      }
    }
  }

  return res;
}

function processType(type) {

  switch (typeof type === "undefined" ? "undefined" : _typeof(type)) {
    case "string":
      return type;
    case "function":
      return getDisplayName(type);
    default:
      throw new TypeError((typeof type === "undefined" ? "undefined" : _typeof(type)) + " : string or function required");
  }
}

var indentPattern = " ";

function propsToStr(props) {
  var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var indent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


  var keys = Object.keys(props).sort();

  var sep = keys.length > 3 ? "\n" + indentPattern.repeat(indent + 1) : " ";

  return keys.reduce(function (prev, key) {

    if (key === "children") return prev;

    // propriétés par défaut
    if (defaultProps[key] !== undefined && props[key] === defaultProps[key]) return prev;

    var value = typeof props[key] === "function" ? "function() {}" : JSON.stringify(props[key]);

    return prev + sep + (key + "={ " + value + " }");
  }, "");
}

function childrenToStr(childrenArg) {
  var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


  var children = processChildren(childrenArg, function (elmt) {
    return elmtToJSX(elmt, indent + 1);
  });

  if (Array.isArray(children)) children = children.join("\n");

  return children;
}

function getDisplayName(elmt) {

  var name = elmt.displayName || elmt.name || "";

  return name.replace(/Connect\((\w+)\)/g, "$1");
}

function objectToElmt(object) {

  if (!object || !object.type) return object;

  return _react2.default.createElement(object.type, object.props, processChildren(object.children, objectToElmt));
}

function elmtToObject(elmt) {

  if (!elmt || (typeof elmt === "undefined" ? "undefined" : _typeof(elmt)) != "object") return elmt;

  return {
    type: processType(elmt.type),
    props: processProps(elmt.props),
    children: processChildren(elmt.props.children, elmtToObject)
  };
}

function JSONToElmt(json) {

  return objectToElmt(JSON.parse(json));
}

function elmtToJSON(elmt) {

  return JSON.stringify(elmtToObject(elmt), null, 4);
}

function elmtToJSX(elmt) {
  var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


  if (!elmt || typeof elmt == "string") return elmt || "";

  var tag = processType(elmt.type);
  var children = childrenToStr(elmt.props.children);
  var strIndent = indentPattern.repeat(indent);
  var strProps = propsToStr(elmt.props, elmt.type.defaultProps, indent);

  var jsxStr = void 0;

  if (children) {

    jsxStr = strIndent + "<" + tag + strProps + ">\n" + (strIndent + indentPattern + children) + "\n" + strIndent + "</" + tag + ">";
  } else {

    jsxStr = strIndent + "<" + tag + strProps + "/>";
  }

  return jsxStr;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(processChildren, "processChildren", "src/lib/jsx-serializer/index.js");

  __REACT_HOT_LOADER__.register(processProps, "processProps", "src/lib/jsx-serializer/index.js");

  __REACT_HOT_LOADER__.register(processType, "processType", "src/lib/jsx-serializer/index.js");

  __REACT_HOT_LOADER__.register(indentPattern, "indentPattern", "src/lib/jsx-serializer/index.js");

  __REACT_HOT_LOADER__.register(propsToStr, "propsToStr", "src/lib/jsx-serializer/index.js");

  __REACT_HOT_LOADER__.register(childrenToStr, "childrenToStr", "src/lib/jsx-serializer/index.js");

  __REACT_HOT_LOADER__.register(getDisplayName, "getDisplayName", "src/lib/jsx-serializer/index.js");

  __REACT_HOT_LOADER__.register(objectToElmt, "objectToElmt", "src/lib/jsx-serializer/index.js");

  __REACT_HOT_LOADER__.register(elmtToObject, "elmtToObject", "src/lib/jsx-serializer/index.js");

  __REACT_HOT_LOADER__.register(JSONToElmt, "JSONToElmt", "src/lib/jsx-serializer/index.js");

  __REACT_HOT_LOADER__.register(elmtToJSON, "elmtToJSON", "src/lib/jsx-serializer/index.js");

  __REACT_HOT_LOADER__.register(elmtToJSX, "elmtToJSX", "src/lib/jsx-serializer/index.js");
}();

;