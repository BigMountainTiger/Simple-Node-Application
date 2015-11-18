'use strict';

var express = require('express'),
    port = process.env.PORT || 3000;

var app = express();

var routes = require('./routes')
app.get('/', routes.index);

app.listen(port, function (err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});
