const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

http.createServer((req, res) => {
    const path = url.parse(req.url).path;
    if(path === '/'){
        fs.readFile('../MyPage/Mypage/Homepage.html', (err, data) => {
            if(err){
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end('404 Not Found');
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
}).listen(8887);

