var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './components/index.jsx',
	output: { path: __dirname + '/public', filename: 'bundle.js' },
	module: {
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react'],
				plugins: ['transform-class-properties']
			}
		}]
	}
}