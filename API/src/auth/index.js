
exports.login = function(request, response) {
	const { body } = request

	if (body.name == "Alvaro" && body.password == "admin") {
		response.send({
			success: true,
			message: "user logged successfully"
		})
	}
	else {
		response.send({
			success: false,
			message: "error to sign-in"
		})
	}
}

// other exports...

