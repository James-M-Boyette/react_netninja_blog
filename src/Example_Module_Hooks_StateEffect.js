import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const ExampleModuleHooksStateEffect = () => {
    // Here is hard-coded data to be used with our Hooks *before* we use a backend REST API server in videos 12-15 ...
    const [blogs, setBlogs] = useState([
        {
            title: "My new blog",
            body: "Content here is TBD",
            author: "Luke Skywalker",
            id: 1,
        },
        {
            title: "What's a blog?",
            body: "I don't know - maybe something here later ...",
            author: "Han Solo",
            id: 2,
        },
        {
            title: "Test von testy-test",
            body: "Stuff, again, to go here",
            author: "Luke Skywalker",
            id: 3,
        },
    ]);

    // Video #12
    // Here we will pass a function ('handleDelete()') from our parent component ('Example_Module_Hooks_StateEffect') to our child component ('BlogList()')

    // This function will ...
    //   1. store a new array (using .filter()) of all blogs *not* matching the id of the blog we delete, and then
    //   2. use the useState() hook to update the rendered blogs
    // Note: currently, our delete button doesn't delete data - it just changes what's being rendered
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };

    // Videos #13-15
    // The first Hook we'll use is 'useState()':
    //   - it's a hook/function that runs every time the page is re-rendered.
    const [name, setName] = useState("Han Solo");

    // The second Hook we'll use is 'useEffect()':
    //   - it's a hook/function that runs every time the page is re-rendered.
    //   - it's particularly useful for actions like fetching or sending data
    // Note: given that 'useEffect()' hook doesn't return anything, it doesn't need to be stored in a constant.
    useEffect(() => {
        console.log("use effect ran ...");
        console.log(name);

        // Note: when useEffect & useState are used together, they can potentially create a feedback loop:
        //  - (if particular logic is written) the page will be rendered on first load, which will run useEffect, which causes a re-render, which causes useEffect to run again etc etc). In order to make sure useEffect() only runs on the *first* render, you can add an empty array as a second argument:
        // }, []);
        // You can also add actual dependancies as your second argument:
    }, [name]); // Here, we're using 'name' as the second argument & dependancy - only when our constant 'name' is changed (line 44) will this useEffect() be trigger.

    return (
        <div className="hooksStateEffect">
            {/* Here, the child module/component 'BlogList' is receiving our data from the 'blogs' hook, through our 'myBlogs' prop */}
            <h4 style={{ marginBottom: "10px" }}>(_Hooks_StateEffect)</h4>
            <h4 style={{ marginBottom: "20px" }}>
                Here, we're using the useState() & useEffect() Hooks in various
                ways ...
            </h4>
            <br />
            <h4 style={{ marginBottom: "20px" }}>
                In this first example, we're giving our 'delete blog' button its
                logic by
            </h4>
            <ul>
                <li>passing a function ('handleDelete()') </li>
                <li>
                    from our parent component
                    ('Example_Module_Hooks_StateEffect'){" "}
                </li>
                <li>to our child component ('BlogList()')</li>
                <li>
                    which is then being sent back to our parent component to be
                    rendered :
                </li>
            </ul>
            <br />
            <BlogList
                myBlogs={blogs}
                title="All Blogs :"
                handleDeleteProp={handleDelete} // Here's where we pass the function to our 'BlogList' child component
            />
            <h4 style={{ marginTop: "20px", paddingBottom: "20px" }}>
                If you click on any of these 'delete blog' buttons, our const
                'blogs' will be changed via a useState Hook. This, in turn, will
                automatically trigger a re-render of the page (which could, if
                used with a useEffect Hook, trigger subsequent effects ... as
                you'll see below ... )
            </h4>
            <div className="insertBlock">
                {/* Here's an example of using filter() & React's author property to display specific data */}
                <h4 style={{ marginBottom: "20px" }}>
                    Here, we're using the useState Hook to re-render our
                    original dataset, using .filter(), to only see those blogs
                    with a specific author (Luke Skywalker)...
                </h4>
                <BlogList
                    myBlogs={blogs.filter(
                        (blog) => blog.author === "Luke Skywalker"
                    )}
                    title="Luke's blogs  ( using .filter() ):"
                />
                <h4 style={{ marginTop: "20px" }}>
                    ( if we didn't use the useState hook, we'd see the same list
                    as our original ( 'All Blogs ' ) above ...
                </h4>
            </div>
            <div className="insertBlock">
                <h4 style={{ marginBottom: "20px" }}>
                    Here, we're using a button to trigger our useState Hook in
                    order to demonstrate that useEffect will be triggered
                    automatically, too :
                </h4>
                <h4 style={{ marginBottom: "20px" }}>
                    This button will change our const 'name' using the
                    'useState' Hook:
                </h4>
                <div className="blog-preview">
                    <button onClick={() => setName("Luke Skywalker")}>
                        change name
                    </button>
                    <br />
                    <br />
                    <p>{name}</p>
                </div>
                <h4 style={{ marginTop: "20px" }}>
                    ( when useState is triggered, the 'useEffect' Hook is also
                    run automatically - see the console log )
                </h4>
            </div>
        </div>
    );
};

export default ExampleModuleHooksStateEffect;
