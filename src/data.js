import { v4 as uuid } from "uuid";

export const data = [
  {
    id: uuid(),
    name: "Redux CRUD App",
    image: "./images/users.jpg",
    site: "https://crud-redux-andurebel.netlify.app/",
    code: "https://github.com/andurebel/ReduxPracticeApp",
    description: "CRUD App using Redux Toolkit",
    tag: ["react", "redux"],
  },
  {
    id: uuid(),
    name: "Events Calendar",
    image: "./images/events.jpg",
    site: "https://events-calendar-andurebel.netlify.app/",
    code: "https://github.com/andurebel/events-calendar-react",
    description: "Events calendar in React",
    tag: "react",
  },
  {
    id: uuid(),
    name: "Image Search ",
    image: "./images/gallery.jpg",
    site: "https://pixabay-images-andurebel.netlify.app",
    code: "https://github.com/andurebel/image-gallery-react",
    description: "Image gallery search using Pixabay API",
  },
  {
    id: uuid(),
    name: "Pizza Motion",
    image: "./images/pizza.jpg",
    site: "https://pizza-motion-andurebel.netlify.app/",
    code: "https://github.com/andurebel/pizzaMotion",
    description: "React and Framer Motion cool pizza builder",
  },
  {
    id: uuid(),
    name: "Flipping cards",
    image: "./images/cards.jpg",
    site: "https://flipping-cards-andurebel.netlify.app",
    code: "https://github.com/andurebel/flipping-cards",
    description: "Guessing game card game",
  },
  {
    id: uuid(),
    name: "Expense tracker",
    image: "./images/expense.jpg",
    site: "https://expensetracker-andurebel.netlify.app/",
    code: "https://github.com/andurebel/Expense_tracker",
    description: "Vanilla Js expense tracker",
  },
];

export const aboutMe = {
  name: "Alexandru Trica",
  title: "Web Developer",
};
