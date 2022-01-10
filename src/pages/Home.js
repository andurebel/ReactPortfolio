import profilePic from "../images/mainPic.jpg";

export const Home = () => {
  return (
    <>
      <div className="pt-8 bg-white shadow-xl w-full md:mt-20 md:w-80 md:mx-auto md:justify-center items-center  px-6 py-4 flex flex-col">
        <img
          src={profilePic}
          alt="img"
          className="rounded-full h-80 w-80 object-cover"
        />
        <h4 className="mt-8 border-b-2">Alexandru Trica</h4>
        <div className="mb-10 text-center capitalize">Web developer</div>
      </div>

      <section className="flex flex-col items-center justify-center p-6">
        <h1 className="my-20 text-2xl">Why me ?</h1>
        <p className="text-md">
          I have a <em>passion</em> for learning and getting{" "}
          <strong>stuff done</strong>.
        </p>
      </section>
    </>
  );
};

export default Home;
