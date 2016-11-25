var connect = require('connect');
var path = require('path');
var http = require('http');
var webpack = require('webpack');
var config = require('./webpack.config');
var port = config.devServer.port;
config.entry.unshift("webpack/hot/dev-server", "webpack-hot-middleware/client?reload=true");

var server_path = path.resolve(process.cwd(), '/src/');

var options = {
  port: 8005,
  lazyLoadTime: 3000,
  database: 'mock2easy',
  doc: 'doc',
  keepAlive: true,
  isSpider: false,
  ignoreField: [],
  interfaceSuffix: ".json",
  preferredLanguage: 'en'
};


var app = connect();
var compiler = webpack(config);
app.use(require("webpack-dev-middleware")(compiler, config.devServer));
app.use(require("webpack-hot-middleware")(compiler));
app.use(require('./mock2easy')(options));
app.listen(config.devServer.port, function () {
  console.log('开发环境已经启动: http://127.0.0.1:' + port);
});


require('mock2easynew')(options, function (app) {
  app.listen(options.port, function () {
    console.log('mock服务器已经启动，地址：http://localhost:' + options.port);
  });
});

