const auth = require("./auth/index.js")
const dataFetch = require("./data-fetch.js")


module.exports = function(app){

	app.get("/", dataFetch.fetch)

	app.post("/auth/login", auth.login)

	// other routes...
}

