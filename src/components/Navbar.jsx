import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
function Navbar() {
  const { pathname } = useLocation();
  const [homesectionTopPixel, setHomeSectionTopPixel] = useState(0);
  const [aboutmesectionTopPixel, setAboutmeSectionTopPixel] = useState(0);
  const [projectssectionTopPixel, setProjectsSectionTopPixel] = useState(0);
  const [blogsectionTopPixel, setBlogSectionTopPixel] = useState(0);
  // suru bata nai ako ho ki haina /blog bata /blog/blogid ho ki hiana
  const [cameFromSinglePage, setCameFromSinglePage] = useState(false);
  const calcSlidePixel = (offsetIndex) => {
    let fixedPixel = 130;
    let slidePixel = offsetIndex * fixedPixel;
    return slidePixel;
  };

  // reset
  // for scroll
  useEffect(() => {
    if (
      pathname == "/" ||
      pathname == "/home" ||
      pathname == "/aboutme" ||
      pathname == "/projects" ||
      pathname == "/blog"
    ) {
      setCameFromSinglePage(true);
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
      //endnfor scroll
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
        // reach home page
        if (currentScrollPoint < homeEndPixel) {
          let offsetIndex = 0;
          activeLine.style.transform = `translateX(${calcSlidePixel(
            offsetIndex
          )}px)`;
        }
        // reach about me page
        else if (
          currentScrollPoint > homeEndPixel &&
          currentScrollPoint < aboutmeEndPixel
        ) {
          let offsetIndex = 1;
          activeLine.style.transform = `translateX(${calcSlidePixel(
            offsetIndex
          )}px)`;
        }
        // reach projects page
        else if (
          currentScrollPoint > aboutmeEndPixel &&
          currentScrollPoint < projectsEndPixel
        ) {
          let offsetIndex = 2;
          activeLine.style.transform = `translateX(${calcSlidePixel(
            offsetIndex
          )}px)`;
        }
        // reach blog page
        else if (
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

      function showBurgerMenu() {
        burgerMenu.classList.toggle("show");
        if (burgerMenu.classList.contains("show")) {
          document.documentElement.style.overflow = "hidden";
        } else {
          document.documentElement.style.overflow = "auto";
        }
      }
      burgerIcon.addEventListener("click", showBurgerMenu);
      // burgerIcon.addEventListener("blur", () => {
      //   document.body.classList.remove("noscroll");
      //   burgerMenu.classList.remove("show");
      // });
      function removeBurgerMenu() {
        document.documentElement.style.overflow = "auto";
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
      return () => {
        burgerIcon.removeEventListener("click", showBurgerMenu);
        home.removeEventListener("click", removeBurgerMenu);
        aboutme.removeEventListener("click", removeBurgerMenu);
        projects.removeEventListener("click", removeBurgerMenu);
        blog.removeEventListener("click", removeBurgerMenu);
      };
    }
  }, [pathname]);
  // for path /blog/blogid

  useEffect(() => {
    if (
      pathname != "/" &&
      pathname != "/home" &&
      pathname != "/aboutme" &&
      pathname != "/projects" &&
      pathname != "/blog"
    ) {
      const burgerIcon = document.getElementById("burgericon");
      const burgerMenu = document.querySelector(".burgermenu");
      function showBurgerMenu() {
        burgerMenu.classList.toggle("show");
        document.body.classList.toggle("noscroll");
      }
      burgerIcon.addEventListener("click", showBurgerMenu);

      // harek menu lai thickda ni burgermenu hatna paryo
      const burgerLinks = document.querySelectorAll(".burgerlink");
      burgerLinks.forEach((burgerLink) => {
        burgerLink.addEventListener("click", () => {
          removeBurgerMenu();
        });
      });

      const singleBlogContainer = document.getElementById(
        "singleBlogContainer"
      );

      function removeBurgerMenu() {
        document.body.classList.remove("noscroll");
        burgerMenu.classList.remove("show");
      }
      // on blur hatayera particular section(singleBlogContainer) lai click garda burgermenu hatne
      singleBlogContainer.addEventListener("click", () => {
        removeBurgerMenu();
      });
      return () => {
        burgerIcon.removeEventListener("click", showBurgerMenu);
        // home.removeEventListener("click");
        // aboutme.removeEventListener("click");
        // projects.removeEventListener("click");
        // blog.removeEventListener("click");
      };
      // harek menu lai thickda ni burgermenu hatna paryo
    }
  }, [pathname]);
  // in link click
  const navLinkClick = (e) => {
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
    // scoll animation in nav link click
    // singlepage component bata scroll hatayera yeta haleko
    let scrollPixel = 0;
    let navLinkId = e.target.id;

    if (navLinkId == "0") {
      scrollPixel = homesectionTopPixel;
    } else if (navLinkId == "1") {
      scrollPixel = aboutmesectionTopPixel;
    } else if (navLinkId == "2") {
      scrollPixel = projectssectionTopPixel;
    } else if (navLinkId == "3") {
      scrollPixel = blogsectionTopPixel;
    }

    window.scrollTo({
      top: scrollPixel,
    });
  };
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="burgermenu">
          <div className="burgerlinks">
            <Link
              to="/home"
              id="b0"
              className="burgerlink"
              onClick={navLinkClick}
            >
              Home
            </Link>
            <Link
              to="/aboutme"
              id="b1"
              className="burgerlink"
              onClick={navLinkClick}
            >
              About Me
            </Link>
            <Link
              to="/projects"
              id="b2"
              className="burgerlink"
              onClick={navLinkClick}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              id="b3"
              className="burgerlink"
              onClick={navLinkClick}
            >
              My Blog
            </Link>
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
        <Link to="/home" className="">
          <span className="logo">Cyfolio</span>
        </Link>
        <button id="burgericon" className="burger">
          <i className="ri-menu-line text-2xl burgerremixicon"></i>
        </button>
        <div className="links">
          <span id="activeline"></span>
          <Link to="/home" id="0" onClick={navLinkClick}>
            Home <span className="line"></span>
          </Link>
          <Link to="/aboutme" id="1" onClick={navLinkClick}>
            About Me <span className="line"></span>
          </Link>
          <Link to="/projects" id="2" onClick={navLinkClick}>
            Projects <span className="line"></span>
          </Link>
          <Link to="/blog" id="3" onClick={navLinkClick}>
            My Blog <span className="line"></span>
            <span id="blogline"></span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
