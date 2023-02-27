import { projects } from "../config/data";
import { Project } from "./Project";

export const Work = () => {
  return (
    <div
      id="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-left">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Проекты
          </p>
          <p className="py-6">Ниже вы можете увидеть некоторые из моих работ</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              name={project.name}
              imgUrl={project.imgUrls[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
