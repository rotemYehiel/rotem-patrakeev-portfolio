import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./App.css";

import MainHeader from "./components/MainHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import AppBackground from "./components/AppBackground";
import LinksBar from "./components/LinksBar";
import Experience from "./pages/Experience";

import getDeveloper from "./services/DataService";
import { DeveloperContext } from "./context/DeveloperContext";

library.add(fab);

const history = createBrowserHistory();

const App = (props) => {
  const { isMenuOpen } = props;
  const [developer, setDeveloper] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadDeveloper = async () => {
      const currDev = await getDeveloper();
      setDeveloper(currDev);
    };

    if (!developer) loadDeveloper();
  }, [props, dispatch, developer]);

  return (
    <div className="App">
      <Router history={history}>
        <DeveloperContext.Provider value={developer}>
          {developer && (
            <div className="heder-in-app">
              <MainHeader isMenuOpen={isMenuOpen} />
            </div>
          )}
          <div className="linksbar-wrapper">
            <LinksBar />
          </div>
          <AppBackground />
          <Routes>
            <Route path="/rotem-patrakeev-portfolio" exact element={<Home />} />
            <Route
              path="/rotem-patrakeev-portfolio/About"
              exact
              element={<About />}
            />
            <Route
              path="/rotem-patrakeev-portfolio/Experience"
              exact
              element={<Experience />}
            />
          </Routes>
        </DeveloperContext.Provider>
      </Router>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.app.isMenuOpen,
  };
};

export default connect(mapStateToProps)(App);
