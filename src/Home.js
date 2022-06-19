import React, { useState, useEffect } from "react";
// import BlogList from "./BlogList";
import BlogListBasic from "./BlogListBasic";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // Video #17
    // Note: if you wanted this to be an asynchronous function, you'd need to externalize the function - but this hook itself cannot use async (! useEffect(async () => {}))
    useEffect(() => {
        setTimeout(() => {
            // Here, we're simulating the delay our browser would experience while waiting to receive data ...
            fetch("http://localhost:8000/blogs")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false); // 33
                });
        }, 2000);
    }, []);

    return (
        <div className="home">
            {/* <h2>{title}</h2> */}
            <h4 style={{ marginBottom: "10px" }}>(Home)</h4>
            <h4 style={{ marginBottom: "10px" }}>
                Here is the current work our tutorial series has us
                implementing.
            </h4>
            <h4 style={{ marginBottom: "20px" }}>
                We're currently still sending a request to the server and
                rendering the response ...
            </h4>
            {/* Here, we're showing a message while we wait for the data to come back ... (and then hide it once it does) */}
            {isPending && <div>Loading ...</div>}
            {blogs && (
                <BlogListBasic
                    myBlogs={blogs}
                    title="All Blogs, based on current tutorial work"
                />
            )}
            <br />
            <br />
        </div>
    );
};

export default Home;
