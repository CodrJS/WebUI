/**
 * @description The outputs controller for converting the display config into HTML elements.
 */

import { Sample } from "types/Dataset";
import { Output } from "types/ProjectConfig";
import Checkboxes from "./Checkboxes";
import LongText from "./LongText";
import Radio from "./Radio";
import Range from "./Range";
import ShortText from "./ShortText";

export default function Outputs(items: Output[], sample: Sample) {
  const out = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    switch (item.type) {
      case "short-text":
        out.push(<ShortText item={item} index={i} />);
        break;
      case "long-text":
        out.push(<LongText item={item} index={i} />);
        break;
      case "radio":
        out.push(<Radio item={item} index={i} sample={sample} />);
        break;
      case "range":
        out.push(<Range item={item} index={i} />);
        break;
      case "multiple-choice":
        out.push(<Checkboxes item={item} index={i} />);
        break;
    }
  }
  return out;
}
