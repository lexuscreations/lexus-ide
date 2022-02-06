const { spawn } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { writeFileSync } = require("./services");
const { fullPathTempFile } = require("./helper");

const compiler = (req, res) => {
    try {
        const { language, code } = req.body;

        const output = [];

        let fileExt;
        let compilerName;

        switch (language) {
            case "javascript":
                fileExt = "js";
                compilerName = "node";
                break;
            case "python":
                fileExt = "py";
                compilerName = os.type() == 'Windows_NT' ? "python" : "python3";
                break;
        }

        const filePath = fullPathTempFile(fileExt);

        writeFileSync(filePath, code);

        const compilePointer = spawn(compilerName, [filePath]);

        compilePointer.stdout.on("data", (data) => output.push(data));

        compilePointer.on("close", (code) => {
            fs.readdir(`${path.join(__dirname,"./temp")}`, (err, files) => {
                if (err) throw err;
                files.filter(e => e).forEach(e => {
                    if(e != '.' && e != '..') {
                        fs.unlink(`${path.join(__dirname,"./temp")}/${e}`, (err) => {
                            if (err) throw err;
                        });
                    }
                })
            });
            res.status(200).json({
                stsCode: code,
                msg: "Complied Successfully!",
                data: output.join(""),
            });
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    compiler,
};