import Link from "next/link";
import { PropsWithChildren } from "react";
import { project } from "src/data/projects";
import DatasetNav from "./Nav";

interface INavItem {
  name: string;
  href: string;
  count?: string;
}

export default function ProjectLayout({
  project,
  datasets,
  children,
}: PropsWithChildren<{
  project: project;
  datasets?: INavItem[];
}>) {
  return (
    <>
      {/* Page title & actions */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            {project.general.title}
          </h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <Link passHref href={`/project/${project.general.slug}/settings`}>
            <a className="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-0">
              Settings
            </a>
          </Link>
        </div>
      </div>
      {/** PROJECT DATASET LAYOUT */}
      <div className="flex flex-col lg:flex-row lg:flex-1">
        <DatasetNav project={project} datasets={datasets} />
        {children}
      </div>
    </>
  );
}
