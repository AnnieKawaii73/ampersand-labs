module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(less)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.less$/,
        use: ["babel-loader", "raw-loader", "less-loader"]
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext]',
            },
          },
          {
            loader: 'file-loader',
            options: {
              context: 'public',
              name: '/static/images/[name]-[hash].[ext]',
              publicPath: '/',
            },
          },
        ],
      }
    );
    return config;
  }
};
