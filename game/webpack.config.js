const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path")
module.exports ={
    entry:"./src/index.ts",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"index.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
      },
    module:{
        rules:[
            {
                test:/.ts$/,
                loader:"ts-loader"
            }
        ]
    }

}