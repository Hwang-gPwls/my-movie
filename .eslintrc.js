module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // 'module' is not defined. 에러가 발생하면 기입
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto", // 개행문자 CRLF/LF 자동 설정
        semi: true, // 명령문 끝에 세미콜론 추가
        singleQuote: false, // 작은 따옴표 사용
      },
    ],
  },
};
