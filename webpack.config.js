module.exports = {
  entry: './src/app/index',
  output: {
    path: __dirname + '/src/public/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader'
        },
        test: /\.js$/,
        exclude: /node_modules/,
      }
    ]
  }
};
