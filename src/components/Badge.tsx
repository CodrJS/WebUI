import { PropsWithChildren } from "react";
import classNames from "utils/classNames";

export default function Badge({
  children,
  large = false,
  danger = false,
}: PropsWithChildren<{ large?: boolean; danger?: boolean }>) {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full py-0.5 font-medium text-gray-800",
        large ? "px-3 text-sm" : "px-2.5 text-xs",
        danger ? "bg-red-200" : "bg-green-200",
      )}
    >
      {children}
    </span>
  );
}
