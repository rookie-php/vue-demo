//根据参照文件生成index.html
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test:/\.vue$/,
        use: [
          {loader:'vue-loader'}
        ]
      },
      {
        test:/\.css$/,
        use: [
          {loader:'vue-style-loader'},
          {loader:'css-loader'}
        ]
      },
      {
        test: /\.(ttf|png|gif|svg)$/,
        use: [
          {loader: 'file-loader'}
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.vue', '.js', '.json']
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:'./template.html',//参照文件
        filename:'index.html' //生成的index.html
    })
]
}