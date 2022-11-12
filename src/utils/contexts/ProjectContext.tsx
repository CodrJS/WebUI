import createCtx from "utils/context";
import ProjectConfig from "types/ProjectConfig";

const [useContext, Provider] = createCtx<ProjectConfig>("project");

const ProjectContext = {
  useProject: useContext,
  ProjectProvider: Provider,
};

export default ProjectContext;
export const ProjectProvider = Provider;
export const useProject = useContext;
