const path = require('path')
const HtmlWebpackPlugin= require('html-webpack-plugin')

module.exports = {
  mode:'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[chunkhash].js'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'src/index.html'
    })
  ]
}