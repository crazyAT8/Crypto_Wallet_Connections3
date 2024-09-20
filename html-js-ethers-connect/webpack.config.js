const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point for your JS files
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
};