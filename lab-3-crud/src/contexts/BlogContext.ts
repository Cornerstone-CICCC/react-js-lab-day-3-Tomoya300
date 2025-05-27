import { createContext } from 'react';
import type { Blog } from '../types/blog.types';
import { type Action } from '../reducers/blogsReducer';

type BlogContextType = {
  blogs: Blog[];
  dispatch:React.Dispatch<Action> ; // This is a state setter function that allows you to update the blogs array
}

export const BlogContext = createContext<BlogContextType>({
  blogs: [],
  dispatch: () => {},
})