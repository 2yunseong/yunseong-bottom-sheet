import path from 'path';
const __dirname = path.resolve();

export default {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    // library: 'MyModal',
    // libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/, // loader를 적용할 파일(정규식으로 작성)
        use: ['style-loader', 'css-loader'], // 사용할 loader
      },
    ],
  },
  externals: {
    react: 'react',
  },
};
