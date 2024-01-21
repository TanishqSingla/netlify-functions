function helloController(_req, res) {
	res.status(200).json({ hello: "world", CUSTOMENV: process.env.CUSTOMENV });
}

module.exports = helloController;
