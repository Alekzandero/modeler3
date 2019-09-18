var http = require('http');
var fs = require('fs');

http.createServer(
	function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain', 'Content-Disposition': 'attachment; filename=VDT.model.data.1.js',});
		var content = fs.readFileSync('VDT.model.data.1.js', 'utf8');
		res.end(content);
	}
).listen(8080);
