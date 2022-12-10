"use client";
import { useProject } from "utils/contexts/ProjectContext";
import descriptions from "data/descriptions.json";
import MarkdownIt from "utils/MarkdownIt";
import Button from "components/Button";
import Outputs from "utils/Outputs";
import { useDataset } from "utils/contexts/DatasetContext";
import Inputs from "utils/Inputs";
import { Sample } from "types/Dataset";
import { useRouter } from "next/navigation";

const AnnotationPage = ({ params }: { params: { annotation: string } }) => {
  const router = useRouter();
  const project = useProject();
  const dataset = useDataset();
  const sample = dataset.samples.find(
    s => s.id.toString() === params.annotation,
  ) as unknown as Sample;
  const displays = Inputs(project.display.inputs, sample);
  const prompts = Outputs(project.display.outputs, sample);

  const hasPrev = dataset.samples.findIndex(s => sample.id === s.id) - 1 >= 0;
  const hasNext =
    dataset.samples.findIndex(s => sample.id === s.id) + 1 <
    dataset.samples.length;

  const prev = () => {
    const index = dataset.samples.findIndex(s => sample.id === s.id) - 1;
    router.push(
      `/project/${project.general.slug}/${dataset.slug}/${dataset.samples[index].id}`,
    );
  };

  const next = () => {
    const index = dataset.samples.findIndex(s => sample.id === s.id) + 1;
    router.push(
      `/project/${project.general.slug}/${dataset.slug}/${dataset.samples[index].id}`,
    );
  };

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
      <div className={"grid grid-cols-6 gap-4 xl:gap-8 flex-grow"}>
        <div
          className={"flex flex-col col-span-6 xl:col-span-4 gap-4 break-words"}
        >
          {displays[0]}
        </div>
        <div
          className={"flex flex-col col-span-6 xl:col-span-2 gap-4 break-words"}
        >
          {displays[1]}
        </div>
      </div>
      <div className="py-4 px-8 border border-gray-200 shadow-sm rounded-lg">
        <form
          onChange={e => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const type = e.target.type;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            console.log({type, name: e.target.name, value: e.target.value, checked: type === "checkbox" ? e.target.checked : undefined});
          }}
          className={"flex flex-col gap-4"}
        >
          {prompts}
        </form>
      </div>
      <div
        className={
          "flex-none shadow-sm rounded-lg border border-gray-200 py-2 px-4 flex gap-2"
        }
      >
        <div className="flex-grow">
          <Button primary={false}>Clear</Button>
        </div>
        <div className="inline-flex gap-2">
          <div className="flex items-center mr-4">
            Sample: {dataset.samples.indexOf(sample) + 1} /{" "}
            {dataset.samples.length}
          </div>
          <Button primary={false} disabled={!hasPrev} onClick={prev}>
            Prev
          </Button>
          <Button disabled={!hasNext} onClick={next}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnnotationPage;
