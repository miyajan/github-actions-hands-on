module.exports = {
  root: true,
  extends: "@cybozu/eslint-config/presets/node-prettier",
  plugins: ["jest"],
  env: {
    "jest/globals": true,
  },
};
