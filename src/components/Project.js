export const Project = ({ name, image, site, code, description }) => {
  return (
    <article className="border border-gray-300 p-2 flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold">
        <a href={site} target="_blank" rel="noreferrer">
          {name}
        </a>
      </h1>
      <img src={image} alt="project" />
      <p>{description}</p>
      <a
        target="_blank"
        rel="noreferrer"
        href={code}
        className="bg-gray-300 px-4 py-2 rounded mt-4"
      >
        See code
      </a>
    </article>
  );
};

export default Project;
