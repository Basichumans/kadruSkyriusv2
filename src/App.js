
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home.js';
import Films from './components/Films';
import Ads from './components/Ads';
import Info from './components/Info';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/films' component element={<Films />} />
          <Route path='/ads' element={<Ads />} />
          <Route path='/info' component element={<Info />} />
        </Routes>


      </Router>
    </div>
  );
}

export default App;
