import { BgColorType } from "types/Colors";

// classification and translation to be implemented first
type TaskType = "classification" | "tagging" | "code-tagging" | "translation";
type InputField = "text";
type OutputField =
  | "short-text"
  | "long-text"
  | "radio"
  | "multiple-choice"
  | "range";

// what the researchers provide to display to users
export interface Input {
  type: InputField;
  value?: string;
  format?: string;
  collapsible?: boolean;
}

// where the user provides their annotation
export interface Output {
  type: OutputField;
  prompt?: string;
  range?: [number, number]; // [min, max]
  options?: string | { key: string; value: string | number }[];
}

export default interface ProjectConfig {
  general: {
    type: TaskType;
    title: string;
    slug: string;
    bgColorClass: BgColorType;
    guidelines: string;
  };
  display: { inputs: Input[]; outputs: Output[] };
  sample: { model: Record<string, unknown> };
}
