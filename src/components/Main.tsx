import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div id="main" className="w-full h-screen bg-[#0a192f]">
      {/* <div className="grid justify-center items-center h-full grid-cols-[2fr_1.5fr] gap-10 px-16"> */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-left">
        <p className="text-pink-600">Меня зовут</p>
        <h1 className="text-3xl sm:text-7xl font-bold text-[#ccd6f6]">
          Залимхан
        </h1>
        <h2 className="text-3xl sm:text-7xl font-bold text-[#8892b0]">
          Я FullStack-разработчик
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Разрабатываю лендинги, интернет-магазины, сервисы доставки еды и
          другие веб-сайты
        </p>
        <div>
          <button
            onClick={() => window.scroll({ top: 3000, behavior: "smooth" })}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600"
          >
            Посмотреть работы
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      {/* <div className="">
          <h1 className="text-gray-100">ЭТО ЯЯЯЯ</h1>
        </div> */}
      {/* </div> */}
    </div>
  );
};
