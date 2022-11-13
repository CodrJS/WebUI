import { useProject } from "utils/contexts/ProjectContext";

export default function ProjectHeader() {
  const project = useProject();
  return (
    <div className="min-w-0 flex-1">
      <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
        {project.general.title}
      </h1>
    </div>
  );
}
