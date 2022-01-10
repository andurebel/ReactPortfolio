export const Project = ({ name, image, site, code, description, id }) => {
  return (
    <article
      className="xl:container p-2 flex flex-col justify-center items-center max-w-xl "
      key={id}
    >
      <h1 className="text-xl font-bold my-4">{name}</h1>
      <img src={image} alt="project " className="w-80 h-60" />
      <p className="text-gray-400 text-xl my-4">{description}</p>
      <div className="flex  my-6 p-4 justify-around items-center w-full ">
        <a
          target="_blank"
          rel="noreferrer"
          href={code}
          className="bg-gray-200 rounded p-4 font-bold shadow-xl  "
        >
          See code
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={site}
          className="bg-gray-200 rounded p-4 font-bold shadow-xl "
        >
          Live demo
        </a>
      </div>
    </article>
  );
};

export default Project;
