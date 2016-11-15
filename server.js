var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
port = process.argv[2] || 8080;
console.log('prueba');
http.createServer(function (request, response) {
    
    var uri = url.parse(request.url).pathname;
    var filename = path.join(process.cwd(), uri);
    
    if (uri === '/') {
        filename = "portfolio.html";
    }
    
    fs.exists(filename, function (exists) {
        if (!exists) {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.write("404 Not Found\n");
            response.end();
            return;
        }
        
        if (fs.statSync(filename).isDirectory()) filename += '/index.html';
        
        fs.readFile(filename, "binary", function (err, file) {
            if (err) {
                console.log('entro');
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.write(err + "\n");
                response.end();
                return;
            }
            
            
            if (path.extname(filename) === '.svg') {
                response.setHeader('content-type', 'image/svg+xml');
            }
            response.writeHead(200);

            response.write(file, "binary");
            
            response.end();
        });
    });
}).listen(parseInt(port, 10));