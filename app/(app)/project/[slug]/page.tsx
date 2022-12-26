"use client";
import ProjectNav from "components/ProjectNav";
import { DATASETS } from "data/projects";
import { useMemo } from "react";
import { useProject } from "utils/contexts/ProjectContext";
import MarkdownIt from "utils/MarkdownIt";

const ProjectPage = () => {
  const project = useProject();
  const datasets = useMemo(() => {
    return project ? DATASETS(project) : undefined;
  }, [project]);

  return project ? (
    <div className="flex flex-col lg:flex-row lg:flex-1">
      <ProjectNav datasets={datasets} />
      <div className="flex flex-col py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 flex-1">
        <div className="prose lg:prose-md">
          <h2>Guidelines:</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: MarkdownIt.render(project.general.guidelines),
            }}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default ProjectPage;
