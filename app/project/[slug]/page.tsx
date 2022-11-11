"use client";
import Head from "next/head";
import { useMemo } from "react";
import PROJECTS from "src/data/projects";
import MarkdownIt from "utils/MarkdownIt";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
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
      <div className="prose lg:prose-md">
        <h2>Guidelines:</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: MarkdownIt.render(project.general.guidelines),
          }}
        />
      </div>
    </>
  ) : null;
};

export default ProjectPage;
