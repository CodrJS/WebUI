/**
 * @description The outputs controller for converting the display config into HTML elements.
 */

import { Sample } from "types/Dataset";
import { Input } from "types/ProjectConfig";
import md from "utils/MarkdownIt";
import traverse from "utils/traverse";
import Collapse from "./Collapse";

export default function Inputs(items: Input[], sample: Sample) {
  const out: [JSX.Element[], JSX.Element[]] = [[], []];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // deep copy the string, we don't want to modify the config value...
    let value = `${item.value}`;
    // get all model paths from the input value
    const modelPaths = value.match(/(model\.([\w*]\.?)+)/g);
    const inputs: string[] = [];

    if (modelPaths !== null) {
      if (modelPaths[0] === value) {
        const path = modelPaths[0].split(".");
        path.shift();
        inputs.push(...traverse(path, sample));
      } else {
        for (const modelPath of modelPaths) {
          const path = modelPath.split(".");
          path.shift();
          const result = traverse(path, sample);
          if (result.length === 1) {
            value = value.replace(modelPath, result[0].toString());
          }
        }
        inputs.push(value);
      }
    } else {
      inputs.push(item.value);
    }

    for (const input of inputs) {
      const text = input.toString();
      if (item.collapsible)
        out[0].push(
          <Collapse>
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(
                  item.type === "code"
                    ? `\`\`\`${item?.language}\n${text}\n\`\`\``
                    : text,
                ),
              }}
            />
          </Collapse>,
        );
      else
        out[1].push(
          <div
            className="prose prose-p:mb-0 prose-p:mt-0 border border-gray-200 rounded-lg py-2 px-4 shadow-sm"
            dangerouslySetInnerHTML={{
              __html: md.render(
                item.type === "code"
                  ? `\`\`\`${item?.language}\n${text}\n\`\`\``
                  : text,
              ),
            }}
          />,
        );
    }
  }
  return out;
}
