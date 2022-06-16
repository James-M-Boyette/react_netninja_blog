// Styles:
// import "./App.css";

// Dependancies:
import React from "react";

// Modules:
import ExampleModuleBasics from "./Example_Module_Basics";
import ExampleModuleHooks from "./Example_Module_Hooks";
import Navbar from "./Navbar";
import Home from "./Home";

console.log("React ver:", React.version);

function App() {
    return (
        // Here, we're returning a JSX template
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
                {/* <ExampleModule /> */}
            </div>
            <div>
                <ExampleModuleBasics />
            </div>
            <div>
                <ExampleModuleHooks />
            </div>
        </div>
    );
}

export default App;
