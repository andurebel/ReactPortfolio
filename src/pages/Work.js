import { data } from "../data.js";
import { Project } from "../components/Project";

export const Work = () => {
  return (
    <>
      <h1 className="text-center text-2xl mt-10">
        Here are some of my projects
      </h1>
      <section className="xl:container xl:mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 ">
        {data.map((project) => {
          const { name, image, site, code, description } = project;
          return (
            <>
              <div className="m-6 shadow hover:shadow-xl p-6 border rounded-xl border-gray-100 max-w-xl">
                <Project
                  key={project.id}
                  name={name}
                  image={image}
                  site={site}
                  code={code}
                  description={description}
                />
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Work;
