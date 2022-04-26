import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  entry: {
    // Compile <value> file and output as <key> name in output path.
    // In this case, `dist/index.js` will be generated
    index: './src/index.js',
  },
  output: {
    path: path.resolve(dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // This adds <script> to index.html
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      // This copies static files
      patterns: [
        { from:'assets/images', to:'images' },
        { from:'public/manifest.json', to:'manifest.json' },
        { from:'public/robots.txt', to:'robots.txt' },
      ],
    }),
    // This loads environment variables inside .env and replaces
    // `process.env.<VARIABLE>` during compilation.
    new Dotenv(),
  ],
};

export default config;
