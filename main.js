var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(require('morgan')('common'));
app.use(serveStatic('public', {'index': ['index.html']}));
app.listen(1243);

console.log('listening...');