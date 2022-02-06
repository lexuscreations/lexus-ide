import { useState } from "react";
import axios from "axios";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "./editorThemeImports";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import Output from "../output/Output";
import EditorControls from "./EditorControls";
import config from "../../../config";
import "./editor.css";

const Editor = () => {
  let [language, setLanguage] = useState("javascript");
  let [theme, setTheme] = useState("ayu-dark");
  let [code, setCode] = useState("");
  let [output, setOutput] = useState("");

  const exicuteCode = async () => {
    try {
      if (!language || !code) return;
      setOutput("Compiling...");
      const response = await axios.post(
        `${config().api_base_url}/api/v1/ide/compiler`,
        {
          language,
          code,
        },
        {
          "Content-Type": "application/json",
        }
      );
      setOutput(response.data.data);
    } catch (e) {
      setOutput(e.message);
    }
  };

  return (
    <>
      <EditorControls language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />

      <ControlledEditor
        onBeforeChange={(editor, data, value) => setCode(value)}
        value={code}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme,
          lineNumbers: true,
        }}
      />

      <div className="editor__run_button-container">
        <button
          className="edtr_submt_run_btn"
          id="btn"
          onClick={() => exicuteCode()}
        >
          &nbsp;Run&nbsp;
        </button>
      </div>

      <Output output={output}></Output>
    </>
  );
};

export default Editor;
