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
  useEffect(() => {
    //navbar scroll
    const blogline = document.getElementById("blogline");
    blogline.style.display = "block";
    const activeLine = document.getElementById("activeline");
    activeLine.style.display = "block";
    const navbar = document.getElementById("navbar");
    const lines = document.querySelectorAll(".line");
    const activeline = document.getElementById("activeline");
    activeline.style.transform = "translateX(390px)";
    window.addEventListener("scroll", () => {
      let currentScrollPoint = window.scrollY;
      if (currentScrollPoint > 150) {
        // change navbar color
        navbar.style.backgroundColor = "rgb(45,45,45)";
        navbar.style.color = "white";
        activeline.style.backgroundColor = "white";
        lines.forEach((line) => {
          line.style.backgroundColor = "white";
        });
        blogline.style.backgroundColor = "white";
      } else {
        navbar.style.backgroundColor = "white";
        navbar.style.color = "black";
        lines.forEach((line) => {
          line.style.backgroundColor = "black";
        });
        activeline.style.backgroundColor = "black";
        blogline.style.backgroundColor = "black";
      }
    });
    const blog = blogs.filter((blog) => blog.id == blogId);
    setSingleBlogObject(blog[0]);
    //buttons
    const copycss = document.getElementById("copycss");
    const copyhtml = document.getElementById("copyhtml");

    // const htmlcode = document.getElementById("htmlcode");
    //copied text
    const htmlcopied = document.getElementById("htmlcopied");
    const csscopied = document.getElementById("csscopied");
    copycss.addEventListener("click", () => {
      csscopied.style.opacity = 1;
      setTimeout(() => {
        csscopied.style.opacity = 0;
      }, 500);
    });
    copyhtml.addEventListener("click", () => {
      htmlcopied.style.opacity = 1;

      setTimeout(() => {
        htmlcopied.style.opacity = 0;
      }, 500);
    });

    var codeBlockHtml = document.getElementById("codeBlockHtml");
    var codeBlocCss = document.getElementById("codeBlockCss");

    copyhtml.addEventListener("click", function () {
      var codeText = codeBlockHtml.innerText;

      navigator.clipboard.writeText(codeText);
    });
    copycss.addEventListener("click", function () {
      var codeText = codeBlocCss.innerText;

      navigator.clipboard.writeText(codeText);
    });
  }, []);

  return (
    <div id="singleBlogContainer">
      <div className="blogContainer">
        <p className="blogtitle">{singleBlogObject.title}</p>
        <p className="blogdate">
          {singleBlogObject.date} &nbsp; -Cyrus Maharjan
        </p>
        <p className="introduction">{singleBlogObject.firstIntroduction}</p>
        <div className="ytvideo">
          <iframe
            src={singleBlogObject.ytLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <p className="indexhtml">
          Code for <span className="bold">index.html</span>
          <button id="copyhtml" title="copy">
            {/* <i class="fa-regular fa-copy"></i> */}
            <i className="fa-regular fa-copy"></i>
            <p id="htmlcopied">copied</p>
          </button>
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{ width: "75%", maxHeight: "700px", fontSize: ".9rem" }}
          id="codeBlockHtml"
        >
          {singleBlogObject.indexHtml}
        </SyntaxHighlighter>
        {/* css */}
        <p className="stylecss">
          Code for <span className="bold">style.css</span>
          <button id="copycss" title="copy">
            {/* <i class="fa-regular fa-copy"></i> */}
            <i className="fa-regular fa-copy"></i>
            <p id="csscopied">copied</p>
          </button>
        </p>
        <SyntaxHighlighter
          language="css"
          style={atomOneDark}
          customStyle={{ width: "75%", maxHeight: "700px", fontSize: ".9rem" }}
          id="codeBlockCss"
        >
          {singleBlogObject.css}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default SingleBlog;
