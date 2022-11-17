/**
 * @description Returns a "short-text" element to collect output data.
 */

import { Output } from "types/ProjectConfig";
import md from "utils/MarkdownIt";

export default function Radio({
  item,
  index,
}: {
  item: Output;
  index: number;
}) {
  const id = `prompt-radio-${index}`;
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
          {item.options?.map(option => (
            <div key={`${id}-${option.key}`} className="flex items-center">
              <input
                id={`${id}-${option.key}`}
                name={id}
                type="radio"
                value={option.value}
                className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label
                htmlFor={`${id}-${option.key}`}
                className="ml-3 block text-gray-700"
              >
                {option.key}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
