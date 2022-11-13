/**
 * @description The outputs controller for converting the display config into HTML elements.
 */

import { Sample } from "types/Dataset";
import { Input } from "types/ProjectConfig";
import md from "utils/MarkdownIt";
import traverse from "utils/traverse";
import Collapse from "./Collapse";

export default function Inputs(items: Input[], sample: Sample) {
  const out = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const hasModelPath = /model\.([\w*]\.?)+/g.test(item.value);
    let inputs: string[] = [];

    if (hasModelPath) {
      const path = item.value.split(".");
      path.shift();
      inputs = traverse(path, sample);
    } else {
      inputs.push(item.value);
    }

    for (const input of inputs) {
      out.push(
        <Collapse>
          <div
            dangerouslySetInnerHTML={{
              __html: md.render(
                item.type === "code"
                  ? `\`\`\`${item?.language}\n${input.toString()}\n\`\`\``
                  : input.toString(),
              ),
            }}
          />
        </Collapse>,
      );
    }
  }
  return out;
}
