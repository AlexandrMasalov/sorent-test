const path = require('path')
const miniCss = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader, 
          'css-loader', 
          'sass-loader'
        ]
      },
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new miniCss({
      filename: 'style.css',
    })
  ]
}
