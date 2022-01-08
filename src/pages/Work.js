import { data } from "../data.js";
import { Project } from "../components/Project";

export const Work = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {data.map((project) => {
        const { name, image, site, code, description } = project;
        return (
          <>
            <div className="m-6 bg-red-100 p-6 border rounded-xl border-gray-100">
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
  );
};

export default Work;
