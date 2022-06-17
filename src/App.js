// Styles:
// import "./App.css";

// Dependancies:
import React from "react";

// Modules:
import ExampleModuleBasics from "./Example_Module_Basics";
import ExampleModuleHooksBasic from "./Example_Module_Hooks_Basic";
import ExampleModuleHooksStateEffect from "./Example_Module_Hooks_StateEffect";
import ExampleModuleHooksSEDBBasic from "./Example_Module_Hooks_SEDBBasic";
import Navbar from "./Navbar";
import Home from "./Home";

console.log("React ver:", React.version);

function App() {
    return (
        // Here, we're returning a JSX template
        <div className="App">
            <Navbar />
            {/* <div className="contentBlock"> */}
            <div className="content contentBlock">
                <Home />
            </div>
            {/* </div> */}
            <div className="content contentBlock">
                <ExampleModuleBasics />
            </div>
            <div className="content contentBlock">
                <ExampleModuleHooksBasic />
            </div>
            <div className="content contentBlock">
                <ExampleModuleHooksStateEffect />
            </div>
            <div className="content contentBlock">
                <ExampleModuleHooksSEDBBasic />
            </div>
        </div>
    );
}

export default App;
