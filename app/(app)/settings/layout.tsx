"use client";
import { BellIcon, CogIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { PropsWithChildren } from "react";
import classNames from "utils/classNames";

const subNavigation = [
  { name: "Profile", href: "#", icon: UserCircleIcon, current: false },
  { name: "Account", href: "#", icon: CogIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  // { name: 'Integrations', href: '#', icon: SquaresPlusIcon, current: false },
];

const SettingsPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Settings
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-1">
        <main className="mx-auto max-w-7xl pb-10 lg:py-12 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
              <nav className="space-y-1">
                {subNavigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-sky-600 hover:bg-white"
                        : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                      "group rounded-md px-3 py-2 flex items-center text-sm font-medium",
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-sky-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "flex-shrink-0 -ml-1 mr-3 h-6 w-6",
                      )}
                      aria-hidden="true"
                    />
                    <span className="truncate">{item.name}</span>
                  </a>
                ))}
              </nav>
            </aside>

            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default SettingsPageLayout;
