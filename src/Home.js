import React, { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "My new website",
            body: "lorem ipsum...",
            author: "mario",
            id: 1,
        },
        {
            title: "Welcome party!",
            body: "lorem ipsum...",
            author: "yoshi",
            id: 2,
        },
        {
            title: "Web dev top tips",
            body: "lorem ipsum...",
            author: "mario",
            id: 3,
        },
    ]);
    return (
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {blogs.map((blog) => (
                // Note: the 'key' property allows React to keep track of elements as they're outputted to the DOM
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;