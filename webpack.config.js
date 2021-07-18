const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        index: resolve(__dirname, './src/index.js'),
        vModel: resolve(__dirname, './directive/vModel/index.js'),
        computed: resolve(__dirname, './pages/computed/index.js')
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "vModel.html",
            template: resolve(__dirname, './directive/vModel/vModel.html'),
            chunks: ['vModel'],
        }),
        new HtmlWebpackPlugin({
            filename: "computed.html",
            template: resolve(__dirname, './pages/computed/computed.html'),
            chunks: ['computed'],
        })
    ],
    devServer: {
        contentBase:'./dist',
        host: 'localhost',
        port: 8080,
        hot: true,
        inline: true
    }
}