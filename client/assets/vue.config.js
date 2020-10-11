const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '/src')
      }
    }
  },
  outputDir: 'src/main/resources/static',
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
}