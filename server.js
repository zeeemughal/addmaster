/**
 * This is the main Node.js server script for your project
 * Check out the two endpoints this back-end API provides in fastify.get and fastify.post below
 */

const path = require("path");
const fs = require("fs");

function build(fastify = false, options, next) {
	// Require the fastify framework and instantiate it
	if (!fastify) {
		console.log("Using fastify setup");
		fastify = require("fastify")({
			// Set this to true for detailed logging:
			logger: false,
		});
	}
	fastify.register(require("fastify-static"), {
		root: path.join(__dirname, "public"),
		prefix: "/", // optional: default '/'
	});
	// point-of-view is a templating manager for fastify
	fastify.register(require("point-of-view"), {
		engine: {
			handlebars: require("handlebars"),
		},
	});

	/**
	 * Our home page route
	 *
	 */
	fastify.get("/", function (request, reply) {
		// params is an object we'll pass to our handlebars template
		let params = {};

		// Add the color properties to the params object
		params = {
			title: "Code Test",
			someText: "This is the main paragraph text.",
			host: request.hostname,
		};
		// The Handlebars code will be able to access the parameter values and build them into the page
		reply.code(200).view("/src/pages/index.hbs", params);
	});

	fastify.get("/ad-page", function (request, reply) {
		reply.view("/src/pages/ad-page.html");
	});

	fastify.get("/iframe", function (request, reply) {
		reply.view("/src/pages/iframe.html", {});
	});

	fastify.get("/event-page", function (request, reply) {
		reply.view("/src/pages/event-page.html", {});
	});

	fastify.get("/frame-page", function (request, reply) {
		reply.view("/src/pages/frame-page.hbs", {
			host:
				request.hostname == "localhost:3000"
					? "http://localhost:3000"
					: "http://127.0.0.1:3000",
			thirdp:
				request.hostname == "localhost:3000"
					? "http://127.0.0.1:3000"
					: "http://localhost:3000",
			name: request.hostname,
		});
	});
	// Only use listen without the Fastify CLI
	if (!next) {
		// Run the server and report out to the logs
		fastify.listen(3000, function (err, address) {
			if (err) {
				fastify.log.error(err);
				process.exit(1);
			}
			console.log(
				`Your app is listening on http://localhost:3000 &`,
				address
			);
			fastify.log.info(`server listening on http://localhost:3000`);
		});
	} else {
		console.log(
			`Your app is listening on http://localhost:3000 & http://127.0.0.1:3000`
		);
		next();
	}
	return fastify;
}

module.exports = build;
