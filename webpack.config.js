const path = require('path');

module.exports = {
  entry: './client/app.jsx',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, './public')
  }, 
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};