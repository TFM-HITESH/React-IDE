import React, { useState } from "react";
import { classnames } from "../utils/general";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <>
    
    <div className={classnames(
          "focus:outline-none w-[100%] border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-gray-300 mt-2"
        )}> 
        <Editor
          height="80vh"
          width={`100%`}
          language={language || "javascript"}
          value={value}
          theme={theme}
          defaultValue="// some comment"
          onChange={handleEditorChange} />
      </div>
    </>
  );
};
export default CodeEditorWindow;
