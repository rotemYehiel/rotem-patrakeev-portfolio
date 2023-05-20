import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadDeveloper } from './actions/DataAction';
import { toggalCvModal } from './actions/AppAction';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';

import MainHeader from './components/MainHeader';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import CvModal from './components/CvModal';
import AppBackground from './components/AppBackground';
import LinksBar from './components/LinksBar';
import Experience from './pages/Experience';

library.add(fab)

const history = createBrowserHistory();

const App = (props) => {
  const { developer, isCvModalOpen, isMenuOpen } = props
  const dispatch = useDispatch()

  useEffect(() => {

    const getUser = () => {
      dispatch(loadDeveloper())
    }
    getUser();
  }, [props, dispatch])

  console.log(developer);
  return (

    <div className="App">
      <Router history={history} >
        {developer ? (<div className="heder-in-app"><MainHeader developer={developer} isMenuOpen={isMenuOpen} /></div>) : ''}
        <div className="linksbar-wrapper">
          <LinksBar />
        </div>
        {isCvModalOpen ? (<div className="screen" onClick={() => dispatch(toggalCvModal())}></div>) : ''}
        {isCvModalOpen ? <CvModal /> : ''}
        <AppBackground />
        <Routes>
          <Route path="/rotem-patrakeev-portfolio" exact element={<Home developer={developer} />} />
          <Route path="/rotem-patrakeev-portfolio/About" exact element={<About />} />
          <Route path='/rotem-patrakeev-portfolio/Experience' exact element={<Experience />} />
          {/* <Route path="/Portfolio" exact element={<Portfolio />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    developer: state.data.developerDetails,
    isCvModalOpen: state.app.isCvModalOpen,
    isMenuOpen: state.app.isMenuOpen
  }
}

export default connect(mapStateToProps)(App)
