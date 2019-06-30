const path = require('path')

module.exports = {
	mode: 'development',
	devtool: 'source-maps',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'walter-white.js',
		library: {
      root: 'WalterWhite',
      commonjs: 'walterwhite'
    },
		libraryTarget: 'umd'
	},
	externals: [
		'ramda'
	]
}
