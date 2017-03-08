import "whatwg-fetch"

function checkStatus(response) {
  if (response.ok) return response
  throw response
}

function fetchWithStatus() {
  return fetch(...arguments).then(checkStatus)
}

export function fetchJSON(url, options = null) {

  const { ...opt } = options

  if (!opt.headers) opt.headers = new Headers()

  opt.headers.append("Content-Type", "application/json")
  opt.headers.append("accept", "application/json")
  opt.credentials = "include"

  return fetchWithStatus(url, opt)
    .then(res => res.json())
    .catch(err => {
      if (err.json) return err.json().then(objectError => { throw objectError })
      else throw err
    })

}

export function fetchText() {
  return fetchWithStatus(...arguments)
    .then(res => res.text())
    .catch(err => {
      if (err.text) return err.text().then(errorMessage => { throw errorMessage })
      else throw err
    })
}

export default fetchWithStatus
