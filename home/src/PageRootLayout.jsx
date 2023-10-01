import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import HomeContent from "home/HomeContent";
import UserHomeContent from "userdetailseditor/UserHomeContent";

/**
 * The PageRootLayout Component, is a where every app in this project is directed to.
 * This contains the browser router and the routes for those.
 *
 * if we are at the route "/" it will display the HomeContent component etc.
 *
 * */
export default function PageRootLayout() {
  return (
    <BrowserRouter>
      <div className="text-3xl mx-auto max-w-6xl">
        <div className="my-10">
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/users/:id" component={UserHomeContent} />
            <Route path="/user/-1" component={UserHomeContent} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
