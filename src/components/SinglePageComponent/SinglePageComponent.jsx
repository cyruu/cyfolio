import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Home, AboutMe, Projects, Blog } from "../index";
function SinglePageComponent() {
  let { page } = useParams();
  const [homesectionTopPixel, setHomeSectionTopPixel] = useState(0);
  const [aboutmesectionTopPixel, setAboutmeSectionTopPixel] = useState(0);
  const [projectssectionTopPixel, setProjectsSectionTopPixel] = useState(0);
  const [blogsectionTopPixel, setBlogSectionTopPixel] = useState(0);

  useEffect(() => {
    const blogline = document.getElementById("blogline");
    blogline.style.display = "none";
    const activeLine = document.getElementById("activeline");
    activeLine.style.display = "block";
    const homeSection =
      document.getElementById("home").getBoundingClientRect().top - 75;
    const projectsSection =
      document.getElementById("projects").getBoundingClientRect().top - 75;
    const aboutmeSection =
      document.getElementById("aboutme").getBoundingClientRect().top - 75;
    const blogSection =
      document.getElementById("blog").getBoundingClientRect().top - 75;
    setHomeSectionTopPixel(homeSection);
    setAboutmeSectionTopPixel(aboutmeSection);
    setProjectsSectionTopPixel(projectsSection);
    setBlogSectionTopPixel(blogSection);
  }, []);
  //scroll -> transfered to navbar component
  useEffect(() => {
    let scrollPixel = 0;
    if (page == "home") {
      scrollPixel = homesectionTopPixel;
    } else if (page == "aboutme") {
      scrollPixel = aboutmesectionTopPixel;
    } else if (page == "projects") {
      scrollPixel = projectssectionTopPixel;
    } else if (page == "blog") {
      scrollPixel = blogsectionTopPixel;
    }
    window.scrollTo({
      top: scrollPixel,
      behavior: "smooth",
    });
  }, [
    page,
    homesectionTopPixel,
    aboutmesectionTopPixel,
    projectssectionTopPixel,
    blogsectionTopPixel,
  ]);
  return (
    <>
      <Home />
      <AboutMe />
      <Projects />
      <Blog />
    </>
  );
}

export default SinglePageComponent;
