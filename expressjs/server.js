var express = require('express');

var app = express.createServer();

var users = [
    { name: 'tobi', email: 'tobi@learnboost.com' }
  , { name: 'loki', email: 'loki@learnboost.com' }
  , { name: 'jane', email: 'jane@learnboost.com' }
];

app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
	res.render('users', {
	    users : users
	});
});

app.listen(3000);