let path = require('path');

module.exports = {
  // mode: 'development',
  entry: './src/app.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      css: path.resolve(__dirname, 'src/components/')
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }

          },
        ]
      }
    ]
  }
}


