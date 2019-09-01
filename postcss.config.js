module.exports = {
  plugins: [
    require("postcss-normalize")({ forceImport: true }),
    require("postcss-preset-env")({ stage: 0, autoprefixer: { grid: true } }),
    require("postcss-flexbugs-fixes")()
  ]
};

