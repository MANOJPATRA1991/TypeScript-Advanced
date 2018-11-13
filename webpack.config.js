const path = require('path');
module.exports = {
  entry: path.join(__dirname, 'src', 'app.ts'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader'
      }
    ]
  },
  devServer: {
    port: 3000
  }
};