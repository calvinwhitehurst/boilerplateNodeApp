var express = require('express');
var app = express();
// var mysql = require('mysql');

// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'root',
// 	database: 'controlcenter',
// 	multipleStatements: true
// });
// connection.connect(function(err) {
// 	if (err) throw err;
// 	console.log("MySQL Database is connected.");
// });

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

//ROUTES
app.get('/', function(req, res){
	res.render('home')
});

app.get('/firstPage', function(req, res){
	res.render('first_page')
});





//404 catch-all handler (middleware)
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});

//500 error handler (middleware)
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

//SERVER CODE

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
		app.get('port') + '; press Ctrl-C to terminate.' );
});