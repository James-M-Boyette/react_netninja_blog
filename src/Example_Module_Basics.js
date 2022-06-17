import React from "react";

// Note:
// In templates, you can output most of the same scalar values as other languages. You cannot, however, export *booleans*. Nor can you output *objects*. See below ...

const ExampleModuleBasics = () => {
    const title = "Welcome to the new React blog!";
    const likes = 50;
    const link = "http://ww.google.com";
    return (
        <div className="exampleContent">
            <h4 style={{ marginBottom: "10px" }}>(_Basics)</h4>
            <h4 style={{ marginBottom: "20px" }}>
                Here, we're demonstrating the basic functionality of JSX (both
                what we can, and cannot project to the render) ...
            </h4>
            {/* <h1>{title}</h1> */}
            <h3>What *can* we render ?</h3>
            <h4>Numbers:</h4>
            <ul>
                <li>{10}</li>
            </ul>
            <h4>Strings:</h4>
            <ul>
                <li>{"I'm a string"}</li>
            </ul>
            <h4>Arrays:</h4>
            <ul>
                <li>{[1, 2, 3, 4, 5]}</li>
            </ul>
            <h4>Concatonated Variables:</h4>
            <ul>
                <li>Liked {likes} times</li>
            </ul>
            <h4>Links:</h4>
            <ul>
                <li>
                    <a href={link}>Google that!</a>
                </li>
            </ul>
            <h4>Method / Function outputs:</h4>
            <ul>
                <li>{Math.random() * 10}</li>
            </ul>

            {/* Boolean and objects aren't rendered: */}
            {/* <p>{true}</p>  */}
            {/* <p>
                {{
                    first_name: "James",
                    middle_name: "Awesomer",
                    last_name: "Johnson",
                }}
            </p> */}
        </div>
    );
};

export default ExampleModuleBasics;
