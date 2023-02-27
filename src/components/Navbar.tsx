import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaBars, FaPhone, FaTelegram, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isNavActive, setIsNavActive] = React.useState(false);

  const onClickHamburger = () => setIsNavActive((prev) => !prev);

  return (
    <div className="fixed w-full h-[80px] px-4 flex justify-between items-center bg-[#0a192f] text-gray-300">
      <div>
        <Link to="/">
          <img
            src="/assets/logo2.png"
            alt="logo image"
            style={{ width: "35px", cursor: "pointer" }}
          />
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li onClick={() => window.scroll({ top: 0, behavior: "smooth" })}>
          Главная
        </li>
        <li onClick={() => window.scroll({ top: 1000, behavior: "smooth" })}>
          Обо мне
        </li>
        <li onClick={() => window.scroll({ top: 1900, behavior: "smooth" })}>
          Технологии
        </li>
        <li onClick={() => window.scroll({ top: 3000, behavior: "smooth" })}>
          Проекты
        </li>
        {/* <li onClick={() => window.scroll({ top: 3000, behavior: "smooth" })}>Связаться</li> */}
      </ul>

      {/* <div onClick={onClickHamburger} className="md:hidden z-10">
        {isNavActive ? <FaTimes /> : <FaBars />}
      </div> */}

      {/* <div
        className={
          isNavActive
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <ul>
          <li className="py-6 text-4xl">Главная</li>
          <li className="py-6 text-4xl">Обо мне</li>
          <li className="py-6 text-4xl">Технологии</li>
          <li className="py-6 text-4xl">Проекты</li>
          <li className="py-6 text-4xl">Связаться</li>
        </ul>
      </div> */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="tel:+79679373756"
            >
              Phone <FaPhone size={30} />
            </a>
          </li> */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://t.me"
            >
              Telegram <FaTelegram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:zadamadziev@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
