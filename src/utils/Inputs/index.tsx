/**
 * @description The outputs controller for converting the display config into HTML elements.
 */

import { Sample } from "types/Dataset";
import { Input } from "types/ProjectConfig";
import findAndReplace from "utils/findAndReplace";
import md from "utils/MarkdownIt";
import traverse from "utils/traverse";
import Collapse from "./Collapse";

export default function Inputs(items: Input[], sample: Sample) {
  const out: [JSX.Element[], JSX.Element[]] = [[], []];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // deep copy the string, we don't want to modify the config value...
    let value: string | any[] = `${item.value}`;
    let format = item.format ? `${item.format}` : undefined;
    // get all model paths from the input value
    const modelPaths = value.match(/(\$sample(\.[\w*[\]]+)*)/g);
    const inputs: string[] = [];

    if (modelPaths !== null) {
      const path = modelPaths[0].split(".");
      path.shift();
      value = traverse(path, sample);
    } else if (value === "undefined") {
      // default value to $sample
      value = [sample];
    }

    if (format) {
      // if a format is given
      for (const val of value as any[]) {
        inputs.push(findAndReplace(format, val, /(\$value(\.[\w*[\]]+)*)/g));

        // reset formated string.
        format = `${item.format}`;
      }
    } else {
      if (value instanceof Array) {
        inputs.push(...value);
      } else {
        inputs.push(value);
      }
    }

    let counter = 0;
    for (const input of inputs) {
      const text = input.toString();
      if (item.collapsible)
        out[0].push(
          <Collapse key={`collaplible-${counter++}`}>
            <div
              className="flex-grow"
              dangerouslySetInnerHTML={{
                __html: md.render(text),
              }}
            />
          </Collapse>,
        );
      else
        out[1].push(
          <div
            className="prose prose-p:mb-0 prose-p:mt-0 border border-gray-200 rounded-lg py-2 px-4 shadow-sm max-w-full"
            dangerouslySetInnerHTML={{
              __html: md.render(text),
            }}
          />,
        );
    }
  }
  return out;
}
