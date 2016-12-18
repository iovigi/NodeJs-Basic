var http = require('http');
var fs = require('fs');


var port =1234;
http

http.createServer(function(req,res) {
  res.writeHead(200,{
	  'content-type':'text/html'
  });

  if(req.url == "/Kiro")
  {
  	fs.readFile('Kiro.html',function(err,data){
  		 res.write(data.toString());
  		  res.end();
  	});
  }
 else
 {
    fs.readFile('other.html',function(err,data){
  		 res.write(data.toString());
  		  res.end();
  	});
  }

}).listen(port);

console.log("server running on "+port);
