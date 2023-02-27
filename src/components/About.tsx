export const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 text-left">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-left">
              Обо мне
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-left">
            <p>Добро пожаловать</p>
          </div>
          <div className="text-left">
            <p>
              Я Залимхан - фулстэк разработчик. <br /> Разрабатываю сайты
              различной сложности: лендинги, интернет-магазины, сервисы доставки
              еды.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
