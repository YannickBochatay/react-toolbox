const req = require.context("components/", true, /descript\.js$/)

function filterEmptyObjects(obj) {

  for (const n in obj) {

    if (obj.hasOwnProperty(n)) return true

  }

  return false

}

module.exports = req.keys()
                  .map(req)
                  .filter(filterEmptyObjects)
