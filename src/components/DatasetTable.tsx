"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import classNames from "utils/classNames";
import { useProject } from "utils/contexts/ProjectContext";
import Badge from "./Badge";

const people = [
  {
    id: 1,
    status: "complete",
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    annotation: "...",
  },
  {
    id: 2,
    status: "complete",
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    annotation: "...",
  },
  {
    id: 3,
    status: "complete",
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    annotation: "...",
  },
  {
    id: 4,
    status: "incomplete",
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    annotation: "...",
  },
  // More people...
];

export default function DatasetTable() {
  const project = useProject();
  const currentRoute = usePathname();
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selected, setSelected] = useState<Array<any>>([]);

  useEffect(() => {
    const isIndeterminate =
      selected.length > 0 && selected.length < people.length;
    setChecked(selected.length === people.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) checkbox.current.indeterminate = isIndeterminate;
  }, [selected]);

  function toggleAll() {
    setSelected(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }
  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Dataset</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of samples from the dataset.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:w-auto"
          >
            Import
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 overflow-x-auto max-w-screen">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selected.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  {/* <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Hide
                  </button> */}
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <div
                className="table min-w-full table-fixed divide-y divide-gray-300"
                role="table"
              >
                <div className="table-header-group bg-gray-50">
                  <div className="flex border-b border-gray-200">
                    <div className="table-col relative w-12 px-6 sm:w-16 sm:px-8">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </div>
                    <div className="table-col min-w-[6rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                      ID
                    </div>
                    <div className="table-col min-w-[6rem] px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </div>
                    <div className="table-col min-w-[6rem] flex-grow px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Annotation
                    </div>
                    <div className="table-col relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Annotate</span>
                    </div>
                  </div>
                </div>
                <div className="table-row-group divide-y divide-gray-200 bg-white">
                  {people.map((item, personIdx) => (
                    <div
                      key={item.id}
                      className={classNames(
                        "flex hover:bg-sky-50",
                        selected.includes(item)
                          ? "bg-gray-50"
                          : personIdx % 2 === 0
                          ? ""
                          : "bg-gray-50",
                      )}
                    >
                      <div className="table-col relative w-12 px-6 sm:w-16 sm:px-8">
                        {selected.includes(item) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-sky-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-sky-600 hover:cursor-pointer focus:ring-sky-500 sm:left-6"
                          value={item.email}
                          checked={selected.includes(item)}
                          onChange={e =>
                            setSelected(
                              e.target.checked
                                ? [...selected, item]
                                : selected.filter(p => p !== item),
                            )
                          }
                        />
                      </div>
                      <div
                        className={classNames(
                          "table-col min-w-[6rem] whitespace-nowrap py-4 pr-3 text-sm font-medium",
                          selected.includes(item)
                            ? "text-sky-600"
                            : "text-gray-900",
                        )}
                      >
                        {item.id}
                      </div>
                      <div className="table-col min-w-[6rem] whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Badge danger={item.status === "incomplete"}>
                          {item.status}
                        </Badge>
                      </div>
                      <div className="table-col min-w-[6rem] flex-grow whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.annotation}
                      </div>
                      <div className="table-col whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link
                          href={`${currentRoute}/${project.general.slug}`}
                          className="text-sky-600 hover:text-sky-900"
                        >
                          Annotate<span className="sr-only">, {item.id}</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
