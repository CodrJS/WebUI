import { BgColorType } from "src/types/Colors";

// classification and translation to be implemented first
type TaskType = "classification" | "labeling" | "code-labeling" | "translation";
type InputField = "text";
type OutputField =
  | "short-text"
  | "long-text"
  | "radio"
  | "multiple-choice"
  | "range";

// what the researchers provide to display to users
interface Input<V> {
  type: InputField;
  language?: string;
  value: V;
}

// where the user provides their annotation
interface Output {
  type: OutputField;
  range?: [number, number]; // [min, max]
}

export default interface ProjectConfig {
  general: {
    type: TaskType;
    title: string;
    slug: string;
    bgColorClass: BgColorType;
    guidelines: string;
  };
  display: { inputs: Input<unknown>[]; outputs: Output[] };
  model: Record<string, unknown>;
}
