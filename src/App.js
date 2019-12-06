import React, { useReducer, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  const [state, dispatch] = useReducer(listReducer, initState);
  console.log(state);
  return (
    <Router>
      <div className="App">
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
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
          <Footer />
        </AppState.Provider>
      </div>
    </Router>
  );
}

export default App;
