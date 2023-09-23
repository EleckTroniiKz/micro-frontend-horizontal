import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "components/Header";
import Footer from "components/Footer";
import HomeContent from "home/HomeContent";
import UserDetailEditor from "userdetailseditor/UserDetailEditor";

export default function PageRootLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/users/:id" component={UserDetailEditor} />
            <Route path="/user/-1" component={UserDetailEditor} />
          </Switch>
        </div>
        <Footer
          users={[{ id: 1, name: "Hey", gender: "Male", country: "GER" }]}
          onEdit={(id) => alert(id)}
        />
      </div>
    </Router>
  );
}
