import createCtx from "utils/context";
import Dataset from "types/Dataset";

const [useContext, Provider] = createCtx<Dataset>("dataset");

const DatasetContext = {
  useDataset: useContext,
  DatasetProvider: Provider,
};

export default DatasetContext;
export const DatasetProvider = Provider;
export const useDataset = useContext;
