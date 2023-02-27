import React from "react";
import { Link } from "react-router-dom";

type ProjectProps = {
  id: number;
  imgUrl: string;
  name: string;
};

export const Project: React.FC<ProjectProps> = ({ id, imgUrl, name }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center">
        <span className="text-2xl font-bold text-white tracking-wider">
          {name}
        </span>
        <div className="pt-8">
          {/* <a href="">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Demo
            </button>
          </a> */}
          <Link to={`/project/${id}`}>
            <button className="text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-700 font-bold">
              Подробнее
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
