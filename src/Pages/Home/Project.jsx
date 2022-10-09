import "./project.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import projectData from "../../data/Project";
function Project() {
  return (
    <div className="py-12 px-12">
      <div className="flex justify-center mb-5">
        <div className="text-6xl  text-white font-bold">
          2021 Projects Highlight
        </div>
      </div>
      <div className="snap-x overflow-scroll pl-4 flex scroll-pl-4 no-scrollbar py-5 gap-5">
        {projectData["2021-2022"].map((project) => (
          <div className="snap-start project">
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
