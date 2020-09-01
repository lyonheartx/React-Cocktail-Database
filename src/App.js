import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";


function App() {
  return (
    /* Need basename= path to deploy project in subfolders on domain and not localhost along
    with the process.env.PUBLIC_URL links */
    <Router basename={'/'}>
      <Navbar />
      <Switch>

        {/* Remember that Router assigns a component to a path or page defined in the route, 
        to be rendered in that order, i.e homepage is / so Home is rendered at /
        About rendered at /about. Also, Navbar is not inside Switch, it follows to all paths. */}

        <Route exact path={`${process.env.PUBLIC_URL}/`}> 
          <Home />
          
          {/* Each Route is like a div or a page, whatever in it, it will render in that order,
          if a path or url is assigned, it will do so in that page. If I add <About /> inside 
          the Route tags along with Home, it will render About component right underneath, Navbar is
          not inside Switch, so it appears in all pages. */}
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/about`}>
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
