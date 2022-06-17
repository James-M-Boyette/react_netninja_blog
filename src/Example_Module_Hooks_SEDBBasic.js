import React, { useState, useEffect } from "react";
import BlogListBasic from "./BlogListBasic";

// Video #17

const ExampleModuleHooksSEDBBasic = () => {
    const [blogs, setBlogs] = useState(
        // Here is the hard-coded data we used with our Hooks *before* switching to a backend REST API server ("JSON Server" - which he has a two-part tutorial on). Since our data is no-longer in-line with our module/component, we need to both our useEffect Hook and the JSX we're returning
        // (TBD: we also deleted the render-state-specific 'delete' button, as it's not applicable to this component)
        // [
        // {
        //     title: "My new blog",
        //     body: "Content here is TBD",
        //     author: "Luke Skywalker",
        //     id: 1,
        // },
        // {
        //     title: "What's a blog?",
        //     body: "I don't know - maybe something here later ...",
        //     author: "Han Solo",
        //     id: 2,
        // },
        // {
        //     title: "Test von testy-test",
        //     body: "Stuff, again, to go here",
        //     author: "Luke Skywalker",
        //     id: 3,
        // },
        // ]
        null
    );

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
        <div className="hooksSEDBBasic">
            <h4 style={{ marginBottom: "10px" }}>(_Hooks_SEDBBasic)</h4>
            <h4 style={{ marginBottom: "10px" }}>
                Here, we're no-longer using in-line data.
            </h4>
            <h4 style={{ marginBottom: "20px" }}>
                Instead, we're sending a request to a REST API server while
                forcing our BlogList to only render *after* our 'blogs' constant
                has been populated with the results.
            </h4>
            {/* Here, once we're sending and waiting on request responses from a server (instead of using in-line data), we need to wait for the return of that data. This is bc of two reasons: */}
            {/* 1. We no longer have our data in-line - and in our previous versions of this React template, BlogList was rendered for the first time @ runtime using said in-line data. Now, we're setting our in-line data to be 'null' initially - so on first render, our .map() will try and fail to run on a now-absent array*/}
            {/* 2. We need to wait for our data to come back from the server (as an array of objects) so that our template's .map() can do its work properly  */}
            {/* Soln: use conditional logic & JS's order of operations ... in logical 'and' statements, the left side is evaluated first *and if it results in 'false'* the right side expression is not evaluated ... so our template isn't run */}
            {/* The result is that, on first render, our BlogList isn't included in the render. Then, when our useEffect Hook gets the data back, a re-render is triggered - at which point, our 'blogs' variable has been changed from the falsy 'null' to our truthy array of objects */}
            {blogs && (
                <BlogListBasic
                    myBlogs={blogs}
                    title="All Blogs via basic REST API request :"
                />
            )}
        </div>
    );
};

export default ExampleModuleHooksSEDBBasic;
