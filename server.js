
var express = require('express');
var app = express();
var bodyParser = require('body-parser'),
    http = require('http'),
    url = require('url');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.disable('etag');

var router = express.Router();
app.use("/api",router);

//if(process.env.NODE_ENV == 'production')
//    app.use(express.static(__dirname + '/web/build/'+ process.env.NODE_ENV +'/administration/'));

//if(process.env.NODE_ENV == 'development')
    app.use(express.static(__dirname + '/build/production/'));

// ROUTES FOR OUR API
// =============================================================================

router.get('*', function(req, res, next){
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next();
});



var port = process.env.PORT || 3005;
app.listen(port, function() {
    console.log('server listening on port ' + port);
});

