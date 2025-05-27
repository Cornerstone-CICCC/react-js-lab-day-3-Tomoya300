import { createContext } from 'react';
import type { Blog } from '../types/blog.types';

type BlogContextType = {
  blogs: Blog[];
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>; // This is a state setter function that allows you to update the blogs array
}

export const BlogContext = createContext<BlogContextType>({
  blogs: [],
  setBlogs: () => {},
})