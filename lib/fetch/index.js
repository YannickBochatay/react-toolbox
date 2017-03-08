"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchJSON = fetchJSON;
exports.fetchText = fetchText;

require("whatwg-fetch");

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function checkStatus(response) {
  if (response.ok) return response;
  throw response;
}

function fetchWithStatus() {
  return fetch.apply(undefined, arguments).then(checkStatus);
}

function fetchJSON(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var opt = _objectWithoutProperties(options, []);

  if (!opt.headers) opt.headers = new Headers();

  opt.headers.append("Content-Type", "application/json");
  opt.headers.append("accept", "application/json");
  opt.credentials = "include";

  return fetchWithStatus(url, opt).then(function (res) {
    return res.json();
  }).catch(function (err) {
    if (err.json) return err.json().then(function (objectError) {
      throw objectError;
    });else throw err;
  });
}

function fetchText() {
  return fetchWithStatus.apply(undefined, arguments).then(function (res) {
    return res.text();
  }).catch(function (err) {
    if (err.text) return err.text().then(function (errorMessage) {
      throw errorMessage;
    });else throw err;
  });
}

var _default = fetchWithStatus;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(checkStatus, "checkStatus", "src/lib/fetch/index.js");

  __REACT_HOT_LOADER__.register(fetchWithStatus, "fetchWithStatus", "src/lib/fetch/index.js");

  __REACT_HOT_LOADER__.register(fetchJSON, "fetchJSON", "src/lib/fetch/index.js");

  __REACT_HOT_LOADER__.register(fetchText, "fetchText", "src/lib/fetch/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/lib/fetch/index.js");
}();

;