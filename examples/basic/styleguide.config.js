module.exports = {
	components: 'src/components/**/*.js',
	defaultExample: true,
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					options: {
						presets: [['env', { modules: false }], 'stage-2'],
						plugins: ['transform-runtime'],
						comments: false,
						env: {
							test: {
								presets: ['env', 'stage-2'],
								plugins: ['istanbul'],
							},
						},
					},
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
				},

				{
					test: /\.json$/,
					loader: 'json-loader',
				},
				{
					test: /\.html$/,
					loader: 'html-loader',
				},
				{
					exclude: [/\.html$/, /\.js$/, /\.css$/, /\.vue$/, /\.json$/],
					loader: 'url-loader',
					query: {
						limit: 10000,
						name: 'static/media/[name].[hash:8].[ext]',
					},
				},
				{
					test: /\.(jpg|png|svg|gif)$/,
					use: ['file-loader'],
				}
			],
		},
	},
	serverPort: 6061,
};
