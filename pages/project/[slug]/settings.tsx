import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";
import PROJECTS, { DATASETS } from "src/data/projects";
import ProjectLayout from "src/layouts/ProjectLayout";

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const project = useMemo(() => {
    const result = PROJECTS.find(p => {
      return p.general.slug === router.query.slug;
    });
    return result;
  }, [router]);
  const datasets = useMemo(() => {
    return project ? DATASETS(project) : undefined;
  }, [project]);

  // use this in the future:
  //   https://github.com/vercel/next.js/discussions/10960
  return router.isReady && project ? (
    <>
      <Head>
        <title>Codr - {project.general.title}</title>
        <meta name="description" content="Codr Web UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectLayout project={project} datasets={datasets}>
        <div className="prose lg:prose-md py-4 px-8">
          <h2>Settings:</h2>
        </div>
      </ProjectLayout>
    </>
  ) : null;
};

export default ProjectPage;
