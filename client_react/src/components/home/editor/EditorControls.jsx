import ThemeOptions from "./ThemeOptions";
import LanguageOptions from "./LanguageOptions";

const EditorControls = ({language, setLanguage, theme, setTheme}) => {
  return (
    <>
      <div className="editor__control-panel">
        <span>
            Select Language: &nbsp;&nbsp;
            <select id="languages" className="controllOptions" value={language} onChange={(e) => setLanguage(e.target.value)} >
                <LanguageOptions />
            </select>
        </span>

        <span>
            &nbsp;&nbsp; Select Theme: &nbsp;&nbsp;
            <select id="theme" className="editor__controllOptions" value={theme} onChange={(e) => setTheme(e.target.value)} >
                <ThemeOptions />
            </select>
        </span>
      </div>
    </>
  );
};

export default EditorControls;
