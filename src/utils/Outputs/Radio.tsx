/**
 * @description Returns a "short-text" element to collect output data.
 */

import { Output } from "types/ProjectConfig";

export default function Radio({
  item,
  index,
}: {
  item: Output;
  index: number;
}) {
  const id = `prompt-radio-${index}`;
  return (
    <div className="flex-grow">
      <label className="block text-sm font-medium text-gray-700">
        {item.prompt}
      </label>
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
                className="ml-3 block text-sm font-medium text-gray-700"
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
