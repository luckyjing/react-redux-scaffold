var connect = require('connect');
var path = require('path');
var http = require('http');
var webpack = require('webpack');
var config = require('./webpack.config');
var mock2easyMiddleware = require('mock2easy-middleware');
var port = config.devServer.port;
var mockPort = require('./package.json').port.mock; // mock服务启动的端口

config.entry.unshift("webpack/hot/dev-server", "webpack-hot-middleware/client?reload=true");

var app = connect();
var compiler = webpack(config);
app.use(require("webpack-dev-middleware")(compiler, config.devServer));
app.use(require("webpack-hot-middleware")(compiler));
app.use(mock2easyMiddleware({
  port: mockPort
}));
app.listen(config.devServer.port, function() {
  console.log('开发环境已经启动: http://127.0.0.1:' + port);
});
