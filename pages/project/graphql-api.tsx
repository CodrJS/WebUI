import type { NextPage } from "next";
import Head from "next/head";
import AppLayout from "src/layouts/AppLayout";

const project = {
  id: 1,
  title: "GraphQL API",
  slug: "graphql-api",
  pinned: true,
  bgColorClass: "bg-pink-600",
  settings: {},
};

const ProjectPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Codr - GraphQL API</title>
        <meta name="description" content="Codr Web UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        {/* Page title & actions */}
        <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
              {project.title}
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

        {/* Projects table (small breakpoint and up) */}
        <div className="mt-8">
          <div className="inline-block min-w-full border-b border-gray-200 align-middle">
            <table className="min-w-full">
              <thead>
                <tr className="border-t border-gray-200">
                  <th
                    className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    <span className="lg:pl-2">Project</span>
                  </th>
                  <th
                    className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    Members
                  </th>
                  <th
                    className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                    scope="col"
                  >
                    Last updated
                  </th>
                  <th
                    className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                    scope="col"
                  />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white"></tbody>
            </table>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default ProjectPage;
