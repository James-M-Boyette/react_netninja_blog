import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    // Video #17
    // Note: if you wanted this to be an asynchronous function, you'd need to externalize the function - but this hook itself cannot use async (! useEffect(async () => {}))
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then((res) => {
                return res.json(); // convert 'response' object into json
            })
            .then((data) => {
                // extract the 'data' from the json
                setBlogs(data);
            });
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList myBlogs={blogs} title="(Home) All Blogs!" />}
            <br />
            <br />
        </div>
    );
};

export default Home;
