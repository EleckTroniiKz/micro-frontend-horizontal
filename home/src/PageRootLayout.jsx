import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "components/Header";
import Footer from "components/Footer";
import HomeContent from "home/HomeContent";
import UserDetailEditor from "userdetailseditor/UserDetailEditor";

export default function PageRootLayout() {
  const FooterURL =
    "https://github.com/EleckTroniiKz/micro-frontend-horizontal";
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header
          titleText={"Horizontal Split"}
          titleURL={"/"}
          secondURL={"/user/-1"}
          secondText={"Add User"}
        />
        <div className="my-10">
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/users/:id" component={UserDetailEditor} />
            <Route path="/user/-1" component={UserDetailEditor} />
          </Switch>
        </div>
        <Footer url={FooterURL} text={"Github Repo"} />
      </div>
    </Router>
  );
}
