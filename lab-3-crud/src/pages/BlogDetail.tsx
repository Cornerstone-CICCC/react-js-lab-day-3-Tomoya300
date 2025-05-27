import { useContext } from "react"
import { BlogContext } from "../contexts/BlogContext"
import { useNavigate, useParams } from "react-router-dom"

const BlogDetail = () => {
  const context = useContext(BlogContext)
  if (!context) {
    throw new Error("BlogDetail must be used within a BlogContextProvider")
  }

  const { blogs, dispatch } = context
  const { id } = useParams()
  const thisBlog = blogs.find((blog) => blog.id === id)

  const navigate = useNavigate()

  const handleEditBtn = () => {
    navigate(`/blog/edit/${id}`)
  }

  const handleDelete = () => {
    if (thisBlog) {
      dispatch({ type: 'DELETE', payload: thisBlog })
    }
    navigate('/blog')
    setTimeout(() => {
      alert('Blog deleted successfully')
    }, 1000);
  }

  if (!thisBlog) {
    return <h1 className="text-center">Blog not found</h1>
  }
  
  return (
    <div className="px-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-gray-400">ID: {thisBlog.id}</p>
          <h1 className="text-2xl">{thisBlog.title}</h1>
        </div>
        <button onClick={handleEditBtn} className="border rounded-lg py-2 px-4">Edit</button>
      </div>
      <p className="mb-4 px-2">{thisBlog.content}</p>
      <div>
        <button onClick={handleDelete} className="border rounded-lg py-2 px-4">Delete</button>
      </div>
    </div>
  )
}

export default BlogDetail