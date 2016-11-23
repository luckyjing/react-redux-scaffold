var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

// 删除build目录
var del = require('del');

del(['./build/*']);

// webpack插件列表
var HtmlwebpackPlugin = require('html-webpack-plugin'); // 生成一个html 加载 打包好后的脚本
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


// 资源路径列表
var entryPath = process.cwd();
var sourceEntry = path.resolve(entryPath, 'src/scripts/index.js'); // 项目入口文件
var buildDir = path.resolve(entryPath, 'build');// 打包目标地址
var debug = process.env.NODE_ENV !== 'production';

// 开发配置
var devServerPort = 3005; // webpack-dev-server 启动端口
var devBuildDir = path.resolve(entryPath, '__build'); // 开发环境下 静态资源目录
// 第三方资源
var externals = {
  "react": 'React',
  "react-dom": "ReactDOM",
  'redux': 'Redux',
  'react-redux': 'ReactRedux'
};
// babel 参数
var babelQuery = {
  cacheDirectory: true,
  presets: [
    require.resolve('babel-preset-es2015'),
    require.resolve('babel-preset-react'),
    require.resolve('babel-preset-stage-0')
  ],
  plugins: [
    require.resolve('babel-plugin-add-module-exports'),
    require.resolve('babel-plugin-typecheck'),
    require.resolve('babel-plugin-transform-decorators-legacy'),
    // 支持ant.design 按需加载
    ["import", {
      "libraryName": "antd",
      "style": true,
    }]
  ]
};
var config = {
  entry: [
    sourceEntry
  ],
  output: {
    path: debug ? devBuildDir : buildDir,
    filename: debug ? 'index.js' : 'scripts/index.js',
    publicPath: '/'  // 各种资源生成的链接[如 打包的图片]
  },
  externals: debug ? {} : externals,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: babelQuery
      }
    ]
  },
  resolve: {
    // 填在这里的表示可以进行自动补全后缀
    extensions: ['', '.js', '.jsx', '.json']
  },
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    color: true,
    contentBase: devBuildDir,
    port: devServerPort
  },
  plugins: [
    // 生成HTML
    new HtmlwebpackPlugin({
      template: path.resolve(entryPath, 'src/index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ],
};


if (debug) {
  // 开发环境
  var cssLoader = {
    test: /\.css$/,
    loaders: ['style', 'css']
  };
  var lessLoader = {
    test: /\.less$/,
    loaders: ['style', 'css', 'less']
  };
  config.module.loaders.push(cssLoader);
  config.module.loaders.push(lessLoader);
  config.plugins = config.plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]);
} else {
  // 发布环境
  var cssLoader = {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
  };
  var lessLoader = {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
  };
  config.module.loaders.push(cssLoader);
  config.module.loaders.push(lessLoader);
  // 分离出的css代码 在这里被注入到 css/[name].css文件里
  // @see https://github.com/webpack/extract-text-webpack-plugin
  config.plugins.push(new ExtractTextPlugin("css/index.css", {allChunks: false}));
  // 压缩
  config.plugins.push(new UglifyJsPlugin({
    minimize: true
  }));
}

module.exports = config;
