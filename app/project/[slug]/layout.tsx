"use client";
import Link from "next/link";
import { PropsWithChildren, useMemo, useState } from "react";
import PROJECTS from "data/projects";
import { ProjectProvider } from "utils/contexts/ProjectContext";
import ProjectHeader from "components/ProjectHeader";
import SlideOver from "components/SlideOver";
import md from "utils/MarkdownIt";
import Button from "components/Button";

export default function ProjectLayout({
  params,
  children,
}: PropsWithChildren<{
  params: { slug: string; dataset?: string };
}>) {
  // use this in the future:
  //   https://github.com/vercel/next.js/discussions/10960
  const project = useMemo(() => {
    const result = PROJECTS.find(p => {
      return p.general.slug === params.slug;
    });
    return result;
  }, [params]);
  const [open, setOpen] = useState(false);

  function togglePanel() {
    setOpen(!open);
  }

  return (
    <ProjectProvider value={project}>
      <SlideOver open={open} toggleOpen={togglePanel} title="Guidelines" wide>
        <div
          className="prose lg:prose-md prose-code:not-prose"
          dangerouslySetInnerHTML={{
            __html: project ? md.render(project.general.guidelines) : "",
          }}
        />
      </SlideOver>
      {/* Page title & actions */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <ProjectHeader />
        <div className="mt-4 flex sm:mt-0 sm:ml-4 gap-2">
          <Link href={`/project/${params.slug}/settings`}>
            <Button primary={false}>Settings</Button>
          </Link>
          <Button onClick={togglePanel}>Guidelines</Button>
        </div>
      </div>
      {/** PROJECT DATASET LAYOUT */}
      <div className="flex flex-col flex-grow">{children}</div>
    </ProjectProvider>
  );
}
