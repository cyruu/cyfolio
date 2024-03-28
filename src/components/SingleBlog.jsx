import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogs } from "./index";
import "../css/singleBlog.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useLocation } from "react-router";
function SingleBlog() {
  const { pathname } = useLocation();
  const { blogId } = useParams();
  const [singleBlogObject, setSingleBlogObject] = useState({});

  function handleCopyText(element) {
    return function () {
      element.style.opacity = 1;
      setTimeout(() => {
        element.style.opacity = 0;
      }, 500);
    };
  }
  function copyToClipboard(element) {
    return function () {
      let codeText = element.innerText;

      navigator.clipboard.writeText(codeText);
    };
  }
  function navScrollAnimation() {
    const blogline = document.getElementById("blogline");
    const activeLine = document.getElementById("activeline");
    const navbar = document.getElementById("navbar");
    const lines = document.querySelectorAll(".line");
    let currentScrollPoint = window.scrollY;
    let screenWidth = window.innerWidth;
    if (screenWidth > 431) {
      if (currentScrollPoint > 100) {
        // change navbar color
        navbar.style.backgroundColor = "rgb(45,45,45)";
        navbar.style.color = "white";
        activeline.style.backgroundColor = "white";
        lines.forEach((line) => {
          line.style.backgroundColor = "white";
        });
        blogline.style.backgroundColor = "white";
        navbar.style.boxShadow = "3px 3px 3px rgba(0,0,0,0.2)";
      } else {
        navbar.style.backgroundColor = "white";
        navbar.style.boxShadow = "none";
        navbar.style.color = "black";
        lines.forEach((line) => {
          line.style.backgroundColor = "black";
        });
        activeLine.style.backgroundColor = "black";
        blogline.style.backgroundColor = "black";
      }
    }
  }
  function initialScrollToTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    //navbar scroll
    const blogline = document.getElementById("blogline");
    blogline.style.display = "block";
    const activeLine = document.getElementById("activeline");
    activeLine.style.display = "none";

    const activeline = document.getElementById("activeline");
    activeline.style.transform = "translateX(390px)";
    window.addEventListener("scroll", navScrollAnimation);
    initialScrollToTop();
    // window.addEventListener("scroll", () => {
    //   let currentScrollPoint = window.scrollY;
    //   let screenWidth = window.innerWidth;
    //   if (screenWidth > 431) {
    //     if (currentScrollPoint > 100) {
    //       // change navbar color
    //       navbar.style.backgroundColor = "rgb(45,45,45)";
    //       navbar.style.color = "white";
    //       activeline.style.backgroundColor = "white";
    //       lines.forEach((line) => {
    //         line.style.backgroundColor = "white";
    //       });
    //       blogline.style.backgroundColor = "white";
    //       navbar.style.boxShadow = "3px 3px 3px rgba(0,0,0,0.2)";
    //     } else {
    //       navbar.style.backgroundColor = "white";
    //       navbar.style.boxShadow = "none";
    //       navbar.style.color = "black";
    //       lines.forEach((line) => {
    //         line.style.backgroundColor = "black";
    //       });
    //       activeline.style.backgroundColor = "black";
    //       blogline.style.backgroundColor = "black";
    //     }
    //   }
    // });
    const blog = blogs.filter((blog) => blog.id == blogId);
    setSingleBlogObject(blog[0]);
    //buttons
    const copycss = document.getElementById("copycss");
    const copyhtml = document.getElementById("copyhtml");
    const copyjs = document.getElementById("copyjs");

    //copied text
    const htmlcopied = document.getElementById("htmlcopied");
    const csscopied = document.getElementById("csscopied");
    const jscopied = document.getElementById("jscopied");
    copyhtml.addEventListener("click", handleCopyText(htmlcopied));
    copycss.addEventListener("click", handleCopyText(csscopied));
    copyjs.addEventListener("click", handleCopyText(jscopied));

    var codeBlockHtml = document.getElementById("codeBlockHtml");
    var codeBlocCss = document.getElementById("codeBlockCss");
    var codeBlockJs = document.getElementById("codeBlockJs");

    copyhtml.addEventListener("click", copyToClipboard(codeBlockHtml));
    copycss.addEventListener("click", copyToClipboard(codeBlocCss));
    copyjs.addEventListener("click", copyToClipboard(codeBlockJs));

    return () => {
      copyhtml.removeEventListener("click", handleCopyText(htmlcopied));
      copycss.removeEventListener("click", handleCopyText(csscopied));
      copyjs.removeEventListener("click", handleCopyText(jscopied));
      copyhtml.removeEventListener("click", copyToClipboard(codeBlockHtml));
      copycss.removeEventListener("click", copyToClipboard(codeBlocCss));
      copyjs.removeEventListener("click", copyToClipboard(codeBlockJs));
      window.removeEventListener("scroll", navScrollAnimation);
    };
  }, [pathname]);

  return (
    <div id="singleBlogContainer">
      <div className="blogContainer">
        <p className="blogtitle">{singleBlogObject.title}</p>
        <p className="singleblogdate">
          {singleBlogObject.date} &nbsp; -Cyrus Maharjan
        </p>
        <p className="introduction">{singleBlogObject.firstIntroduction}</p>
        {/* ytvideo */}
        <div
          className={`ytvideo ${singleBlogObject.ytLink ? "" : "displaynone"}`}
        >
          <iframe
            src={singleBlogObject.ytLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* if no yt display thubnail */}
        <div
          className={`thumbnail ${
            singleBlogObject.ytLink ? "displaynone" : ""
          }`}
        >
          <img
            src={singleBlogObject.image}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <p
          className={`indexhtml ${
            singleBlogObject.indexHtml ? "" : "displaynone"
          } `}
        >
          Code for <span className="bold">index.html</span>
          <button id="copyhtml" title="copy">
            {/* <i class="fa-regular fa-copy"></i> */}
            <i className="fa-regular fa-copy"></i>
            <p id="htmlcopied">copied</p>
          </button>
        </p>
        <div
          className={`codeSection ${
            singleBlogObject.indexHtml ? "" : "displaynone"
          }`}
        >
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            id="codeBlockHtml"
            customStyle={{
              width: "80%",
              maxHeight: "500px",
              fontSize: ".7rem",
            }}
          >
            {singleBlogObject.indexHtml}
          </SyntaxHighlighter>
        </div>
        {/* css */}
        <p className={`stylecss ${singleBlogObject.css ? "" : "displaynone"}`}>
          Code for <span className="bold">style.css</span>
          <button id="copycss" title="copy">
            {/* <i class="fa-regular fa-copy"></i> */}
            <i className="fa-regular fa-copy"></i>
            <p id="csscopied">copied</p>
          </button>
        </p>
        <div
          className={`codeSection ${singleBlogObject.css ? "" : "displaynone"}`}
        >
          <SyntaxHighlighter
            language="css"
            style={atomOneDark}
            customStyle={{
              width: "80%",
              maxHeight: "500px",
              fontSize: ".7rem",
            }}
            id="codeBlockCss"
          >
            {singleBlogObject.css}
          </SyntaxHighlighter>
        </div>
        {/* js */}

        <p className={`scriptjs ${singleBlogObject.js ? "" : "displaynone"}`}>
          Code for <span className="bold">script.js</span>
          <button id="copyjs" title="copy">
            {/* <i class="fa-regular fa-copy"></i> */}
            <i className="fa-regular fa-copy"></i>
            <p id="jscopied">copied</p>
          </button>
        </p>
        <div
          className={`codeSection ${singleBlogObject.js ? "" : "displaynone"}`}
        >
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            customStyle={{
              width: "80%",
              maxHeight: "500px",
              fontSize: ".7rem",
            }}
            id="codeBlockJs"
          >
            {singleBlogObject.js}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
