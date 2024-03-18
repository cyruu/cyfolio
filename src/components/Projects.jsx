import React, { useEffect } from "react";
import "../css/projects.css";
import tictac from "../images/tictac.png";
import todo from "../images/todo.png";
import chat from "../images/chat.png";
function Projects() {
  useEffect(() => {
    const projectSection = document.getElementById("projects");
    const projecttitle = document.getElementById("projecttitle");
    //project title observer
    const projecttitleObserver = new IntersectionObserver(
      function (entities, obsercer) {
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
        threshold: 0.6,
      }
    );
    projecttitleObserver.observe(projectSection);
  }, []);
  return (
    <section id="projects" className="">
      <div className="projectcont flex  mx-auto justify-center  flex-col items-center ">
        {/* first */}
        <p id="projecttitle" className="text-4xl font-bold my-6 text-gray-600">
          Projects
        </p>
        {/* second */}
        <div id="firstproject" className="">
          {/* proj 1 */}
          <a
            href="https://tictactoetest.vercel.app/"
            target="_blank"
            className="project"
          >
            <div className="projimage">
              <img src={tictac} alt="" />
            </div>
            <div className="projdesc">
              <div className="tools">
                <div className="tool">Tailwind</div>

                <div className="tool">React</div>
                <div className="tool">HTML</div>
                <div className="tool">CSS</div>
              </div>
              <div className="projtitle">TicTacToe</div>
            </div>
          </a>
          {/* proj 2 */}
          <a
            href="https://cyruu.github.io/react_TodoApplication/"
            target="_blank"
            className="project"
          ></a>
          {/* proj 3 */}
          <a
            href="https://react-chat-app-three-puce.vercel.app/"
            target="_blank"
            className="project"
          ></a>
          {/* proj 4 */}
          <a
            href="https://react-chat-app-three-puce.vercel.app/"
            target="_blank"
            className="project"
          ></a>
        </div>
        {/* third */}
      </div>
    </section>
  );
}

export default Projects;
