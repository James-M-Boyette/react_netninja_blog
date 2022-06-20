#### What is React?

-   A JS library used to create websites
-   Allows us to easily create **single Page Apps** ("SPA's")
-   Note: SPAs only require the server to send one HTML page, and libraries like React then take over _inside_ the browser itself (managing data, user interations - click events etc, navigating from page to page)
-   Note: importantly, going to new web pages doesn't make React query the server for a new web page - React injects the forms, navigation bars etc

#### What are components in React?

-   They contain both logic & templates
-   They use 'JSX' rather than HTML (_very_ similar in syntax) - and Babel compiles JSX into HTML for production
-   Because JSX is ultimately JS, element properties like 'class' (which are used in both HTML & JS) end-up producing conflicts. The solution is to substitute properties like 'className' (in JSX) for HTML's 'class'. Note: great example of why I love NetNinja's explanations ...
-   In templates, you can output most of the same scalar values as other languages. You cannot, however, export _booleans_. Nor can you output _objects_.
-   Components are handled in a 'tree' format:
-   > App.js is the root/top component
-   > Navbar.js, BlogDetails.js, Sidebar.js etc are nested components (and Sidebar.js could have Categories.js & Tags.js as further-nested components)

#### Styling React Components:

-   .css files are compiled, at run-time, as individual header style-tags ...so
-   <styles>index.js styling</styles>
-   <styles>Navbar.js styling</styles>
-   <styles>Navbar.js styling</styles>

#### Hooks:

-   Special functions that do specific jobs (often pre-fixed with 'use'), making the app "reactive" =D

-   'useState': a hook that allows us to change the state of a given element upon, say, the user's input ... If we didn't use this hook, React wouldn't know to re-render the page
-   Ex: if someone clicks our 'changeThisVar' button 'handleClick3' the variable is changed in JS ... but without the hook, the page continues to show the original, previously-rendered name

-   'useEffect': a hook that allows you to run something on every _render_

#### Props:

-   Allow you to make your modules more re-usable by placing your data outside of a target/receiving component - to pass it from parent to child component (from App.js to some sub-component/module)
-   Can still use the data in its current module

#### Project Architecture:

###### Example_Module_Hooks_Basic

-   In this module, we've written our own, bespoke Hook functions in order to begin exploring React's implementation of Hook functions ...

###### Example_Module_Hooks_StateEffect

-   In this module, we're using the useState() & useEffect() Hooks in various ways in order to begin exploring commonly-used Hooks ...

###### Example_Module_Hooks_SEDBBasic

-   ...SEDBBasic = useState useEffect Database Basic
-   In this module, we've stopped using in-line data, and are now (using the "JSON router" plugin/dependancy/library) making basic REST API calls (to a folder 'data' with json file 'db.json')

###### Example_Module_Hooks_Errors

-   In this module, we've "broken" our database endpoint so that the request returns a failed response.
-   Next, we've written a hook to handle _both_ fetching our data _and_ when an error is thrown. We've also created a custom message for that error, and made React render that error message when the Hook is triggered

###### Example_Module_Hooks_ErrorsV2

-   In this module, we've transfered our 'fetch + error' Hook out of the file and into a seperate module 'useFetch' - so that we can re-use it in any and all other modules. This is what's known as "creating a '_custom_' Hook" ...
-   Note: _ANY_ custom Hook must have its name begun with 'use' - a syntactical rule React uses to recognize Hooks

git mv src/Example_Module_Basics.jssrc/Example_Module_Hooks_Basic.jssrc/Example_Module_Hooks_SEDBBasic.jssrc/Example_Module_Hooks_StateEffect.jssrc/modules/

src\Example_Module_Basics.js
