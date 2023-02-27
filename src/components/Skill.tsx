import React from "react";

type SkillProps = {
  name: string;
  imgUrl: string;
};

export const Skill: React.FC<SkillProps> = ({ name, imgUrl }) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={imgUrl} alt={`${name}-icon`} />
      <p className="my-4 text-center">{name}</p>
    </div>
  );
};
