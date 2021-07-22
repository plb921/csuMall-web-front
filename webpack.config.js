var webpack = require('webpack');

var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

var getHtmlPluginConfig = function(name){
    return {
            template : './src/view/' + name +'.html',
            filename : 'view/'+ name +'.html',
            inject : true,
            hash : true,
            chunks : ['common', name]
    };
};

var config = {
    entry:{
        'common' : ['./src/page/common/index.js'],
        'index' : ['./src/page/index/index.js'],
        'login' : ['./src/page/login/index.js'],
        'order-list' : ['./src/page/order-list/index.js']
    },
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {test:/\.css$/, loader: ExtractTextWebpackPlugin.extract("style-loader","css-loader")},
            {test:/\.(jpg|png|gif|ttf|svg|eot|woff)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]'},
            {test:/\.string$/, loader: 'html-loader'}
        ]
    },
    resolve : {
        alias : {
            util : __dirname + '/src/util',
            page : __dirname + '/src/page',
            image: __dirname + '/src/image',
            service : __dirname + '/src/service',
            view : __dirname + '/src/view',
            node_modules: __dirname + '/node_modules'
        }
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/common.js'
        }),
        new ExtractTextWebpackPlugin("css/[name].css"),
        new HtmlWebpackPlugin(getHtmlPluginConfig('index')),
        new HtmlWebpackPlugin(getHtmlPluginConfig('list')),
        new HtmlWebpackPlugin(getHtmlPluginConfig('login')),
        new HtmlWebpackPlugin(getHtmlPluginConfig('content')),
        new HtmlWebpackPlugin(getHtmlPluginConfig('order-list'))
    ],
    externals:{
        'jquery' : 'window.jQuery'
    }
};

if ('dev' == WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8888/');
}

module.exports = config;