export const blogs = [
  {
    id: "login-animation",
    title: "How to create login animation using HTML, CSS, JS.",
    date: "20 March, 2024",
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
  {
    id: "code-in-react",
    title: "Learn to code in react",
    date: "20 March, 2024",
    firstIntroduction:
      "first of all oing to use simple and basic syntax of Javascript to create this project.",
    ytLink: "https://www.youtube.com/embed/eccD-uVgasdasdasdasdasdaskq",
    displayIntro: "dispaly intro",
    indexHtml: "",
    css: "",
    js: "",
  },
];
