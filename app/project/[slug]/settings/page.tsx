"use client";
import { useProject } from "utils/contexts/ProjectContext";

const ProjectPage = () => {
  const project = useProject();

  return project ? (
    <div className="xl:grid xl:grid-cols-12 xl:gap-x-5 flex-1">
      <div className="space-y-6 sm:px-6 xl:col-span-8 xl:col-start-3 xl:px-0">
        <form action="#" method="POST">
          <div className="shadow sm:overflow-hidden sm:rounded-md border border-gray-100">
            <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  General
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="project-title"
                    defaultValue={project.general.title}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Type
                  </label>
                  <input
                    type="text"
                    name="type"
                    id="project-type"
                    defaultValue={project.general.type}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project slug
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                      {process.env.ORG_NAME}.codrjs.com/project/
                    </span>
                    <input
                      type="text"
                      name="slug"
                      id="slug"
                      autoComplete="slug"
                      defaultValue={project.general.slug}
                      className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project Color
                  </label>
                  <input
                    type="text"
                    name="bgColorClass"
                    id="project-bgColorClass"
                    defaultValue={project.general.bgColorClass}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Tailwind CSS background colors only.
                  </p>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Guidelines
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="project-guidelines"
                      name="guidelines"
                      rows={8}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="This project you are being asked to..."
                      defaultValue={project.general.guidelines}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    A description for your project. Full markdown support is
                    available.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                disabled
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save (disabled)
              </button>
            </div>
          </div>
        </form>
        <div className="shadow sm:overflow-hidden sm:rounded-md border border-gray-100 py-4 px-8">
          More settings being developed soon...
        </div>
      </div>
    </div>
  ) : null;
};

export default ProjectPage;
