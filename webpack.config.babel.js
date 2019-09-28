const path = require('path');

module.exports = (env, argv) => {

    return {

        entry: path.resolve(__dirname, 'source/index.js'),

        devServer: {
            compress: true,
			historyApiFallback: true,
            contentBase: path.resolve(__dirname, 'public'),
			port: 8083
        },
        
        output: {
            filename: 'ui.min.js',
            path: path.resolve(__dirname, 'public')
        },
		
        module: {
            rules: [
				{
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
				},
                {
                    test: /\.scss$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        'style-loader',
                        'css-loader?-url',
                        'sass-loader'
                    ]
                },
				{
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    exclude: /(node_modules|bower_components)/,

	                use: [
						'file-loader'
					]
	            }
			]
        },

        optimization: {
            minimize: true
        }

    }
}
