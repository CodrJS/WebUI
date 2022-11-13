"use client";
import { useProject } from "utils/contexts/ProjectContext";
import descriptions from "data/descriptions.json";
import MarkdownIt from "utils/MarkdownIt";
import Button from "components/Button";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Outputs from "utils/Outputs";

const AnnotationPage = () => {
  const project = useProject();
  const prompts = Outputs(project.display.outputs);

  return (
    <div className={"flex flex-col gap-4 flex-grow"}>
      <div
        className={"flex-none"}
        dangerouslySetInnerHTML={{
          __html: MarkdownIt.render(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            descriptions.annotation.type[project.general.type],
          ),
        }}
      ></div>
      <div className={"flex flex-col lg:flex-row gap-4 lg:gap-8 flex-auto"}>
        <div className={"flex-grow lg:basis-2/3"}>
          <Disclosure
            as="div"
            className="rounded-md shadow-sm border border-gray-200"
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full py-2 px-4 items-center">
                  <span className="flex-grow text-left">Column One</span>
                  <ChevronUpIcon
                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 px-4 text-gray-500">
                  This is what an expandable item will look like.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className={"flex-grow lg:basis-1/3"}>Col 2</div>
      </div>
      <div className="py-4 px-8 border border-gray-200 shadow-sm rounded-lg">
        <form
          onChange={e => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            console.log(e.target.name, e.target.value);
          }}
          className={"flex flex-col gap-4"}
        >
          {prompts}
        </form>
      </div>
      <div
        className={
          "flex-none shadow-sm rounded-lg border border-gray-200 py-2 px-4 flex justify-end"
        }
      >
        <div className="inline-flex gap-2">
          <div className="flex items-center mr-4">123 / 1000</div>
          <Button primary={false}>Prev</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default AnnotationPage;
