type Project = {
  id: number;
  name: string;
  imgUrls: string[];
  description: string;
  technologies: string[];
};

type Skill = {
  name: string;
  imgUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Сервис доставки еды",
    imgUrls: [
      "/assets/projects/foodhub/1.png",
      "/assets/projects/foodhub/2.png",
      "/assets/projects/foodhub/3.png",
      "/assets/projects/foodhub/4.png",
      "/assets/projects/foodhub/5.png",
      "/assets/projects/foodhub/6.png",
    ],
    description: `
    Проект представляет из себя сервис доставки еды, где пользователь выбирает понравившиеся блюда,
    добавляет в корзину и заполняет форму.
    Дальше эти данные мы можем сохранить в БД и дать доступ менеджеру,
    чтоб он позвонил клиенту и потдвердил заказ`,
    technologies: [
      "Корзина",
      "Поиск блюд",
      "Выбор категории блюд",
      "Сортировка по алфавиту, цене",
      "Форма для ввода данных + валидация",
      "Адаптивная верстка",
    ],
  },
  {
    id: 2,
    name: "Сервис доставки еды №2",
    imgUrls: [
      "/assets/projects/food-dashboard/1.png",
      "/assets/projects/food-dashboard/2.png",
      "/assets/projects/food-dashboard/3.png",
      "/assets/projects/food-dashboard/4.png",
    ],
    description: `
    Проект представляет из себя сервис доставки еды, где пользователь выбирает понравившиеся блюда,
    добавляет в корзину и заполняет форму.
    Дальше эти данные мы можем сохранить в БД и дать доступ менеджеру,
    чтоб он позвонил клиенту и потдвердил заказ`,
    technologies: [
      "Корзина",
      "Поиск блюд",
      "Выбор категории блюд",
      "Форма для ввода данных + валидация",
    ],
  },
  {
    id: 3,
    name: "Интернет-магазин мебели",
    imgUrls: [
      "/assets/projects/furniture/1.png",
      "/assets/projects/furniture/2.png",
      "/assets/projects/furniture/3.png",
      "/assets/projects/furniture/4.png",
      "/assets/projects/furniture/5.png",
      "/assets/projects/furniture/6.png",
      "/assets/projects/furniture/7.png",
      "/assets/projects/furniture/8.png",
      "/assets/projects/furniture/9.png",
      "/assets/projects/furniture/10.png",
      "/assets/projects/furniture/11.png",
    ],
    description: `
    Проект представляет из себя интернет магазин мебели, с возможностью регистрации.

    На главной странице находится каталог товаров, выбор по категориям, поиск.
    Товары можно добавлять в корзину, удалять оттуда, а также увеличивать их количество или уменьшать.
    
    После выбора товара(-ов) пользователь переходит на страницу Order и заполняет данные,
    эти данные сохраняются в базе, после чего менеджер может связаться с клиентом и обсудить детали.
    
    Пользователь также может зарегестрироваться, в этом случае:
    
    • Корзина будет сохраняться за ним в базе данных
    • Данные также сохранятся за ним и ему не придется вводить их заново при повторном заказе
    • Будет доступна новая страница "My order", где он будет видеть все свои заказы, их дату и сумму`,
    technologies: [
      "Корзина",
      "Регистрация",
      "Поиск мебели",
      "Выбор категории",
      "Фильтр по цене и цвету",
      "Форма для ввода данных + валидация",
    ],
  },
];

export const skills: Skill[] = [
  {
    name: "HTML",
    imgUrl: "/assets/html.png",
  },
  {
    name: "CSS",
    imgUrl: "/assets/css.png",
  },
  {
    name: "JavaScript",
    imgUrl: "/assets/javascript.png",
  },
  {
    name: "TypeScript",
    imgUrl: "/assets/ts.png",
  },
  {
    name: "React",
    imgUrl: "/assets/react.png",
  },
  {
    name: "Node JS",
    imgUrl: "/assets/node.png",
  },
  {
    name: "Mongo DB",
    imgUrl: "/assets/mongo.png",
  },
  {
    name: "GitHub",
    imgUrl: "/assets/github.png",
  },
  {
    name: "Git",
    imgUrl: "/assets/git.png",
  },
  {
    name: "Sass",
    imgUrl: "/assets/sass.png",
  },
];
