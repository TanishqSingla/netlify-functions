function helloController(_req, res) {
	res.status(200).json({ hello: "world" });
}

module.exports = helloController;
