const LanguageOptions = () => {

  const languages = [
    {
      value: "javascript",
      showName: "ES/JS/Node"
    },
    {
      value: "python",
      showName: "Python"
    }
  ]

  return (
    <>
      {languages.map((val, ind) => (
        <option value={val.value} key={ind}>{val.showName}</option>
      ))}
    </>
  );
};

export default LanguageOptions;
