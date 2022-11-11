"use client";
import DatasetTable from "components/DatasetTable";
import Head from "next/head";
import { useMemo } from "react";
import PROJECTS from "src/data/projects";

const ProjectPage = ({
  params,
}: {
  params: { slug: string; dataset: string };
}) => {
  const project = useMemo(() => {
    const result = PROJECTS.find(p => {
      return p.general.slug === params.slug;
    });
    return result;
  }, [params]);

  // use this in the future:
  //   https://github.com/vercel/next.js/discussions/10960
  return project ? (
    <>
      <Head>
        <title>Codr - {project.general.title}</title>
        <meta name="description" content="Codr Web UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DatasetTable />
    </>
  ) : null;
};

export default ProjectPage;
