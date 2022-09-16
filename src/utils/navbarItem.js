import Home from "../page/Home";
import { GoLocation } from "react-icons/go";

export const navbarItems = [
  { id: 1, title: "Home", hidden: true, path: "/home", element: <Home /> },
  {
    id: 2,
    title: "Гродно",
    hidden: false,
    img: <GoLocation />,
    path: "/city",
    element: "Гродно",
  },
  {
    id: 3,
    title: "Каталог",
    hidden: false,
    path: "/catalog",
    element: "Каталог",
  },
  { id: 4, title: "Услуги", hidden: false, path: "/sevice", element: "Услуги" },
  { id: 5, title: "О нас", hidden: false, path: "/about", element: "О нас" },
  { id: 6, title: "Блог", hidden: false, path: "/blog", element: "Блог" },
  {
    id: 7,
    title: "Консультация",
    hidden: false,
    path: "/consultation",
    element: "Консультация",
  },
];
