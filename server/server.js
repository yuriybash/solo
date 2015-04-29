console.log("TEST1")
var express = require('express');
var bodyparser = require('body-parser');
var request = require("request");
var cheerio = require('cheerio');
var app = express();

app.use(express.static(__dirname + '/../client'));
app.set('port', process.env.PORT || 3000);
app.use(bodyparser.json());

app.get('/', 
function(req, res) {
  res.render('../client/index.html');
});

app.post('/addcompany',
	function(req, res){
		var companyURL = req.body.url;	//https://angel.co/airware
		var amounts;
		var dates;

		request({
		  uri: companyURL,
		  method: "GET",
		  timeout: 10000,
		  followRedirect: true,
		  maxRedirects: 10
		}, function(error, response, body) {
		  
		  	var HTMLpageReturned = body;
		  	var $ = cheerio.load(body);	
		  	amounts = $('.raised').text();
		  	dates = $('.date_display').text()

		  	console.log("AMOUNTS type: " + typeof amounts);
		  	console.log("DATES type: " + dates)

		res.send({'amounts': amounts.split("\n"), 'dates': dates})		//({amounts: amounts, dates: dates})

		});





		
});


app.listen(app.get('port'))
console.log("now listening on port" +app.get('port'))

