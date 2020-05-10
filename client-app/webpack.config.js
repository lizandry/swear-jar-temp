module.exports = {
    entry: './src/index.tsx',
    output: {
      path: __dirname + '/public',
      filename: 'build/app.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
        test: /\.css$/i,
        use: ['style-loader', 
        'css-loader'],
                  },
      ]
    },
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3001,
        // TODO configure fs in here
        // https: {
        //     key: fs.readFileSync('../server/localhost-key.pem'),
        //     cert: fs.readFileSync('../server/localhost.pem'),
        //   },
        proxy: {
            '/api': {
                target: 'https://localhost:5000',
                // TODO https/auth0 integration?
                secure: false
            }
        }
    }
  }