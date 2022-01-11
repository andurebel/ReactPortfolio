import { useState } from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  max-w-md mx-auto border border-gray-200 mt-32 rounded shadow p-10"
    >
      <h1 className="text-center text-xl font-bold mb-4">Contact me, maybe?</h1>
      <label htmlFor="name">Name:</label>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter name"
        value={formData.name}
        name="name"
        className="border border-blue-400 rounded my-2 p-2"
      />
      <label htmlFor="email">Email address:</label>
      <input
        onChange={handleChange}
        type="email"
        name="email"
        value={formData.email}
        placeholder="Your email address goes here"
        required
        className="border border-blue-400 rounded my-2 p-2 "
      />
      <label htmlFor="message">Please enter your message below:</label>
      <textarea
        onChange={handleChange}
        className="border border-blue-400 rounded"
        name="message"
        value={formData.message}
        cols="10"
        rows="5"
      ></textarea>
      <button
        type="submit"
        className="bg-orange-400 mt-8 rounded px-4 py-2 w-1/2 mx-auto hover:bg-blue-400 hover:text-white ease-in duration-100"
      >
        <Link to="/thankyou" state={{ formData }}>
          Let's do it!
        </Link>
      </button>
    </form>
  );
};

export default Contact;
