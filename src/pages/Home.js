import profilePic from "../images/mainPic.jpg";
import { aboutMe } from "../data.js";

export const Home = () => {
  const { name, title } = aboutMe;
  return (
    <>
      <div className="pt-8 bg-white shadow-xl w-full md:mt-20 md:w-80 md:mx-auto md:justify-center items-center  px-6 py-4 flex flex-col">
        <img
          src={profilePic}
          alt="img"
          className="rounded-full h-80 w-80 object-cover"
        />
        <h4 className="my-4 border-b-2">{name}</h4>
        <div className="mb-10 text-center capitalize text-orange-500 font-bold">
          {title}
        </div>
      </div>

      <section className="flex flex-col text-center  p-6">
        <h1 className="my-20 text-2xl">Why me ?</h1>

        <p className="text-md">
          I have a <em>passion</em> for learning and getting
          <strong className="animate-pulse"> stuff done</strong>.
        </p>
      </section>
    </>
  );
};

export default Home;
