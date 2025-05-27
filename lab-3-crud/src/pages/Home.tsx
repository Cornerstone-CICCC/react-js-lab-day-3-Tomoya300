import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../contexts/BlogContext";
import type { Blog } from "../types/blog.types";
import { Link } from "react-router-dom";

const Home = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("Home must be used within a BlogContextProvider");
  } 
  const { blogs } = context;

  const [randPost, setRandPost] = useState<Blog | null>(null);

  useEffect(() => {
    if (blogs.length > 0) {
      const index = Math.floor(Math.random() * blogs.length);
      setRandPost(blogs[index]);
    }
  }, [blogs]);

  return (
    <div>
      <h1 className="text-center text-3xl">Super Good Blog</h1>
      <p className="mt-6 text-xl text-center">Welcome to my blog! Here you can find various articles and posts about different topics.</p>
      <div>
        <h2 className="text-2xl mt-8 ml-6">Latest Post</h2>
        {blogs.length === 0 ? (
          <p className="text-center mt-4">No posts available. Please check back later!</p>
        ) : (
          <div className="px-4 mt-4 mx-4 border rounded-lg hover:shadow-lg hover:scale-101 transition">
            <Link to={`/blog/${randPost?.id}`}>
              <h2 className="mb-2 text-xl">{randPost?.title}</h2>
              <p className="line-clamp-4">{randPost?.content}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home;