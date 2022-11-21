/**
 * @description Returns a "short-text" element to collect output data.
 */

import { Output } from "types/ProjectConfig";
import md from "utils/MarkdownIt";

export default function LongText({
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
      <div className="mt-1">
        <textarea
          id={id}
          name={id}
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
        />
      </div>
    </div>
  );
}
