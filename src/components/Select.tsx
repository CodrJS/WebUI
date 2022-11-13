import { BaseSyntheticEvent } from "react";

export default function Select({
  title,
  name,
  defaultValue,
  options,
  placeholder,
  onChange,
}: {
  title?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  options: { name: string; value: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <select
        id={`select ${name}`}
        placeholder={placeholder}
        name={name}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        defaultValue={defaultValue}
        onChange={(e: BaseSyntheticEvent) => {
          console.log(e.target.value);
          onChange(e.target.value);
        }}
      >
        {options.map(opt => {
          return (
            <option key={`option ${opt?.name}`} value={opt?.value}>
              {opt?.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
