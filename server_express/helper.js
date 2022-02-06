const { codeSrcTempFileDir } = require("./config");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const fullPathTempFile = (fileExt) => {
    return path.join(codeSrcTempFileDir, `${Date.now()}_${uuidv4()}.${fileExt}`);
};

module.exports = {
    fullPathTempFile,
};