import React from "react";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Route, Switch } from "react-router-dom";
import Header from "./components/nav/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
