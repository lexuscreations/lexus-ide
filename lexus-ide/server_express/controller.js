const { spawn } = require("child_process");
const fs = require("fs");
const { throws } = require("assert");
const { writeFileSync } = require("./services");
const { fullPathTempFile } = require("./helper");

const compiler = (req, res) => {
    try {
        const { language, code } = req.body;
        console.log({ language, code });

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
                compilerName = "python";
                break;
        }

        const filePath = fullPathTempFile(fileExt);

        writeFileSync(filePath, code);

        const compilePointer = spawn(compilerName, [filePath]);

        compilePointer.stdout.on("data", (data) => output.push(data));

        compilePointer.on("close", (code) => {
            fs.unlink(filePath, (err) => err && throws);
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