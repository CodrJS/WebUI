import { PropsWithChildren } from "react";
import classNames from "utils/classNames";

export default function Button({
  primary = true,
  children,
}: PropsWithChildren<{ primary?: boolean }>) {
  const color = primary
    ? "bg-sky-600 hover:bg-sky-700 text-white border border-transparent "
    : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300";
  return (
    <button
      type="button"
      className={classNames(
        color,
        "inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
      )}
    >
      {children}
    </button>
  );
}
