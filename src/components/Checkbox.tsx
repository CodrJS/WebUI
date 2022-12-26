import { ChangeEvent } from "react";

export default function Checkbox({
  name,
  label,
  // disabled,
  defaultChecked,
  required,
  onChange
}: {
  name: string;
  label?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative flex items-start">
      <div className="flex h-5 items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          defaultChecked={defaultChecked}
          required={required}
          className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
          onChange={onChange}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={name} className="font-medium text-gray-700">
          {label}
        </label>
      </div>
    </div>
  );
}
