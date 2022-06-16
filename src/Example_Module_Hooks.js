import React, { useState } from "react";

const ExampleModuleHooks = () => {
    let changeThisVar = "Luke Skywalker";
    const [changeThisVar2, setName] = useState("Yoda");

    const handleClick1 = (event) => {
        console.log("Hello, ninjas!", event);
    };
    const handleClick2 = (name, event) => {
        console.log(`Hello, ${name}!`, event);
    };
    const handleClick3 = () => {
        console.log("changeThisVar Before:", changeThisVar);
        changeThisVar = "Emperor Palpetine";
        // Note that this changes the JS variable in MEMORY ... but *not* what's rendered
        console.log("changeThisVar After:", changeThisVar);
    };
    const handleClick4 = () => {
        console.log("changeThisVar2 Before:", changeThisVar2);
        setName("Mace Windoo");
        // Note that this changes what's RENDERED ... but *not* the JS variable in memory
        console.log("changeThisVar2 After:", changeThisVar2);
    };

    return (
        <div className="exampleModuleHooks">
            <h2>React 'Hooks' Examples:</h2>
            <br />
            {/* In order to refer to our function, we use only handleClick (and not the invocation handleClick() - which would *automatically* trigger the function regardless of click) */}
            <div className="explanation">
                <p className="firstButton">Click this first button to</p>
                <ol>
                    <li>
                        Run a function from the Example_Module_Hooks file that
                    </li>
                    <li>Logs something to console ...</li>
                    <li>That is HARD-CODED ...</li>
                </ol>
            </div>
            <br />
            <button onClick={handleClick1}>Click me first!</button>
            <br />
            {/* But how do we pass in arguments? Using anonomous functions*/}
            <br />
            <div className="explanation">
                <p className="secondButton">Click this second button to</p>
                <ol>
                    <li>
                        Run a function from the Example_Module_Hooks file that
                    </li>
                    <li>Logs something to console ...</li>
                    <li>by PASSING an ARGUMENT ...</li>
                </ol>
            </div>
            <br />
            <button
                onClick={(event) => {
                    handleClick2("Lord Vader", event);
                }}>
                Click me second!
            </button>
            <br />
            <br />
            <div className="explanation">
                <p className="secondButton">Click this third button to</p>
                <ol>
                    <li>
                        Run a function from the Example_Module_Hooks file that
                    </li>
                    <li>TRIES to change this name:</li>
                    <br />
                    <p>{changeThisVar}</p>
                </ol>
            </div>
            <br />
            <button onClick={handleClick3}>
                Click me third (to try to change the name above)
            </button>
            <br />
            <br />
            <div className="explanation">
                <p className="secondButton">Click this fourth button to</p>
                <ol>
                    <li>
                        Run a function from the Example_Module_Hooks file that
                    </li>
                    <li>ACTUALLY changes a name</li>
                    <li>... but doesn't change the variable in memory ...</li>
                    <br />
                    <p>{changeThisVar2}</p>
                </ol>
            </div>
            <br />
            <button onClick={handleClick4}>
                Click me fourth (to actually change the name above)
            </button>
            <br />
        </div>
    );
};

export default ExampleModuleHooks;
