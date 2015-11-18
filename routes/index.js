'use strict';

exports.index = function(req, res) {
	res.json({ a: 1 });
};

exports.getJson = function(req, res) {
	console.log("This is called");
	res.json({ a: 1, b: 2 });
};