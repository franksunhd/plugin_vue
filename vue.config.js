const outputDir = process.env.outputDir || "dist";
const path = require("path");
module.exports = {
    publicPath: "",
    assetsDir: "static",
    productionSourceMap: false,
    outputDir,
    lintOnSave: false, // 是否关闭eslint校验代码， false 关闭
    pluginOptions: {
        i18n: {
            locale: "en",
            fallbackLocale: "en",
            localeDir: "locales",
            enableInSFC: false,
            enableBridge: false
        }
    }
};