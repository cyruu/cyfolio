import React, { useEffect } from "react";

function Navbar() {
  const calcSlidePixel = (offsetIndex) => {
    let fixedPixel = 130;
    let slidePixel = offsetIndex * fixedPixel;
    return slidePixel;
  };

  useEffect(() => {
    const activeLine = document.getElementById("activeline");
    const navBarHeight = 73.75 + 250;
    const homeEndPixel =
      document.getElementById("home").getBoundingClientRect().bottom -
      navBarHeight;
    const aboutmeEndPixel =
      document.getElementById("aboutme").getBoundingClientRect().bottom -
      navBarHeight;
    const projectsEndPixel =
      document.getElementById("projects").getBoundingClientRect().bottom -
      navBarHeight;
    const blogEndPixel =
      document.getElementById("blog").getBoundingClientRect().bottom -
      navBarHeight;
    window.addEventListener("scroll", () => {
      let currentScrollPoint = window.scrollY;

      if (currentScrollPoint < homeEndPixel) {
        let offsetIndex = 0;
        activeLine.style.transform = `translateX(${calcSlidePixel(
          offsetIndex
        )}px)`;
      } else if (
        currentScrollPoint > homeEndPixel &&
        currentScrollPoint < aboutmeEndPixel
      ) {
        let offsetIndex = 1;
        activeLine.style.transform = `translateX(${calcSlidePixel(
          offsetIndex
        )}px)`;
      } else if (
        currentScrollPoint > aboutmeEndPixel &&
        currentScrollPoint < projectsEndPixel
      ) {
        let offsetIndex = 2;
        activeLine.style.transform = `translateX(${calcSlidePixel(
          offsetIndex
        )}px)`;
      } else if (
        currentScrollPoint > projectsEndPixel &&
        currentScrollPoint < blogEndPixel
      ) {
        let offsetIndex = 3;
        activeLine.style.transform = `translateX(${calcSlidePixel(
          offsetIndex
        )}px)`;
      }
    });
    //burger
    const home = document.getElementById("home");
    const aboutme = document.getElementById("aboutme");
    const projects = document.getElementById("projects");
    const blog = document.getElementById("blog");
    const burgerIcon = document.getElementById("burgericon");
    const burgerMenu = document.querySelector(".burgermenu");

    burgerIcon.addEventListener("click", () => {
      burgerMenu.classList.toggle("show");
      document.body.classList.toggle("noscroll");
      // burgerIcon.classList.toggle("colorwhite");
    });
    // burgerIcon.addEventListener("blur", () => {
    //   document.body.classList.remove("noscroll");
    //   burgerMenu.classList.remove("show");
    // });
    function removeBurgerMenu() {
      document.body.classList.remove("noscroll");
      burgerMenu.classList.remove("show");
    }
    // on blur hatayera particular section lai click garda burgermenu hatne
    home.addEventListener("click", () => {
      removeBurgerMenu();
    });
    aboutme.addEventListener("click", () => {
      removeBurgerMenu();
    });
    projects.addEventListener("click", () => {
      removeBurgerMenu();
    });
    blog.addEventListener("click", () => {
      removeBurgerMenu();
    });
    // harek menu lai thickda ni burgermenu hatna paryo
    const burgerLinks = document.querySelectorAll(".burgerlink");
    burgerLinks.forEach((burgerLink) => {
      burgerLink.addEventListener("click", () => {
        removeBurgerMenu();
      });
    });
  }, []);

  const slideActiveLine = (e) => {
    const activeLine = document.getElementById("activeline");
    activeLine.style.transition = "none";
    activeLine.style.opacity = 0;
    let offsetIndex = Number(e.target.id);
    const fixedPixel = 133;
    let slidePixel = offsetIndex * fixedPixel;
    activeLine.style.transform = `translateX(${slidePixel}px)`;
    setTimeout(() => {
      activeLine.style.transition = "all .25s linear";
      activeLine.style.opacity = 1;
    }, 560);
  };
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="burgermenu">
          <div className="burgerlinks">
            <a href="#home" className="burgerlink">
              Home
            </a>
            <a href="#aboutme" className="burgerlink">
              About Me
            </a>
            <a href="#projects" className="burgerlink">
              Projects
            </a>
            <a href="#blog" className="burgerlink">
              My Blog
            </a>
            <div className="burgersocials">
              <a
                target="_blank"
                href="https://www.instagram.com/cyruz_maharjan/"
                className="burgersocialicon"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/cyrus-maharjan-1540aa2aa/"
                className="burgersocialicon"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                target="_blank"
                href="https://github.com/cyruu"
                className="burgersocialicon"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCmI2DPvG2eHIjAtl0Yk3XEQ"
                className="burgersocialicon"
              >
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <a href="#home" className="">
          <span className="logo">Cyfolio</span>
        </a>
        <button id="burgericon" className="burger">
          <i className="ri-menu-line text-2xl burgerremixicon"></i>
        </button>
        <div className="links">
          <span id="activeline"></span>
          <a id="0" href="#home" onClick={slideActiveLine}>
            Home <span className="line"></span>
          </a>
          <a id="1" href="#aboutme" onClick={slideActiveLine}>
            About Me <span className="line"></span>
          </a>
          <a href="#projects" id="2" onClick={slideActiveLine}>
            Projects <span className="line"></span>
          </a>
          <a href="#blog" id="3" onClick={slideActiveLine}>
            My Blog <span className="line"></span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
