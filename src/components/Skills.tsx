import { skills } from "../config/data";
import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <div id="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-left">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Технологии
          </p>
          {/* <p className="py-4">с которыми я работаю</p> */}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8">
          {skills.map((skill) => (
            <Skill key={skill.imgUrl} name={skill.name} imgUrl={skill.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};
