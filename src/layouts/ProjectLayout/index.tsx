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
}: {
  project: project;
  datasets: INavItem[];
}) {
  return (
    <>
      {/** PROJECT DATASET LAYOUT */}
      <div className="flex flex-col lg:flex-row lg:flex-1">
        <DatasetNav project={project} datasets={datasets} />
      </div>
    </>
  );
}
