/**
 * @description Returns a "short-text" element to collect output data.
 */

import { useMemo } from "react";
import { Sample } from "types/Dataset";
import { Output } from "types/ProjectConfig";
import md from "utils/MarkdownIt";
import traverse from "utils/traverse";

export default function Radio({
  item,
  index,
  sample,
}: {
  item: Output;
  index: number;
  sample: Sample;
}) {
  const id = `prompt-radio-${index}`;
  const options = useMemo(() => {
    if (item.options) {
      if (item.options instanceof Array) {
        return item.options;
      } else if (typeof item.options === "string") {
        const samplePath = item.options.match(/(\$sample(\.[\w*[\]]+)*)/g);

        if (samplePath !== null) {
          const path = samplePath[0].split(".");
          path.shift();
          const result = traverse(path, sample).map((opt, idx) => ({
            key: `${id}-${idx + 1}`,
            value: opt,
          }));
          return result;
        } else {
          return [];
        }
      } else {
        throw new Error(
          `Expected options of ${id} to be a string or array, but found ${typeof item.options}`,
        );
      }
    } else {
      throw new Error(
        `Expected ${id} to have a parameter "options," but found "undefined"`,
      );
    }
  }, [id, item.options, sample]);

  return (
    <div className="flex-grow" key={id}>
      <label
        className="block font-medium text-gray-700"
        dangerouslySetInnerHTML={{
          __html: item.prompt ? md.render(item.prompt) : "",
        }}
      />
      <fieldset className="mt-2">
        <legend className="sr-only"></legend>
        <div className="space-y-2">
          {options.map(option => {
            console.log(option);
            return (
              <div key={option.key} className="flex items-center">
                <input
                  id={option.key}
                  name={id}
                  type="radio"
                  value={option.value}
                  className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <label
                  htmlFor={option.key}
                  className="ml-3 block text-gray-700"
                >
                  {option.value}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
