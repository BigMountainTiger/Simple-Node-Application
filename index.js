'use strict';

var express = require('express'),
    port = process.env.PORT || 3000;

var app = express();

var routes = require('./routes')
app.get('/', routes.index);
app.get('/json', routes.getJson);

app.listen(port, function (err) {
    console.log('[%s] Listening on http://localhost:%d, please try it now', app.settings.env, port);
});
