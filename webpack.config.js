const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',// nazwa ścieżki gdzie znajduje się plik
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'// nazwa stworzonej paczki
  },

  module: {
    rules: [
      {
        test: /\.m?js$/, // kiedy trafisz  na wszystkie pliki  z roszeżeniem js
        exclude: /(node_modules|bower_components)/, // pomiń
        use: { //wykorzystaj paczkę babel-loader
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i, // sprawdzamy pliki scss 
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html'})
  ]
};