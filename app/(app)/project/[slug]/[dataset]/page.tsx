"use client";
import DatasetTable from "components/DatasetTable";
import { useDataset } from "utils/contexts/DatasetContext";
import { useProject } from "utils/contexts/ProjectContext";

const DatasetPage = () => {
  const project = useProject();
  const dataset = useDataset();

  return project ? <DatasetTable items={dataset.samples} /> : null;
};

export default DatasetPage;
