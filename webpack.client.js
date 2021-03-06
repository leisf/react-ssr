
const path = require('path')

//客户端的webpack

module.exports = {
	mode:"development",
	// 客户端入口
	entry:'./client/index.js',
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'public')
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/,
				options:{
					presets:['@babel/preset-react',['@babel/preset-env']]
				}
			}
		]
	}
}
