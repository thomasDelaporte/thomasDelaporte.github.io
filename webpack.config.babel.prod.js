const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {

    return {

        entry: path.resolve(__dirname, 'source/index.js'),

        output: {
            filename: 'ui.min.js',
            path: path.resolve(__dirname, 'public')
        },

        devtool: 'source-map',
		
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
            nodeEnv: 'production',
            flagIncludedChunks: true,
            occurrenceOrder: true,
            sideEffects: true,
            usedExports: true,
            concatenateModules: true,
            checkWasmTypes: true,
            minimize: true
        }
    }
}
