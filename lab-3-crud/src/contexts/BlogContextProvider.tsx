import { BlogContext } from "./BlogContext";
import { useState, type ReactNode } from "react";
import type { Blog } from "../types/blog.types";


export const BlogContextProvider = ({ children }: { children: ReactNode}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  )
}