"use client";
import classNames from "utils/classNames";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronRightIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Dropdown from "components/Dropdown";
import PROJECTS from "data/projects";
import Link from "next/link";

const pinnedProjects = PROJECTS.filter(project => project.general.pinned);

const Home = () => {
  return (
    <>
      {/* Page title & actions */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 py-2 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Home
          </h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:ml-0"
          >
            Share
          </button>
          <Dropdown
            items={[{ href: "/project/new", title: "From config file" }]}
            className="order-0 sm:order-1 sm:ml-3"
          >
            Create
          </Dropdown>
        </div>
      </div>

      {/* Pinned projects */}
      <div className="mt-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-medium text-gray-900">Pinned Projects</h2>
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4"
        >
          {pinnedProjects.map(project => (
            <li
              key={project._id}
              className="relative col-span-1 flex rounded-md shadow-sm z-0"
            >
              <div
                className={classNames(
                  project.general.bgColorClass,
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md",
                )}
              >
                {project.general.title.split(" ").length > 1
                  ? project.general.title.split(" ")[0][0] +
                    project.general.title.split(" ")[1][0]
                  : project.general.title.split(" ")[0][0]}
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  <Link
                    href={`/project/${project.general.slug}`}
                    className="font-medium text-gray-900 hover:text-gray-600"
                  >
                    {project.general.title}
                  </Link>
                  {/* <p className="text-gray-500">
                    {project.general.totalMembers} Members
                  </p> */}
                </div>
                <Menu as="div" className="flex-shrink-0 pr-2">
                  <Menu.Button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-10 top-3 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={`/project/${project.general.slug}`}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm",
                              )}
                            >
                              View
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm",
                              )}
                            >
                              Removed from pinned
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={`/project/${project.general.slug}/settings`}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm",
                              )}
                            >
                              Edit
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-sm font-medium text-gray-900">Projects</h2>
        </div>
        <ul
          role="list"
          className="mt-3 divide-y divide-gray-100 border-t border-gray-200"
        >
          {PROJECTS.map(project => (
            <li key={project._id}>
              <Link
                href={`/project/${project.general.slug}`}
                className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
              >
                <span className="flex items-center space-x-3 truncate">
                  <span
                    className={classNames(
                      project.general.bgColorClass,
                      "w-2.5 h-2.5 flex-shrink-0 rounded-full",
                    )}
                    aria-hidden="true"
                  />
                  <span className="truncate text-sm font-medium leading-6">
                    {project.general.title}{" "}
                    <span className="truncate font-normal text-gray-500">
                      in {project.team.name}
                    </span>
                  </span>
                </span>
                <ChevronRightIcon
                  className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects table (small breakpoint and up) */}
      <div className="mt-8 hidden sm:block">
        <div className="inline-block min-w-full border-b border-gray-200 align-middle">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-gray-200">
                <th
                  className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                  scope="col"
                >
                  <span className="lg:pl-2">Project</span>
                </th>
                {/* <th
                  className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                  scope="col"
                >
                  Members
                </th> */}
                <th
                  className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                  scope="col"
                >
                  Last updated
                </th>
                <th
                  className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                  scope="col"
                />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {PROJECTS.map(project => (
                <tr key={project._id}>
                  <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                    <div className="flex items-center space-x-3 lg:pl-2">
                      <div
                        className={classNames(
                          project.general.bgColorClass,
                          "flex-shrink-0 w-2.5 h-2.5 rounded-full",
                        )}
                        aria-hidden="true"
                      />
                      <Link
                        href={`/project/${project.general.slug}`}
                        className="truncate hover:text-gray-600"
                      >
                        <span>
                          {project.general.title}{" "}
                          <span className="font-normal text-gray-500">
                            in {project.team.name}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </td>
                  {/* <td className="px-6 py-3 text-sm font-medium text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-shrink-0 -space-x-1">
                        {project.general.members.map(member => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={member.handle}
                            className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                            src={member.imageUrl}
                            alt={member.name}
                          />
                        ))}
                      </div>
                      {project.general.totalMembers >
                      project.general.members.length ? (
                        <span className="flex-shrink-0 text-xs font-medium leading-5">
                          +
                          {project.general.totalMembers -
                            project.general.members.length}
                        </span>
                      ) : null}
                    </div>
                  </td> */}
                  <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                    {project.general.updatedAt}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                    <Link
                      href={`/project/${project.general.slug}/settings`}
                      className="text-sky-600 hover:text-sky-900"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
