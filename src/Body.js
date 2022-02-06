import React from "react";
import { Route, Switch } from "react-router";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Review from "./component/Team";
import Faq from "./component/Faq";
import Services from "./component/Services";

export default function Body() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/faq" component={Faq} />
      <Route path="/team" component={Review} />
    </Switch>
  );
}
