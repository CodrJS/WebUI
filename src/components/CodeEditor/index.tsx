import React, { useEffect, useState } from "react";
import EditorWindow from "./EditorWindow";
import LanguageOptions, { LanguageOption } from "src/constants/LanguageOptions";
import LanguagesDropdown from "./LanguagesDropdown";

const CodeEditor = ({
  defaultValue,
  languageOptions,
  onUpdate,
  onError,
}: {
  defaultValue?: string;
  languageOptions?: LanguageOption[];
  onUpdate?: (code: string) => void;
  onError?: (message: string) => void;
}) => {
  const [code, setCode] = useState(defaultValue);
  const [language, setLanguage] = useState<string>(
    languageOptions?.length
      ? languageOptions[0].value
      : LanguageOptions[0].value,
  );
  const [error, setError] = useState<string>("");
  const [warning, setWarning] = useState<string>("");

  useEffect(() => {
    if (onError) onError(error || warning);
  }, [error, warning, onError]);

  useEffect(() => {
    if (onUpdate) onUpdate(code as string);
  }, [code, onUpdate]);

  const onSelectChange = (sl: string) => {
    setLanguage(sl);
  };

  const onChange = (action: string, value: string) => {
    switch (action) {
      case "code": {
        setCode(value);
        break;
      }
      default: {
        console.warn("case not handled!", action, value);
      }
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-row">
        <div className="px-4 py-2">
          <LanguagesDropdown
            onSelectChange={onSelectChange}
            options={languageOptions}
            defaultValue={language}
          />
        </div>
        <div className="px-4 py-2 flex-1 relative">
          <div className="absolute text-yellow-600 bottom-6">{warning}</div>
          <div className="absolute text-red-700 bottom-2">{error}</div>
        </div>
      </div>
      <div className="flex flex-row flex-1 space-x-4 items-start px-4 py-4">
        <div className="flex flex-col w-full h-full justify-start items-end">
          <EditorWindow
            code={code}
            onChange={onChange}
            language={language}
            onError={setError}
            onWarning={setWarning}
          />
        </div>
      </div>
    </div>
  );
};
export default CodeEditor;
