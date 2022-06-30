const { strTrimer } = require("./stringTrimer");

module.exports.nullToStr = function (value) {
    if (value === undefined || value === null) return "";
    return strTrimer(value);
};
