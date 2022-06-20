import React, { useState, useEffect } from "react";
// import BlogList from "./BlogList";
import BlogListBasic from "./templates/BlogListBasic";

const ExampleModuleHookErrors = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // Video #19
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogsS") // We've set this to a bad endpoint in order to get a failed response and trigger our error(s) below ...
                .then((res) => {
                    // Here, we've added a couple of error messages:
                    // First, we've created a be-spoke error by throw(ing a new) Error *if* the 'ok' property of our response object comes back 'false'
                    if (!res.ok) {
                        throw Error(
                            "😥 Could not fetch the data for that resource ..."
                        );
                    }
                    return res.json(); // However, if it comes back true, we're rendering the json as normal
                })
                .then((data) => {
                    // if there's data, then proceed as normal + ...
                    setBlogs(data);
                    setIsPending(false); // ... remove the 'loading' message
                    setError(null); // ... and keep our Hook for 'error' as 'null'
                })
                .catch((error) => {
                    // if, however, there's an error ...
                    console.log("Network Error:", error.message); // ... we can log the error (or just its message) to terminal ...
                    setError(error.message); // ... and we can set our 'error' variable (in our Hook) to hold our bespoke error message
                    setIsPending(false); // Whether there's data or an error, we still chose to remove the 'loading' message (developer's choice)
                });
        }, 5000); // Delay before execution, both to simulate server request & allow user to scroll & view this module on the page
    }, []);

    return (
        <div className="exampleModuleHookErrors">
            {/* <h2>{title}</h2> */}
            <h4 style={{ marginBottom: "10px" }}>(_Hooks_Errors)</h4>
            <h4 style={{ marginBottom: "10px" }}>
                Here, we're sending a faulty request (on purpose) so that we can
                use our newly-created 'custom Hook' - which handles both errors
                and requests
            </h4>
            <h4 style={{ marginBottom: "20px" }}>
                Note: We're still sending a request to our server and rendering
                the response ...
            </h4>
            {isPending && <div>Loading ...</div>}
            {blogs && (
                <BlogListBasic
                    myBlogs={blogs}
                    title="All Blogs, based on current tutorial work"
                />
            )}
            <br />
            <br />
            {/* Here, we're showing our bespoke error.message *only* if our Hook's 'error' variable is switched from holding nothing ('null') to holding something - our bespoke message, in this case. So 'error' is evaluated first. If it's not 'null', then our <div> is evaluated - and that div has been set to display the Hook var 'error' ! */}
            {error && <div>{error}</div>}
        </div>
    );
};

export default ExampleModuleHookErrors;
