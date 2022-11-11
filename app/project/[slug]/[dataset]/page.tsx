"use client";
import DatasetTable from "components/DatasetTable";
import { useProject } from "utils/contexts/ProjectContext";

const DatasetPage = () => {
  const project = useProject();

  return project ? (
    <>
      <DatasetTable />
    </>
  ) : null;
};

export default DatasetPage;
