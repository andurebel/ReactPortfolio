import { useLocation, Link } from "react-router-dom";

export const ThankYou = () => {
  const location = useLocation();
  const { formData } = location.state;
  const { name, message } = formData;
  return (
    <main className="flex flex-col items-center justify-center p-20">
      <h1 className="text-2xl ">
        Thank you for reaching out ,<strong>{name}</strong> !
      </h1>
      <h1>
        {message.length > 0 ? (
          <div className="text-center mt-8">
            <h1 className="text-xl py-8">Got below message:</h1>
            <p className="bg-red-400 rounded p-6">{message}</p>
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
