import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";
import projects from "src/data/projects";
import ProjectLayout from "src/layouts/ProjectLayout";


const datasets = [
  { name: "Dataset 1", href: "/project/graphql-api/dataset-1", count: "5" },
  { name: "Dataset 2", href: "/project/graphql-api/dataset-2" },
  { name: "Dataset 3", href: "/project/graphql-api/dataset-3", count: "19" },
  { name: "Dataset 4", href: "/project/graphql-api/dataset-4", count: "20+" },
  { name: "Dataset 5", href: "/project/graphql-api/dataset-5" },
  { name: "Dataset 6", href: "/project/graphql-api/dataset-6" },
];

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const project = useMemo(() => {
    const result = projects.find(p => {
      return p.general.slug === router.query.slug;
    });
    return result;
  }, [router]);

  // use this in the future:
  //   https://github.com/vercel/next.js/discussions/10960
  return router.isReady && project ? (
    <>
      <Head>
        <title>Codr - {project.general.title}</title>
        <meta name="description" content="Codr Web UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Page title & actions */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            {project.general.title}
          </h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-0"
          >
            Settings
          </button>
        </div>
      </div>

      <ProjectLayout project={project} datasets={datasets}></ProjectLayout>
    </>
  ) : null;
};

export default ProjectPage;