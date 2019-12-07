import React, { useReducer, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Hero from "./pages/hero";
import Login from "./pages/login";
import Register from "./pages/register";
import { initState, listReducer } from "./store/index";

import "./App.css";

export const AppState = createContext([null, () => {}]);
export const UserLogin = createContext([null, () => {}]);

function App() {
  const [state, dispatch] = useReducer(listReducer, initState);
  const [user, setUser] = useState(null);
  console.log("the state of my app");
  console.log(state);
  console.log(`user: ${user}`);
  return (
    <Router>
      <div className="App">
        <UserLogin.Provider value={[user, setUser]}>
          <AppState.Provider value={[state, dispatch]}>
            <Nav />
            <Switch>
              <Route exact path="/">
                <Hero />
              </Route>
              <Route path="/home">
                <Home state={state} />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                {user ? <Redirect to="/" /> : <Login />}
              </Route>
              <Route path="/register">
                {user ? <Redirect to="/" /> : <Register />}
              </Route>
            </Switch>
            <Footer />
          </AppState.Provider>
        </UserLogin.Provider>
      </div>
    </Router>
  );
}

export default App;
