import { Menu, Transition } from "@headlessui/react";
import {
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import classNames from "utils/classNames";
import { useProfile } from "utils/contexts/ProfileContext";
import navigation from "./Navigation";

export default function DesktopSidebar() {
  const pathname = usePathname();
  const [profile] = useProfile();
  const name = profile?.user?.name;

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4">
      <div className="flex flex-shrink-0 items-center px-6 text-lg">Codr</div>
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="mt-6 flex h-0 flex-1 flex-col overflow-y-auto">
        {/* User account dropdown */}
        <Menu as="div" className="relative inline-block px-3 text-left mt-1">
          <div>
            <Menu.Button className="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <span className="flex w-full items-center justify-between">
                <span className="flex min-w-0 items-center justify-between space-x-3">
                  <span className="relative inline-block">
                    {/* <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    /> */}
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                      <span className="font-medium leading-none text-white">
                        {name?.preferred
                          ? name.preferred.charAt(0)
                          : name?.first?.charAt(0)}
                        {name?.last?.charAt(0)}
                      </span>
                    </span>
                    <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-sm font-medium text-gray-900">
                      {name?.preferred ? name.preferred : name?.first}{" "}
                      {name?.last}
                    </span>
                    <span className="truncate text-sm text-gray-500">
                      @{profile?.username}
                    </span>
                  </span>
                </span>
                <ChevronUpDownIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {/* <Menu.Item>
                  {({ active }) => (
                    <Link
                      passHref
                      href="/profile"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm",
                      )}
                    >
                      View profile
                    </Link>
                  )}
                </Menu.Item> */}
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      passHref
                      href="/settings/profile"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm",
                      )}
                    >
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      passHref
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm",
                      )}
                    >
                      Notifications
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      passHref
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm",
                      )}
                    >
                      Get desktop app
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      passHref
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm",
                      )}
                    >
                      Support
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      passHref
                      prefetch={false}
                      href="/api/v1/auth/logout"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm",
                      )}
                    >
                      Logout
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* Sidebar Search */}
        <div className="mt-5 px-3">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              aria-hidden="true"
            >
              <MagnifyingGlassIcon
                className="mr-3 h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-md border-gray-300 pl-9 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="mt-6 px-3">
          <Link
            passHref
            href="/"
            className={classNames(
              "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
              "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
            )}
            aria-current={undefined}
          >
            <HomeIcon
              className={classNames(
                "text-gray-400 group-hover:text-gray-500",
                "mr-3 flex-shrink-0 h-6 w-6",
              )}
              aria-hidden="true"
            />
            Home
          </Link>
        </div>
        {/* Navigation */}
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigation.map(item => (
              <Link
                passHref
                key={item.name}
                href={item.href}
                className={classNames(
                  item.href === pathname
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                )}
                aria-current={item.href === pathname ? "page" : undefined}
              >
                <item.icon
                  className={classNames(
                    item.href === pathname
                      ? "text-gray-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "mr-3 flex-shrink-0 h-6 w-6",
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
