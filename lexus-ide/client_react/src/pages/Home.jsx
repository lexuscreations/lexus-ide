import { useState } from "react";
import axios from "axios";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "../components/home/editorThemeImports";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import ThemeOptions from "../components/home/ThemeOptions";

const AboutPage = () => {
  let [language, setLanguage] = useState("javascript");
  let [code, setCode] = useState("");
  let [output, setOutput] = useState("");
  let [theme, setTheme] = useState("material");

  const changeLanguage = (e) => {
    let selectLanguage = e.target.value;
    if (selectLanguage === "javascript") {
      setLanguage("javascript");
    } else if (selectLanguage === "python") {
      setLanguage("python");
    }
    setLanguage(selectLanguage);
  };

  const exicuteCode = async () => {
    try {
      if (!language || !code) return;
      setOutput("Compiling...");
      const response = await axios.post(
        "http://localhost:4001/api/v1/ide/compiler",
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
      <div className="header">&nbsp;Lexus Online IDE</div>

      <div className="control-panel">
        Select Language: &nbsp;&nbsp;
        <select
          id="languages"
          className="controllOptions"
          value={language}
          onChange={(e) => changeLanguage(e)}
        >
          <option value="javascript">ES/JS/Node</option>
          <option value="python">Python</option>
        </select>
        &nbsp;&nbsp; Select Theme: &nbsp;&nbsp;
        <select
          id="theme"
          className="controllOptions"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <ThemeOptions />
        </select>
      </div>

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

      <div className="button-container">
        <button
          className="edtr_submt_run_btn"
          id="btn"
          onClick={() => exicuteCode()}
        >
          &nbsp;Run&nbsp;
        </button>
      </div>

      <textarea
        className="output"
        onChange={() => {}}
        value={output}
      ></textarea>
    </>
  );
};

export default AboutPage;
