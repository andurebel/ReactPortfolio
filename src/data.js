import { v4 as uuid } from "uuid";
import events from "./images/events.jpg";

export const data = [
  {
    id: uuid(),
    name: "Events Calendar",
    image: { events },
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
];

export const myCard = [
  {
    firstName: "Alexandru",
    lastName: "Trica",
    profilePic: "./images/mainPic.jpg",
    description: "I speak React",
    yearsExperience: 2,
  },
];
