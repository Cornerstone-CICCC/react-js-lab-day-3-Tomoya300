import { BlogContext } from "./BlogContext";
import { useReducer, type ReactNode } from "react";
// import type { Blog } from "../types/blog.types";
import { blogsReducer } from "../reducers/blogsReducer";


export const BlogContextProvider = ({ children }: { children: ReactNode}) => {
  const [state, dispatch] = useReducer(blogsReducer, { blogs: [] })

  return (
    <BlogContext.Provider value={{ blogs: state.blogs, dispatch }}>
      {children}
    </BlogContext.Provider>
  )
}