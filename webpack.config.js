const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
			/* Transpiler do Javascript */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
			/* Transpiler do CSS  */
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader' },
          {loader: 'css-loader' },
        ]
      },
      /* Transpiler de Imagens */
      {
        test: /.*\.(gif|png|ico|jpe?g)$/i,
        use: {
          loader: 'file-loader', 
        }     
      }
    ]
  }
}