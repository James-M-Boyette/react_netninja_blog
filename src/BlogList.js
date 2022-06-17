import React from "react";

// const BlogList = (props) => {
const BlogList = ({ myBlogs, title, handleDeleteProp }) => {
    // ** Here, we're receiving the data from our 'myBlogs' prop and our 'title' prop:
    // const blogs = props.myBlogs;

    // console.log("props:", props, "blogs:", blogs);

    // const title = props.title;

    // console.log("title:", title);

    // ** Here, we're using the de-structured data from our props:
    const blogs = myBlogs;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                // Note: the 'key' property allows React to keep track of elements as they're outputted to the DOM
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    {/* Here, we've passed in a function as a prop */}
                    <br />
                    <button onClick={() => handleDeleteProp(blog.id)}>
                        delete blog
                    </button>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
