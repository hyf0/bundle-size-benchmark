import Terser from 'terser-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    filename: 'webpack.js',
    clean: false
  },
  optimization: {
    minimize: true,
    minimizer: [
      new Terser( {
        minify: Terser.swcMinify,
        terserOptions: {
          format: {
            comments: false
          }
        }
      } )
    ]
  }
};
