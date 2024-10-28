install react-router-Dom library`
the component which contains all the child components like App component that should be wrapped inside the BrowserRouter component which doesnt have Provider key and value props
Routes is a parent component inside that we will be having Route components in route components we will have NavLink component which is similar to <a></a> tag and in  NavLink component we have attribute called to (required):
Specifies the destination URL or path to navigate to when the link is clicked.

Home page is the default Route

<NavLink></NavLink> component used to update url when the url get updated the routes component will trigger and checks all the rout components which path will matc with that updated url and its corrresponded component in route will render


      (Or)
      Navigation using <NavLink>:

When you click on a <NavLink>, it updates the browser's URL to match the "to" prop of that link (e.g., /home or /about).
URL Update:

Once the URL is updated, React Router recognizes the change and starts checking which route matches the updated URL.
Route Matching:

React Router compares the updated URL with the path prop of all the <Route> components you’ve defined in your app.
It identifies the <Route> where the path matches the updated URL.

Component Rendering:

When a match is found, React Router renders the corresponding component for that matched <Route>.
If no routes match, React Router will either render a fallback (like a "Not Found" page) or render nothing, depending on how you’ve configured your routes.


<Navlink></Navlink> this used in main page like in navbar
<Link></Link> this is used in remaining pages(i.e sub pages) in an appication