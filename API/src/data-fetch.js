
exports.fetch = function(request, response) {
	const { path, methods, query, body } = request

	response.send({
		success: true,
		path: path,
		methods: methods,
		query: query,
		body: body,
		message: "request successfully answered"
	})

	// sample:
	// http://localhost:8000/?id=2&name=alvaro
}

