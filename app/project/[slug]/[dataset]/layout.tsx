"use client";
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

  return <DatasetProvider value={dataset}>{children}</DatasetProvider>;
}
