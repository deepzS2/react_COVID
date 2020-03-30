import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Header & Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import About from "./pages/About";
import Country from "./pages/Country";
import Covid from "./pages/Covid";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/covid" component={Covid} />
          <Route path="/country/:name" component={Country} />
          <Route component={Error404} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}
