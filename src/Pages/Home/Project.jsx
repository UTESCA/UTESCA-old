import "./project.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import projectData from "../../data/Project";
import ScreenSize from "../../Components/Screen/ScreenSize";
import Button from "../../Components/Button/Button";
function Project() {
  const { width } = ScreenSize();

  return (
    <div className="py-12 px-12 ">
      <div className="flex justify-center mb-5">
        <div className="text-6xl  text-white font-bold font-raleway">
          2021 Projects Highlight
        </div>
      </div>
      {(() => {
        if (width > 800) {
          return (
            <div className="snap-x overflow-scroll pl-4 flex scroll-pl-4 no-scrollbar py-5 gap-5">
              {projectData["2021-2022"].map((project, index) => (
                <div className="snap-start project" key={index}>
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                  />
                </div>
              ))}
            </div>
          );
        } else {
          return (
            <div>
              {projectData["2021-2022"].map((project) => (
                <div className="flex justify-center project my-5">
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                  />
                </div>
              ))}
            </div>
          );
        }
      })()}
      <div className="flex justify-center">
        <Button name="View All" size={2} />
      </div>
    </div>
  );
}

export default Project;
