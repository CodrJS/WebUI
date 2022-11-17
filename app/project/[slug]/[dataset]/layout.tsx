"use client";
import Breadcrumbs from "components/Breadcrumbs";
import { DATASETS } from "data/projects";
import { PropsWithChildren, useMemo } from "react";
import Dataset from "types/Dataset";
import { DatasetProvider } from "utils/contexts/DatasetContext";
import { useProject } from "utils/contexts/ProjectContext";

export default function ProjectLayout({
  params,
  children,
}: PropsWithChildren<{
  params: { slug: string; dataset: string };
}>) {
  const project = useProject();
  const dataset = useMemo(() => {
    return project
      ? (DATASETS(project).find(
          v => v.slug === params.dataset,
        ) as unknown as Dataset)
      : undefined;
  }, [project, params.dataset]);

  return (
    <DatasetProvider value={dataset}>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Breadcrumbs />
      </div>
      <div className="flex flex-col flex-grow py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 flex-1">
        {children}
      </div>
    </DatasetProvider>
  );
}
