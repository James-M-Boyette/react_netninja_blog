import { isPending } from "q";
import React, { useState, useEffect } from "react";
// import BlogList from "./BlogList";
import BlogListBasic from "./modules/templates/BlogList";
import useFetch from "./modules/hooks/useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch(
        "http://localhost:8000/blogs"
    );

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
            {error && <div>{error}</div>}
        </div>
    );
};

export default Home;
