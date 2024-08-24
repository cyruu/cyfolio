import React, { useEffect } from "react";
import "../css/home.css";
import cy from "../images/profile.jpg";
function Home() {
  useEffect(() => {
    const nav = document.getElementsByTagName("nav")[0];
    const lines = document.querySelectorAll(".line");
    const activeLine = document.getElementById("activeline");
    const burgerlink = document.querySelectorAll(".burgerlink");

    window.addEventListener("scroll", () => {
      let screenWidth = window.screen.width;

      if (window.scrollY > 150) {
        nav.style.color = "white";
        nav.style.backgroundColor = "rgb(45,45,45)";
        nav.style.boxShadow = "3px 3px 3px rgba(0,0,0,.17)";
        activeLine.style.backgroundColor = "white";

        // activeLine.style.marginBottom = "1px";
        burgerlink.forEach((link) => {
          link.style.color = "white";
        });
        lines.forEach((line) => {
          // line.style.height = "4px";
          line.style.backgroundColor = "white";
        });
      } else {
        burgerlink.forEach((link) => {
          link.style.color = "white";
        });
        lines.forEach((line) => {
          // line.style.height = "3px";
          line.style.backgroundColor = "black";
        });
        // activeLine.style.marginBottom = "0px";
        if (!(screenWidth < 431)) {
          nav.style.color = "black";

          activeLine.style.backgroundColor = "black";
          nav.style.backgroundColor = "white";
          nav.style.boxShadow = "none";
        }
      }
    });
  }, []);
  useEffect(() => {
    const intropic = document.getElementById("home");
    const options = {
      root: null,
      threshold: 0.65,
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      const intro = document.getElementById("intro");
      const pic = document.getElementById("pic");

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          pic.style.transform = "translateX(0)";
          pic.style.opacity = "1";
          intro.style.transform = "translateX(0)";
          intro.style.opacity = "1";
        } else {
          intro.style.transform = "translateX(+400px)";
          intro.style.opacity = "0";
          pic.style.transform = "translateX(-400px)";
          pic.style.opacity = "0";
        }
      });
    }, options);
    observer.observe(intropic);
  }, []);
  return (
    <>
      <section id="home" className="">
        <div id="intro-pic" className="intro-pic">
          <div id="pic" className="pic flex-1 flex flex-col">
            <div className="socials">
              <div className="instagram social-icon">
                <a
                  href="https://www.instagram.com/cyruz_maharjan/"
                  target="_blank"
                  className="social-content"
                >
                  <div className="icon">
                    <i className="ri-instagram-line"></i>
                  </div>
                  <p className="ml-2">Instagram</p>
                </a>
              </div>
              <div className="linkedin social-icon">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/cyrus-maharjan-1540aa2aa/"
                  className="social-content"
                >
                  <div className="icon">
                    <i className="ri-linkedin-fill text-xl"></i>
                  </div>
                  <p className="ml-5">Linkedin</p>
                </a>
              </div>
              <div className="github social-icon">
                <a
                  href="https://github.com/cyruu"
                  target="_blank"
                  className="social-content"
                >
                  <div className="icon">
                    <i className="ri-github-fill"></i>
                  </div>
                  <p className="ml-5">Github</p>
                </a>
              </div>

              <div className="youtube social-icon">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCmI2DPvG2eHIjAtl0Yk3XEQ"
                  className="social-content"
                >
                  <div className="icon">
                    <i className="ri-youtube-fill"></i>
                  </div>
                  <p className="ml-2">Youtube</p>
                </a>
              </div>
            </div>
            <div className="image">
              <img src={cy} alt="" />
            </div>
            <div className="under">
              <div className="underline"></div>
              <p>Web Developer</p>
            </div>
          </div>
          <div id="intro" className=" intro">
            <p className="hello">
              <span className="secondname ml-0">हेलो !</span> <span>I'm</span>
            </p>
            <p className="name">
              Cyrus<span className="secondname name">Maharjan</span>
            </p>

            <p className="small">
              Student at the moment. Always willing to aquire new skills.
              Extremely delighted to share my portfolio with you.
            </p>
            <div className="buttons flex">
              <a href="#projects" className="button ">
                <span>My Projects</span>
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
