import { useContext, useState, type ChangeEvent, type FormEvent } from "react"
import { BlogContext } from "../contexts/BlogContext"
import type { Blog } from "../types/blog.types"
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from "react-router-dom"

const AddPost = () => {
  const context = useContext(BlogContext)
  if (!context) {
    throw new Error("AddBlog must be used within a BlogContextProvider")
  }

  const { blogs, setBlogs } = context
  const [inputValue, setInputValue] = useState<Partial<Blog>>({
    title: "",
    content: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setInputValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const navigate = useNavigate()
 
  const handleCreatePost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputValue.title && inputValue.content) {
      const newPost = {
        id: uuidv4(),
        title: inputValue.title,
        content: inputValue.content,
        published: true,
      }
      setBlogs([...blogs, newPost])
      setInputValue({ title: "", content: "" }) // Reset input fields after submission
      console.log("New post created:", newPost)
      navigate("/blog") // Redirect to the blog list page after creating a post
    } else {
      alert("Title and content are required")
    }
  }
  
  return (
    <div>
      <h1 className="text-xl mb-4">Create Post</h1>
      <form onSubmit={handleCreatePost}>
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={inputValue.title} onChange={handleChange} className="border rounded-lg h-8 pl-2"/>
        </div>
        <div className="flex flex-col w-1/2 gap-2 mt-4">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" value={inputValue.content} onChange={handleChange} className="border rounded-lg h-100 pl-2"></textarea>
        </div>
        <div>
          <button type="submit" className="border rounded-lg mt-4 px-4 py-2 ">Create</button>
        </div>
      </form>
    </div>
  )
}

export default AddPost