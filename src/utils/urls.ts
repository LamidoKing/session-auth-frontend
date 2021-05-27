const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://node-ts-heroku.herokuapp.com"

export default baseURL
