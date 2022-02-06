const fs = require("fs");

const writeFileSync = (filePath, code) => {
    fs.writeFileSync(
        filePath,
        code, {
            encoding: "utf8",
            flag: "w",
            mode: 0o666,
        },
        (err) => {
            if (err) throw err;
        }
    );
};

module.exports = {
    writeFileSync,
};