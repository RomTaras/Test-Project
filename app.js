var http = require("http");


http.Server(function(req, res) {

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	
	function getRandomInt(min, max) {
  	min = Math.ceil(min);
  	max = Math.floor(max);
 	return (Math.floor(Math.random() * (max - min)) + min).toString();
}
     	var buffer = getRandomInt(1,6);
	res.end(buffer);

}).listen(8080);
