var http = require('http');

module.exports = function (program) {
  return function (req, res, next) {
    if (req.url.indexOf(program.interfaceSuffix) == -1) {
      return next();
    }
    var options = {
      hostname: '127.0.0.1',
      port: program.port,
      path: req.url,
      method: req.method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Cache-Control': 'no-cache'
      }
    };
    var _req = http.request(options, function (_res) {
      var data = '';
      _res.on('data', function (chunk) {
        data += chunk;
      });
      _res.on('end', function () {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(data);
      });
    });

    _req.on('error', function (e) {
      console.log('problem with request: ' + e.message);
    });

    _req.end();
  }

};
