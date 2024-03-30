import loginimage from "../images/login.png";
import navbar from "../images/navbar.png";
import navthumbog from "../images/navthumbog.jpg";
export const blogs = [
  // blog1 login animation
  {
    id: "login-animation",
    title: "How to create login animation using HTML, CSS, JS.",
    date: "20 March, 2024",
    thumbnail: loginimage,
    firstIntroduction:
      "This is a simple login form animation tutorial created by using HTML, CSS and Javascript. We are going to use simple and basic syntax of Javascript to create this project.",
    ytLink: "https://www.youtube.com/embed/eccD-uVgHnc?si=RIwxmU0eH6R1NWkq",
    displayIntro:
      "Learn to use simple js along with HTML and CSS. Create login form animation.",
    indexHtml: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <section>
      <div class="login-form">
        <h1>LOGIN</h1>
        <div class="inputfield">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
        </div>
        <!-- icons -->
        <div class="icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
      <div class="signup-form">
        <h1>SIGNUP</h1>
        <div class="inputfield">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </div>
        <!-- icons -->
        <div class="icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
      <div class="sliders">
        <div class="login-slider">
          <h1>Login Here</h1>
          <p>Already have an account?</p>
          <button id="loginbtn">Login</button>
        </div>
        <div class="signup-slider displaynone">
          <h1>Sign Up here</h1>
          <p>New here? Join NOW</p>
          <button id="signupbtn">Sign up</button>
        </div>
      </div>
    </section>
  </body>
  <script>
    const sliders = document.querySelector(".sliders");
    const loginSlider = document.querySelector(".login-slider");
    const signupSlider = document.querySelector(".signup-slider");
    const loginButton = document.getElementById("loginbtn");
    const signupButton = document.getElementById("signupbtn");

    loginButton.addEventListener("click", () => {
      sliders.classList.toggle("slide");
      loginSlider.classList.add("displaynone");
      signupSlider.classList.remove("displaynone");
      sliders.style.backgroundColor = "rgb(91,125,173)";
    });
    signupButton.addEventListener("click", () => {
      sliders.classList.toggle("slide");
      signupSlider.classList.add("displaynone");
      loginSlider.classList.remove("displaynone");
      sliders.style.backgroundColor = "rgb(205,113,113)";
    });
  </script>
</html>  
`,
    css: `
    * {
    margin: 0;
    padding: 0;
  }
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 2rem;
    margin-top: 80px;
  }
  section {
    font-family: sans-serif;
    border-radius: 10px;
    border: 1px solid rgb(210, 210, 210);
    height: 400px;
    width: 600px;
    display: flex;
    position: relative;
    box-shadow: 5px 5px 5px gray;
    overflow: hidden;
  }
  button {
    background: none;
    background-color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 1rem;
    text-transform: capitalize;
    border-radius: 25px;
    color: black;
  }
  .inputfield {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input:focus {
    outline: none;
  }
  input {
    font-size: 0.9rem;
    width: 70%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid black;
    margin-top: 15px;
  }
  .login-form,
  .signup-form {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sliders {
    position: absolute;
    height: 100%;
    width: 50%;
    background-color: rgb(205, 113, 113);
    transition: all 0.3s ease;
  }
  .icons {
    margin: 40px 0;
  }
  .icons i {
    font-size: 2rem;
    margin: 0 10px;
  }
  .signup-slider,
  .login-slider {
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
  }
  .signup-slider p,
  .login-slider p {
    margin: 40px 0;
  }
  .displaynone {
    opacity: 0;
    pointer-events: none;
  }
  .slide {
    transform: translateX(100%);
  }    
`,
    js: "",
  },
  // blog2 navbar animation
  {
    id: "navbar-animation",
    title: "Navbar animation on scroll and active slider using HTML, CSS, JS.",
    date: "27 March, 2024",
    thumbnail: navbar,
    ytLink: "https://www.youtube.com/embed/SdQUxwlpKGA?si=lItYbKPSK64Eawy5",
    displayIntro:
      "Changing navbar background on scroll. Also active bar slider according to current page.",
    firstIntroduction: `Learn to create a navbar with custom animation on scroll event. We will be using HTML, CSS and simple JavaScript to create this project.
        We will change background color of navbar and color of all links once we hit certain pixel about the next page.
      `,
    image: navthumbog,
    indexHtml: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <nav id="navbar">
      <div class="logo" id="navlogo">Navbar</div>
      <div class="links">
        <div id="line"></div>
        <a href="#">Home</a>
        <a href="#">Mountains</a>
        <a href="#">Travel</a>
      </div>
    </nav>
    <section id="home">
      <p class="intothe">Into The</p>
      <p class="mountains">Mountains</p>
    </section>
    <section id="mountains">
      <p class="mountaintitle">Mountains</p>
    </section>
    <section id="travel">
      <p class="traveltitle">Travel</p>
    </section>
  </body>
  <script src="./script.js"></script>
</html>    
    `,
    css: `
@import url("https://fonts.googleapis.com/css2?family=Galada&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Galada&family=Paytone+One&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
#navbar {
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0px;
}
.logo {
  font-family: "Paytone One", sans-serif;
  font-size: 2.5rem;
  color: white;
}
.links {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
}
.links a {
  text-decoration: none;
  margin-left: 70px;
  font-size: 1.1rem;
  width: 100px;
  text-align: center;
  color: white;
}
#line {
  position: absolute;
  bottom: 0;
  height: 3px;
  width: 100px;
  background-color: white;
  transition: all 0.3s ease;
  transform: translateX(70px);
}
#home,
#mountains,
#travel {
  height: 100vh;
  width: 100%;
}
#home {
  background: url("./images//mountain.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.436);
}
#home p {
  font-family: "Galada", cursive;
  font-weight: 400;
  font-size: normal;
  margin-top: 80px;
  font-size: 4rem;
}
.intothe {
  margin-left: 180px;
  letter-spacing: 5px;
  margin-right: 160px;
}
#mountains,
#travel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#mountains {
  background: url("./images/mountain3.jpg");
  background-position: center;
  background-size: cover;
}
#travel {
  background: url("./images/mountain2.jpg");
  background-position: center;
  background-size: cover;
}
.mountaintitle,
.traveltitle {
  font-size: 5rem;
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-family: "Galada", cursive;
}        
`,
    js: `
const navbar = document.getElementById("navbar");
const links = document.querySelectorAll(".links a");
const line = document.getElementById("line");
const navlogo = document.getElementById("navlogo");

const homeBottomPixel =
  document.getElementById("home").getBoundingClientRect().bottom - 300;
const mountainsBottomPixel =
  document.getElementById("mountains").getBoundingClientRect().bottom - 300;
const travelBottomPixel =
  document.getElementById("travel").getBoundingClientRect().bottom - 300;

window.addEventListener("scroll", () => {
  let currentScrollPixel = window.scrollY;
  //navbar
  // change navbar
  if (currentScrollPixel > 150) {
    line.style.backgroundColor = "black";
    navbar.style.backgroundColor = "rgba(255,255,255,.7)";
    navlogo.style.color = "black";

    // set all links to color white/black
    links.forEach((link) => {
      link.style.color = "black";
    });
  }
  //   default navbar
  else {
    navbar.style.backgroundColor = "rgba(255,255,255,0)";
    navlogo.style.color = "white";
    links.forEach((link) => {
      link.style.color = "white";
    });
    line.style.backgroundColor = "white";
  }

  // line slider
  if (currentScrollPixel < homeBottomPixel) {
    line.style.transform = "translateX(70px)";
  } else if (
    currentScrollPixel > homeBottomPixel &&
    currentScrollPixel < mountainsBottomPixel
  ) {
    line.style.transform = "translateX(242px)";
  } else {
    line.style.transform = "translateX(415px)";
  }
});        
`,
  },
];
