/**
 * @description Returns a "short-text" element to collect output data.
 */

import { Output } from "types/ProjectConfig";
import md from "utils/MarkdownIt";

export default function ShortText({
  item,
  index,
}: {
  item: Output;
  index: number;
}) {
  const id = `prompt-short-text-${index}`;
  return (
    <div className="flex-grow" key={id}>
      <label
        htmlFor={id}
        className="block font-medium text-gray-700"
        dangerouslySetInnerHTML={{
          __html: item.prompt ? md.render(item.prompt) : "",
        }}
      />
      <input
        type="text"
        name={id}
        id={id}
        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
      />
    </div>
  );
}
