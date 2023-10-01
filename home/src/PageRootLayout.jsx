import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import HomeContent from "home/HomeContent";
import UserHomeContent from "userdetailseditor/UserHomeContent";

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
