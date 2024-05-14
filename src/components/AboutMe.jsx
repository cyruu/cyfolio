import React, { useEffect } from "react";
import "../css/aboutme.css";
import html from "../images/html.png";
import js from "../images/js.png";
import mysql from "../images/mysql.png";
import php from "../images/phpimage.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import tailwind from "../images/tailwind.png";
import css from "../images/css.png";
function AboutMe() {
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
    const aboutme = document.getElementById("aboutme");
    //observer for about me text
    const aboutmeTextObserver = new IntersectionObserver(
      function (entries, observer) {
        const aboutmeText = document.getElementById("abouttext");
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutmeText.style.opacity = "1";
          } else {
            aboutmeText.style.opacity = "0";
          }
        });
      },
      {
        threshold: 0.45,
      }
    );
    aboutmeTextObserver.observe(aboutme);
    // about me paragraph observer
    const aboutmeParaObserver = new IntersectionObserver(
      function (entries, observer) {
        const aboutPara = document.getElementById("aboutpara");
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutPara.style.opacity = "1";
            aboutPara.style.transform = "translateX(0px)";
          } else {
            aboutPara.style.opacity = "0";
            aboutPara.style.transform = "translateX(-300px)";
          }
        });
      },
      {
        threshold: 0.75,
      }
    );
    aboutmeParaObserver.observe(aboutme);
    // about me skills observer
    const aboutmeskillsObserver = new IntersectionObserver(
      function (entries, observer) {
        const aboutSkills = document.getElementById("skillresume");
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutSkills.style.opacity = "1";
            aboutSkills.style.transform = "translateX(0px)";
          } else {
            aboutSkills.style.opacity = "0";
            aboutSkills.style.transform = "translateX(300px)";
          }
        });
      },
      {
        threshold: 0.75,
      }
    );
    aboutmeskillsObserver.observe(aboutme);
  }, []);
  return (
    <section id="aboutme" className=" text-center">
      <div
        id="who"
        className="flex  mx-auto justify-center  flex-col items-center"
      >
        {/* first */}
        <p id="abouttext" className=" font-bold my-6 text-gray-600 mb-8">
          Who am I?
        </p>
        {/* second */}
        <p id="aboutpara" className="">
          Hi, I'm Cyrus Maharjan and this is my portfolio website. I'm very
          passionate and enthusiastic on learning how web really works. As of
          now, I'm proficient in front-end development, but I plan to expand my
          skills to backend development. <b>Gonna be full stack developer</b>.
          <br />
          <br />
          <span className="themeColor">Here are some of my skills </span>
        </p>
      </div>
      {/* third */}
      <div id="skillresume" className="skill-resume flex flex-col">
        <div
          id="skills"
          className="mt-10 mx-auto flex flex-wrap justify-center items-center"
        >
          <div className="skill">
            <img src={js} alt="" />
          </div>
          <div className="skill">
            <img src={react} alt="" />
          </div>
          <div className="skill">
            <img src={redux} alt="" />
          </div>
          <div className="skill">
            <img src={html} alt="" />
          </div>
          <div className="skill">
            <img src={css} alt="" />
          </div>
          <div className="skill">
            <img src={tailwind} alt="" />
          </div>
          <div className="skill">
            <img src={php} alt="" />
          </div>
          <div className="skill">
            <img src={mysql} alt="" />
          </div>
        </div>
        <div className="resume flex flex-col">
          <p className="themeColor mb-5">Take a look at my Résumé</p>
          <a
            href="../resume/cyrusResume.pdf"
            target="_blank"
            download="cyrusResume.pdf"
            className="button resumebutton "
          >
            Résumé
            <i className="ri-download-fill ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
