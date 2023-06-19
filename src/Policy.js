import './App.css';
import { Link } from "react-router-dom";
import Consent from './Consent';



function Policy() {

  return (
    <div className="Policy">
      <header className="App-header">
        <p>
          Cookie Policy here...
        </p>
        <Link to='/one'>One</Link>
        <Link to='/two'>Two</Link>
        <Link to='/three'>Three</Link>
      </header>
      <Consent />
    </div>
  );
}

export default Policy;
