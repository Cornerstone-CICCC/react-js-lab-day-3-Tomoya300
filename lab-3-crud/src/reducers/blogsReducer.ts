import type { Blog } from '../types/blog.types'

type State = {
  blogs: Blog[];
}

export type Action = 
  | { type: 'ADD', payload: Blog}
  | { type: 'EDIT', payload: Blog}
  | { type: 'DELETE', payload: Blog}

export const blogsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD":
      return {...state, blogs: [...state.blogs, action.payload] }
    case "DELETE":
      return {...state, blogs: state.blogs.filter(blog => blog.id !== action.payload.id)} 
    case "EDIT":
      return {...state,
        blogs: state.blogs.map(blog => 
          blog.id === action.payload.id ? action.payload : blog
        )
      }
    default:
      return state;
  }
}