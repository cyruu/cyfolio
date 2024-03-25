import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogs } from "./index";
import "../css/singleBlog.css";
function SingleBlog() {
  const { blogId } = useParams();
  const [singleBlogObject, setSingleBlogObject] = useState({});
  useEffect(() => {
    const blog = blogs.filter((blog) => blog.id == blogId);
    setSingleBlogObject(blog);
  }, []);

  return <div id="singleBlogContainer"></div>;
}

export default SingleBlog;
