import React from "react";

// Note:
// In templates, you can output most of the same scalar values as other languages. You cannot, however, export *booleans*. Nor can you output *objects*. See below ...

const ExampleModuleBasics = () => {
    const title = "Welcome to the new React blog!";
    const likes = 50;
    const link = "http://ww.google.com";
    return (
        <div className="exampleContent">
            <h1>{title}</h1>
            <p>Liked {likes} times</p>
            <p>{10}</p>
            <p>{"I'm a string"}</p>
            <p>{[1, 2, 3, 4, 5]}</p>
            <p>{Math.random() * 10}</p>

            {/* Boolean and objects aren't rendered: */}
            {/* <p>{true}</p>  */}
            {/* <p>
                {{
                    first_name: "James",
                    middle_name: "Awesomer",
                    last_name: "Johnson",
                }}
            </p> */}

            <a href={link}>Google that!</a>
        </div>
    );
};

export default ExampleModuleBasics;
