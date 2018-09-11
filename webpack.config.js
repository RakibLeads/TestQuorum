const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './app/javascripts/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './app/create.html', to: 'create.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './app/home.html', to: 'home.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './app/institue.html', to: 'institue.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './app/issue.html', to: 'issue.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './app/login.html', to: 'login.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './app/register.html', to: 'register.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './app/recoverpw.html', to: 'recoverpw.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './app/subject.html', to: 'subject.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './app/verify.html', to: 'verify.html' }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(css|jpg)$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ],
    loaders: [
      { test: /\.json$/, use: 'json-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}
