import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import ProjectSchema from "public/schema/project.schema.json";

const EditorWindow = ({
  onChange,
  onError,
  onWarning,
  language,
  code,
}: {
  onChange: (action: string, value: string) => void;
  onError?: (message: string) => void;
  onWarning?: (message: string) => void;
  language: string;
  code?: string;
}) => {
  const [value, setValue] = useState<string>(code || "");

  const handleEditorChange = (value?: string) => {
    setValue(value as string);
    onChange("code", value as string);
  };

  return (
    <div className="flex flex-1 overflow rounded-md w-full h-full shadow-4xl border-2 border-slate-100">
      <Editor
        height={"100%"}
        width={`100%`}
        language={language || "json"}
        value={value}
        className="flex-1"
        onChange={handleEditorChange}
        beforeMount={monaco => {
          monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            schemas: [
              {
                uri: "https://codrjs.com/schema/project.schema.json",
                schema: ProjectSchema,
              },
            ],
            enableSchemaRequest: true,
          });
        }}
        onValidate={markers => {
          const errs = markers.filter(m => m.severity >= 8);
          const warns = markers.filter(m => m.severity == 4);
          const len = errs.length - 1;
          if (onWarning)
            onWarning(
              warns.length
                ? `Warning: ${warns[0].message}${
                    len > 0 ? ` +${len} more.` : ""
                  }`
                : "",
            );
          if (onError)
            onError(
              errs.length
                ? `Error: ${errs[0].message}${len > 0 ? ` +${len} more.` : ""}`
                : "",
            );
        }}
      />
    </div>
  );
};
export default EditorWindow;
