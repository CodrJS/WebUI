"use client";
import { useProject } from "utils/contexts/ProjectContext";
import descriptions from "data/descriptions.json";
import MarkdownIt from "utils/MarkdownIt";
import Button from "components/Button";

const AnnotationPage = () => {
  const project = useProject();

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
        <div className={"flex-grow lg:basis-2/3"}>Col 1</div>
        <div className={"flex-grow lg:basis-1/3"}>Col 2</div>
      </div>
      <div className={"flex-auto"}>Questions/prompts here</div>
      <div
        className={
          "flex-none shadow-md rounded-lg border border-gray-100 py-2 px-4 flex justify-end"
        }
      >
        <div className="inline-flex gap-2">
          <div className="flex items-center mr-4" >123 / 1000</div>
          <Button primary={false}>Prev</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default AnnotationPage;
