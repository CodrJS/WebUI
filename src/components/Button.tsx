import { PropsWithChildren } from "react";
import classNames from "utils/classNames";

export default function Button({
  primary = true,
  children,
}: PropsWithChildren<{ primary?: boolean }>) {
  const color = primary
    ? "bg-purple-600 hover:bg-purple-700 text-white"
    : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300";
  return (
    <button
      type="button"
      className={classNames(
        color,
        "inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
      )}
    >
      {children}
    </button>
  );
}
