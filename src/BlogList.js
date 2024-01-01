import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title, handleDelete }) => {
    // const blogs = props.blogs;
    // const title = props.title;


    return (
        <div className="blog-list">
            <h2>{title}</h2>
            <ul>
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </Link>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default BlogList;