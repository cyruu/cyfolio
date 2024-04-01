import React, { useEffect } from "react";
import "../css/projects.css";
import { projects } from "../projects/projects";

function Projects() {
  // In your React component
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  useEffect(() => {
    const projectSection = document.getElementById("projects");
    const projecttitle = document.getElementById("projecttitle");
    const firstProject = document.getElementById("firstproject");
    const secondProject = document.getElementById("secondproject");
    //project title observer
    const projecttitleObserver = new IntersectionObserver(
      function (entities, observer) {
        entities.forEach((entity) => {
          if (entity.isIntersecting) {
            projecttitle.style.opacity = 1;
          } else {
            projecttitle.style.opacity = 0;
            // console.log("dont");
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
    projecttitleObserver.observe(projectSection);
    // threshold for mobile
    let tempthreshold = 0.7;
    let screenWidth = window.screen.width;
    if (screenWidth < 431) {
      tempthreshold = 0.45;
    }
    // first project observer
    const firstProjectObserver = new IntersectionObserver(
      function (entities, observer) {
        entities.forEach((entity) => {
          if (entity.isIntersecting) {
            firstProject.style.opacity = 1;
            firstProject.style.transform = "translateX(0)";
            secondProject.style.opacity = 1;
            secondProject.style.transform = "translateX(0)";
          } else {
            firstProject.style.transform = "translateX(-600px)";
            firstProject.style.opacity = 0;
            secondProject.style.transform = "translateX(600px)";
            secondProject.style.opacity = 0;
            // console.log("dont");
          }
        });
      },
      {
        threshold: tempthreshold,
      }
    );
    firstProjectObserver.observe(projectSection);
  }, []);
  return (
    <section id="projects" className="">
      <div className="projectcont flex  mx-auto justify-center  flex-col items-center ">
        {/* first animation*/}
        <p id="projecttitle" className="text-4xl font-bold text-gray-600 my-6 ">
          Projects
        </p>
        {/* second animation*/}
        {/* first project */}
        <div id="firstproject" className="">
          {projects.map((project) => {
            return (
              <a
                href={project.link}
                target="_blank"
                className="project"
                key={project.id}
              >
                <div className="dark">
                  <button className="demo">View Demo</button>
                </div>
                <div className="projimage">
                  <img src={project.image} alt="" />
                </div>
                <div className="projdesc">
                  <div className="projtitle">{project.title}</div>
                  <div className="tools">
                    {project.tools.map((tool, i) => {
                      return (
                        <div className="tool" key={i}>
                          {tool}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        {/* third animation */}
        {/* second project */}
        <div id="secondproject" className="">
          {/* proj 1 */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
