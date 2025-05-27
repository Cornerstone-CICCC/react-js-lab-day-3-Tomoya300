import { useContext } from "react"
import { BlogContext } from "../contexts/BlogContext"
import { useNavigate, Link } from "react-router-dom"



const BlogList = () => {
  const context = useContext(BlogContext)
  if (!context) {
    throw new Error("BlogList must be used within a BlogContextProvider")
  }

  const navigate = useNavigate()

  const handleCreateBtn = () => {
    navigate("/blog/new")
  }
  
  const { blogs } = context

  console.log(blogs)

  return (
    <div>
      <div className="flex justify-between items-center mb-4 py-4 px-8">
        <h1 className="text-2xl">Blogs</h1>
        <button className="border rounded-lg px-4 py-2 hover:scale-110 transition" onClick={handleCreateBtn}>Create</button>
      </div>
      {blogs.length === 0 ? (
        <p className="text-center">No blogs available</p>
      ) : (
        <ul className="w-full max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <li key={blog.id} className="border rounded-lg py-2 px-4 mb-4 hover:shadow-lg hover:scale-101 transition">
              <Link to={`/blog/${blog.id}`} className="block">
                <h2 className="mb-2 text-xl">{blog.title}</h2>
                <p className="line-clamp-4">{blog.content}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BlogList