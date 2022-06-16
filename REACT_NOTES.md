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

####

-   Note: these are compiled, at run-time, as individual header style-tags ...so
-   <styles>index.js styling</styles>
-   <styles>Navbar.js styling</styles>
-   <styles>Navbar.js styling</styles>
