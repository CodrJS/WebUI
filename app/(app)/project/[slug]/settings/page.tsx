"use client";
import { EyeIcon } from "@heroicons/react/24/outline";
import ProjectNav from "components/ProjectNav";
import SlideOver from "components/SlideOver";
import { DATASETS } from "data/projects";
import { FormEvent, useMemo, useState } from "react";
import { useProject } from "utils/contexts/ProjectContext";
import md from "utils/MarkdownIt";

const ProjectPage = () => {
  const project = useProject();
  const [open, setOpen] = useState(false);
  const datasets = useMemo(() => {
    return project ? DATASETS(project) : undefined;
  }, [project]);

  function togglePanel() {
    setOpen(!open);
  }

  function onChange(event: FormEvent<HTMLFormElement>) {
    // code to update global project and save to database.

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    project.general[event.target?.name] = event.target?.value;
  }

  return project ? (
    <>
      <SlideOver open={open} toggleOpen={togglePanel} title="Guidelines" wide>
        <div
          className="prose lg:prose-md prose-code:not-prose"
          dangerouslySetInnerHTML={{
            __html: md.render(project.general.guidelines),
          }}
        />
      </SlideOver>
      <div className="flex flex-col lg:flex-row lg:flex-1">
        <ProjectNav datasets={datasets} />
        <div className="xl:grid xl:grid-cols-12 xl:gap-x-5 flex-1 py-3 px-4 md:px-6 lg:py-4 lg:px-8">
          <div className="space-y-6 sm:px-6 xl:col-span-8 xl:col-start-3 xl:px-0">
            <form onChange={onChange}>
              <div className="shadow sm:overflow-hidden sm:rounded-md border border-gray-100">
                <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      General
                    </h3>
                    {/** Sub text can go here in the <p /> tag below */}
                    <p className="mt-1 text-sm text-gray-500"></p>
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
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
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
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
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
                          {`${process.env.NEXT_PUBLIC_ORG_NAME}.codrjs.com/project/`}
                        </span>
                        <input
                          type="text"
                          name="slug"
                          id="slug"
                          autoComplete="slug"
                          defaultValue={project.general.slug}
                          className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                          placeholder="This project you are being asked to..."
                          defaultValue={project.general.guidelines}
                        />
                      </div>
                      <div className="mt-2 flex text-sm text-gray-500">
                        <p className="flex-grow">
                          A description for your project. Full markdown support
                          is available.
                        </p>
                        <p
                          className="cursor-pointer hover:text-gray-700 flex gap-1 items-center"
                          onClick={togglePanel}
                        >
                          <EyeIcon className="h-4 w-4" />
                          Preview
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    disabled
                    className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
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
      </div>
    </>
  ) : null;
};

export default ProjectPage;
