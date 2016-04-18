var http  = require("http");
var fs = require("fs");

//console.log(http);

function renderHomePage(request, response){
	response.writeHead(200,{"content-type": "text/html"});
	homePageHtml = fs.readFileSync("homePageHtml.html");
	response.write(homePageHtml);
	response.end();
}

function renderErrorPage(request, response){
	response.writeHead(404);
	errorPageHtml = fs.readFileSync("error404.html");
	response.write(errorPageHtml);
	response.end();
}

var server = http.createServer(function(request, response){
	// console.log(request.url);
	// response.writeHead(200, {"content-type": "text/html"});
	if(request.url == "/"){
		renderHomePage(request, response);
	}else{
		renderErrorPage(request, response);
	}
	// response.write("<h1>Hello, World</h1>");
	response.end();
});

server.listen(8000);
console.log("Our server is listening on port 8000.");