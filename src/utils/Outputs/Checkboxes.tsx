/**
 * @description Returns a "short-text" element to collect output data.
 */

import { Output } from "types/ProjectConfig";

export default function Checkboxes({
  item,
  index,
}: {
  item: Output;
  index: number;
}) {
  const id = `prompt-checkboxes-${index}`;
  return (
    <div className="flex-grow">
      <label className="block text-sm font-medium text-gray-700">
        {item.prompt}
      </label>
      <fieldset className="mt-2 flex flex-col gap-2">
        {item.options?.map(option => {
          return (
            <div
              key={`${id}-${option.key}`}
              className="relative flex items-start"
            >
              <div className="flex h-5 items-center">
                <input
                  id={`${id}-${option.key}`}
                  name={`${id}-${option.key}`}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor={`${id}-${option.key}`}
                  className="font-medium text-gray-700"
                >
                  {option.key}
                </label>
              </div>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
}
