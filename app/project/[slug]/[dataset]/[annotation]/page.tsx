"use client";
import { useProject } from "utils/contexts/ProjectContext";
import descriptions from "data/descriptions.json";
import MarkdownIt from "utils/MarkdownIt";
import Button from "components/Button";
import Outputs from "utils/Outputs";
import { useDataset } from "utils/contexts/DatasetContext";
import Inputs from "utils/Inputs";
import { Sample } from "types/Dataset";

const AnnotationPage = ({ params }: { params: { annotation: string } }) => {
  const project = useProject();
  const dataset = useDataset();
  const prompts = Outputs(project.display.outputs);
  const sample = dataset.samples.find(
    s => s.id.toString() === params.annotation,
  ) as unknown as Sample;
  const displays = Inputs(project.display.inputs, sample);

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
        <div className={"flex flex-col flex-grow lg:basis-2/3 gap-4"}>
          {displays[0]}
        </div>
        <div className={"flex flex-col flex-grow lg:basis-1/3 gap-4 sticky"}>{displays[1]}</div>
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
          <div className="flex items-center mr-4">
            {dataset.samples.indexOf(sample) + 1} / {dataset.samples.length}
          </div>
          <Button primary={false}>Prev</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default AnnotationPage;
