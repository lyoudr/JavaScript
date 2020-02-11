/*The Built-in URL Module*/
//Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:

var http = require('http');
var fs = require('fs');
const url = require('url');
var querystring= require('querystring');

http.createServer(function (req, res) {
  let Path = url.parse(req.url).path;
  console.log('Hi => ', Path);
  //Open Several files on the server and return its content:
  if(Path == '/') { 
    fs.readFile('./practice.html', function(err, data) {
      if(err){
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
      };
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    }); 
  } else if(Path == '/summer'){
    fs.readFile('./summer.html', function(err, data) {
      if(err){
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
      };
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    }); 
  } else if(Path == '/winter'){
    fs.readFile('./winter.html', function(err, data) {
      if(err){
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
      };
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    }); 
  } else if(Path == "/user/info") {
      let userInfo = {
          "name": "Tester",
          "age": 11,
          "married": false
      };
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(JSON.stringify(userInfo));
      return res.end();
  } else if(Path == '/applyacount') {
      var body =''//Define a post variable to save the request information
      req.on('data',function(data){
        body += data;
        console.log(body);
      });
      req.on('end',function(){
        var BodyResult = querystring.parse(body);
        var BodyJSON = JSON.parse(BodyResult.q);
        var content2 = fs.readFileSync('dummy.json');
        var JSONcontent2 = JSON.parse(content2); 
        console.log(BodyResult.q);
        console.log(BodyJSON);
        if (BodyJSON.table != JSONcontent2.UserName || BodyJSON.limit != JSONcontent2.PassWord){
          res.writeHead(404, {'Content-Type': 'text/html'});  
          return res.end("Wrong!");
        }
      res.writeHead(200, {'Content-Type': 'text/html'});
      return res.end("You're account is right"); 
    });
  } else if(Path == "/Ann's_page" ) {
    fs.readFile("./Ann's_page.html", function(err, data) {
      if(err){
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
      };
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    }); 
  } 
}).listen(8080);


