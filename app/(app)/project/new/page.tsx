"use client";
import CodeEditor from "components/CodeEditor";
import { useState } from "react";
import LanguageOptions from "constants/LanguageOptions";
import classNames from "utils/classNames";

const defaultCode = `{
  "$schema": "https://codrjs.com/schema/project.schema.json",
  "general": {
    "title": "My Project",
    "type": "classification",
    "slug": "my-project",
    "bgColorClass": "bg-pink-600",
    "guidelines": "My guidelines go here."
  },
  "display": {
    "inputs": [
      {
        "type": "text",
        "format": "Text displayed to annotator"
      }
    ],
    "outputs": [
      {
        "type": "short-text"
      }
    ]
  },
  "sample": {
    "model": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        },
        "_id": {
          "type": "string"
        }
      },
      "required": [
        "type",
        "_id"
      ]
    }
  }
}`;

const ProjectNewFilePage = () => {
  const [hasError, setHasError] = useState(false);
  return (
    <>
      {/* Page title & actions */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Create a new project
          </h1>
        </div>
      </div>

      <CodeEditor
        defaultValue={defaultCode}
        languageOptions={[LanguageOptions[1]]}
        onError={err => {
          setHasError(!!err);
        }}
      />

      <div className="border-t border-gray-200 px-4 py-4 sm:flex sm:justify-between sm:px-6 lg:px-8 align-items-end">
        <button
          type="button"
          disabled={hasError}
          className={classNames(
            "inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700",
            "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
            "disabled:bg-sky-400 disabled:cursor-not-allowed",
          )}
        >
          Create Project
        </button>
      </div>
    </>
  );
};

export default ProjectNewFilePage;
