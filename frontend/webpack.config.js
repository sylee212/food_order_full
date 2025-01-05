const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");








module.exports = {
    mode : "development",




    entry : { bundle: path.resolve( __dirname, "src/index.js" ) },
    output :
    {
        path : path.resolve( __dirname, "dist" ),
        filename: "[name][contenthash].js",
        clean: true,
        assetModuleFilename: "[name][ext]"




    },




    devServer: {
        static:{
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },

    resolve: {
        fallback: {
          crypto: false,
          path: false,
        },
    },
      



    module : {




        // this is the loaders, in this case we are using css-loader and sass-loader
        rules:
        [
            {
                test: /\.module\.css$/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      modules: true, // Enable CSS Modules
                      sourceMap: true,
                    },
                  },
                  "postcss-loader", // Add this only if you are using PostCSS
                ],
              },
              // Global CSS Rule
              {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
              },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.pdf$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]', // Save PDFs in 'assets' directory
                },
            },
            {
                test: /\.(js|jsx)$/, // Match JavaScript and JSX files
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                  },
                },
            },




        ]
    },




    plugins : [
        new HtmlWebpackPlugin(
            {
                title: "Webpack App",
                filename: "index.html",
                template: path.resolve( __dirname, "src/template.html" )
               
            }
        )
    ]
}
