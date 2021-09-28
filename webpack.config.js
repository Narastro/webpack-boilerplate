const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BASE_JS = "./src/client/js/";
const isDev = process.env.NODE_ENV === "development"; // Dev모드일 때만 소스맵 사용

module.exports = {
  // 처리하고자 하는 파일
  entry: {
    app: BASE_JS + "app.js",
  },
  devtool: isDev ? "eval" : "inline-source-map",
  // 사용할 플러그인
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  // 결과물
  output: {
    filename: "js/[name].js", // [name]은 변수
    path: path.resolve(__dirname, "assets"),
    clean: true, // 기존 파일을 지우고 생성을 반복
  },
  module: {
    // 파일 종류에 따라 어떤 변환을 할 것인지
    rules: [
      {
        // js파일의 경우
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // 프론트단의 바벨
        },
      },
      // scss 파일의 경우
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // 뒤에서부터 적용
        // scss를 css로 변환 후 css를 js파일로 변경 후 그 파일을 style.css로 통합한다.
      },
    ],
  },
};
