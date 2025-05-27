import { useContext, useState, type ChangeEvent, type FormEvent } from "react"
import { BlogContext } from "../contexts/BlogContext"
import type { Blog } from "../types/blog.types"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const EditPost = () => {
  const context = useContext(BlogContext)
  if (!context) {
    throw new Error("EditPost must be used within a BlogContextProvider")
  }
  const { blogs, dispatch } = context

  const { id } = useParams()
  const editedPost = blogs.find((blog) => blog.id === id)

  const [editingPost, setEditingPost] = useState<Partial<Blog>>({
    title: editedPost?.title || "",
    content: editedPost?.content || ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditingPost((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const navigate = useNavigate()
  
  const handleEditPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editingPost.title && editingPost.content) {
      const updatedPost = {
        id: id!,
        title: editingPost.title,
        content: editingPost.content,
        published: editedPost?.published ?? false,
      }
      dispatch({ type: 'EDIT', payload: updatedPost})
      navigate(`/blog/${id}`) // Redirect to the blog list page after editing a post
    } else {
      alert("Title and content are required")
    }
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Edit Post</h1>
      {!editedPost ? (
        <p className="text-center">Post not found</p>
      ) : (
        <form onSubmit={handleEditPost}>
          <div className="flex flex-col w-1/2 gap-2 mb-6">
            <label htmlFor="title" className="text-lg">Title</label>
            <input type="text" id="title" name="title" required value={editingPost.title} onChange={handleChange} className="border rounded-lg p-1 pl-2"/>
          </div>
          <div className="flex flex-col w-1/2 mb-4">
            <label htmlFor="content" className="text-lg mb-2">Content</label>
            <textarea id="content" name="content" rows={5} required value={editingPost.content} onChange={handleChange} className="border rounded-lg py-1 px-1 h-100 mb-4"></textarea>
          </div>
          <button type="submit" className="border rounded-lg py-2 px-4">Update Post</button>
        </form>
      )}
    </div>
  )
}

export default EditPost