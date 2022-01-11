export const Contact = () => {
  return (
    <form className="flex flex-col max-w-md mx-auto border border-gray-200 mt-32 rounded shadow p-10">
      <h1 className="text-center text-xl font-bold mb-4">Contact me, maybe?</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        className="border border-blue-400 rounded my-2 p-2"
      />
      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        name="email"
        placeholder="Your email address goes here"
        required
        className="border border-blue-400 rounded my-2 p-2 "
      />
      <label htmlFor="textarea">Please enter your message below:</label>
      <textarea
        className="border border-blue-400 rounded"
        name="textarea"
        id=""
        cols="10"
        rows="5"
      ></textarea>
      <button
        type="submit"
        className="bg-orange-400 mt-8 rounded px-4 py-2 w-1/2 mx-auto hover:bg-blue-400 hover:text-white ease-in duration-100"
      >
        Let's do it!
      </button>
    </form>
  );
};

export default Contact;
