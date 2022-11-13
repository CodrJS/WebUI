/**
 * @description Returns a "short-text" element to collect output data.
 */

import { useState } from "react";
import { Output } from "types/ProjectConfig";

export default function Range({
  item,
  index,
}: {
  item: Output;
  index: number;
}) {
  const id = `prompt-short-text-${index}`;
  const range = item.range as [number, number];
  const [value, setValue] = useState<string>(
    ((range[1] - range[0]) / 2).toString(),
  );
  return (
    <div className="flex-grow">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {item.prompt}
      </label>
      <div className="flex items-center gap-2 mt-1">
        <span className="min-w-[2rem] text-center">{value}</span>
        <input
          type="range"
          name={id}
          id={id}
          min={(range[0] || 0).toString()}
          max={(range[1] || 100).toString()}
          onChange={event => setValue(event.target.value)}
          value={value}
          className="flex-grow rounded-lg appearance-none h-2 bg-sky-100 block w-full focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        />
      </div>
    </div>
  );
}
