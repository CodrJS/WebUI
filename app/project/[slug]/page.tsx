"use client";
import { useProject } from "utils/contexts/ProjectContext";
import MarkdownIt from "utils/MarkdownIt";

const ProjectPage = () => {
  const project = useProject();

  return project ? (
    <div className="prose lg:prose-md">
      <h2>Guidelines:</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: MarkdownIt.render(project.general.guidelines),
        }}
      />
    </div>
  ) : null;
};

export default ProjectPage;
