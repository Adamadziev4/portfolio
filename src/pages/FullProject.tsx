import React from "react";
import { HashLink } from "react-router-hash-link";
import { useParams } from "react-router";
import { HiArrowNarrowRight } from "react-icons/hi";
import { projects } from "../config/data";

export const FullProject: React.FC = () => {
  const [imgIndex, setImgIndex] = React.useState<number>(0);
  const { id } = useParams();

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  const project = projects.find((project) => id && project.id === +id);

  const onClickNext = () => {
    if (project && imgIndex === project.imgUrls.length - 1) setImgIndex(0);
    else setImgIndex((prev) => prev + 1);
  };

  const onClickPrev = () => {
    if (project && imgIndex === 0) setImgIndex(project.imgUrls.length - 1);
    else setImgIndex((prev) => prev - 1);
  };

  return (
    <>
      <div className="pt-24 bg-[#0a192f] h-screen text-gray-300">
        <div className="grid px-8 justify-center items-center bg-[#0a192f]">
          <HashLink className="py-4 text-left" to="/#projects">
            <button>Назад</button>
          </HashLink>
          <div className="max-w-[1000px] flex flex-col justify-center">
            <div>
              <div className="relative">
                <img src={project?.imgUrls[imgIndex]} alt="project img" />
                {project?.imgUrls.length !== 1 && (
                  <>
                    <button
                      onClick={onClickNext}
                      className="absolute top-[50%] right-[15px] sm:right-[35px] p-[5px] hover:opacity-100 opacity-40 bg-slate-600 sm:p-[10px] rounded-2xl "
                    >
                      <HiArrowNarrowRight className="text-xl" />
                    </button>
                    <button
                      onClick={onClickPrev}
                      className="absolute top-[50%] left-[15px] sm:left-[35px] p-[5px] hover:opacity-100 opacity-40 bg-slate-600 sm:p-[10px] rounded-2xl "
                    >
                      <HiArrowNarrowRight className="text-xl rotate-180" />
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="text-left py-8 text-base">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                Описание проекта
              </p>
              <div className="py-8">
                <pre>{project?.description}</pre>
                <br />
                <br />
                <p>В проекте имеется:</p>
                <ul className="list-disc px-8">
                  {project?.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
