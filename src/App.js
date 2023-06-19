import logo from './logo.png';
import './App.css';
import { Link } from "react-router-dom";
import Consent from './Consent';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  useEffect(() => {
    const num = location.pathname.split('/')[1];
    const page = num ? `number ${num}` : `home`;
    document.title =  `GA Sample page ${page}`;
  }, [location]);

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Google analytics test site
        </p>
        <Link to='/one'>One</Link>
        <Link to='/two'>Two</Link>
        <Link to='/three'>Three</Link>
        <Link to='/policy'>Privacy Policy</Link>
      </header>
      <Consent/>
    </div>
  );
}

export default App;
