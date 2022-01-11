import { useLocation, Link } from "react-router-dom";

export const ThankYou = () => {
  const location = useLocation();
  const { formData } = location.state;
  const { name, message } = formData;
  return (
    <main className="flex flex-col items-center justify-center p-20 border border-gray-300 md:container w-3/4 mx-auto my-32 rounded-xl shadow-xl ">
      <h1>
        {message.length > 0 && name.length > 0 ? (
          <div className="text-center mt-8">
            <h1 className="text-2xl ">
              Thank you for reaching out,
              <p>
                <strong className="text-orange-300 text-center">{name}</strong>{" "}
                !
              </p>
            </h1>
            <h1 className="text-xl py-8">Got below message:</h1>
            <p className="bg-gray-200 rounded shadow-xl p-6">{message}</p>
          </div>
        ) : (
          <div className="text-center mt-8">
            <p>You did not write me anything</p>
            <Link to="/contact">
              <button className="px-4 py-2 bg-red-300">Try again?</button>
            </Link>
          </div>
        )}
      </h1>
    </main>
  );
};

export default ThankYou;
