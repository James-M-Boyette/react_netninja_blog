import { isPending } from "q";
import React, { useState, useEffect } from "react";
// import BlogList from "./BlogList";
import BlogListBasic from "./templates/BlogListBasic";
import useFetch from "./hooks/useFetch";

const ExampleModuleHooksErrorsV2 = () => {
    const { data: blogs, isPending, error } = useFetch(
        "http://localhost:8000/blogsS"
    ); // Here, we're importing our custom Hook 'useFetch' *and* passing a given endpoint to it
    // Note: the destructured 'data: blogs' = "grab the 'data', but call it 'blogs' ...". If we just wanted to work with 'data' as-is, we'd need to use the first formulation of our jsx on line #33 / V1: "Vanilla 'data'"

    return (
        <div className="exampleModuleHooksErrorsV2">
            {/* <h2>{title}</h2> */}
            <h4 style={{ marginBottom: "10px" }}>(_Hooks_ErrorsV2)</h4>
            <h4 style={{ marginBottom: "10px" }}>
                Here, we're sending that same faulty request -
            </h4>
            <h4 style={{ marginBottom: "20px" }}>
                but now, we're using our 'custom Hook' as an *imported* one - so
                now, it's available like any native Hook, to be used in any
                module !
            </h4>
            <h4 style={{ marginBottom: "20px" }}>
                (The custom Hook has been moved to a seperate module, and this
                V2 REST API module is still trying to render the database
                request ... but our Hook allows us to handle everything while
                being a single line of code on the page - both importing the
                hook and sending it the desired url)
            </h4>
            {/* Here, we're showing a message while we wait for the data to come back ... (and then hide it once it does) */}
            {isPending && <div>Loading ...</div>}
            {/* V1: "Vanilla 'data'"": Here, if we wanted to work with the data as-is, we could use the following ... */}
            {/* {data && (
                <BlogListBasic
                    myBlogs={data}
                    title="All Blogs, based on current tutorial work"
                />
            )} */}
            {/* V2: "'data' to 'blogs'": However, it's more flexible & readable to make our Hook translate or pass the data as 'blogs'  */}
            {blogs && (
                <BlogListBasic
                    myBlogs={blogs}
                    title="All Blogs, based on current tutorial work"
                />
            )}
            <br />
            <br />
            {error && <div>{error}</div>}
            {/* Here's we're showing still showing the error if it's 'true' */}
        </div>
    );
};

export default ExampleModuleHooksErrorsV2;
