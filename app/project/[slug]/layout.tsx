"use client";
import Link from "next/link";
import { PropsWithChildren, useMemo } from "react";
import DatasetNav from "./Nav";
import PROJECTS, { DATASETS } from "src/data/projects";

export default function ProjectLayout({
  params,
  children,
}: PropsWithChildren<{
  params: { slug: string; dataset?: string };
}>) {
  console.log("/[slug] layout", params);
  const project = useMemo(() => {
    const result = PROJECTS.find(p => {
      return p.general.slug === params.slug;
    });
    return result;
  }, [params]);
  const datasets = useMemo(() => {
    return project ? DATASETS(project) : undefined;
  }, [project]);
  return (
    <>
      {/* Page title & actions */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            {project?.general.title}
          </h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <Link
            passHref
            href={`/project/${params.slug}/settings`}
            className="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-0"
          >
            Settings
          </Link>
        </div>
      </div>
      {/** PROJECT DATASET LAYOUT */}
      <div className="flex flex-col lg:flex-row lg:flex-1">
        <DatasetNav
          project={project}
          datasets={datasets}
          currentRoute={`/project/${params.slug}${
            params.dataset ? `/${params.dataset}` : ""
          }`}
        />
        {children}
      </div>
    </>
  );
}