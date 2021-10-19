const webpack = require('webpack')

module.exports = e => {

  const env = e || {};

  return {
    entry: {
      main: "./src/index.tsx"
    },

    output: {
      filename: "[name].bundle.js",
      path: __dirname + "/./public/assets",
      publicPath: '/assets/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
      contentBase: './public',
      publicPath: '/assets/',
      historyApiFallback: {
        index: 'index.html'
      }
    },

    resolve: {
        // Add '.ts', '.tsx', and '.mjs' as resolvable extensions.
        // '.mjs' is used by the graphql library which is a dependency of aws-amplify
        extensions: [".mjs", ".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|jpe?g|svg)$/,
              loader: 'file-loader',
              options: {
                  name: 'images/[name].[ext]',
              }
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            //{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:3000')
      }),
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
  };
}
