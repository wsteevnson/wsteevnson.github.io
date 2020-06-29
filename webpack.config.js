const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test:/\.html$/i,
                use: 'html-loader'
            },
            {
                test:/\.js$/i,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.(jpg|png|gif)/,
                use:{
                    loader:'file-loader'
                }
            },
            {
                test:/\.css$/i,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}