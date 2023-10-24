import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggalCvModal } from './actions/AppAction';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';

import MainHeader from './components/MainHeader';
import Home from './pages/Home';
import About from './pages/About';
// import Portfolio from './pages/Portfolio';
import CvModal from './components/CvModal';
import AppBackground from './components/AppBackground';
import LinksBar from './components/LinksBar';
import Experience from './pages/Experience';

import getDeveloper from './services/DataService'
import { DeveloperContext } from './context/DeveloperContext';


library.add(fab)

const history = createBrowserHistory();

const App = (props) => {
  const { isCvModalOpen, isMenuOpen } = props
  const [developer, setDeveloper] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {

    const loadDeveloper = async () => {
      const currDev = await getDeveloper();
      setDeveloper(currDev);
    }

    if (!developer) loadDeveloper();
  }, [props, dispatch, developer])

  return (

    <div className="App">
      <Router history={history} >
        <DeveloperContext.Provider value={developer}>
          {developer && (<div className="heder-in-app"><MainHeader isMenuOpen={isMenuOpen} /></div>)}
          <div className="linksbar-wrapper">
            <LinksBar />
          </div>
          {isCvModalOpen ? (<div className="screen" onClick={() => dispatch(toggalCvModal())}></div>) : ''}
          {isCvModalOpen ? <CvModal /> : ''}
          <AppBackground />
          <Routes>
            <Route path="/rotem-patrakeev-portfolio" exact element={<Home />} />
            <Route path="/rotem-patrakeev-portfolio/About" exact element={<About />} />
            <Route path='/rotem-patrakeev-portfolio/Experience' exact element={<Experience />} />
            {/* <Route path="/Portfolio" exact element={<Portfolio />} /> */}
          </Routes>
        </DeveloperContext.Provider>
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isCvModalOpen: state.app.isCvModalOpen,
    isMenuOpen: state.app.isMenuOpen
  }
}

export default connect(mapStateToProps)(App)
