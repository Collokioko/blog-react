import { Link } from "react-router-dom"

const BlogList = ({ blogs, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => {
                return ( // Add return statement here
                    <div className="preview" key={blog.id}>
                        <Link to={`blog-details/${blog.id}`}>
                            <h3>{blog.title}</h3>
                            <p>Done by: {blog.author}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default BlogList;
