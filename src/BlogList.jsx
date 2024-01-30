import { Link } from "react-router-dom";
import { errorMessage } from "./styles";

const BlogList = ({title, blogs}) => {



    if (blogs && Array.isArray(blogs)) {
        return (
            <div className="blog-list">
                <h2>{title}</h2> 

                {blogs.map((blog) => (
                <Link to={`/blogs/${blog.id}`} style={{
                        textDecoration: "none",
                        color:"inherit"
                }}>
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </div>           
                </Link>
                   ))}
            </div>
        );
    } else if (blogs && blogs.error) {
        // Display an error message if there is an error
        return <p style={errorMessage}>Error: {blogs.error}</p>;
    } else {
        // If blogs is not an array, handle accordingly
        return <p style={errorMessage}>No blogs available.</p>;
    }
};

export default BlogList;
