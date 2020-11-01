const path = require('path')

config = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        publicPath: 'dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
        ],
    },
}

module.exports = (env, argv) => {
    config.devtool =
        argv === 'production' ? 'none' : 'eval-cheap-module-source-map'

    return config
}
