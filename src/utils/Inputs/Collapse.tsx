import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { PropsWithChildren } from "react";

export default function Collapse({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <Disclosure
      as="div"
      className="rounded-md shadow-sm border border-gray-200"
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full py-2 px-4 items-center">
            <span className="flex-grow text-left">{title}</span>
            <ChevronUpIcon
              className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 prose min-w-full">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
