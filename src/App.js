import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    if (getCookieConsentValue()) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    } else {
      console.log(getCookieConsentValue());
    }
  });

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
      </header>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={(acceptedByScrolling) => {
          if (window.gtag) {
            window.gtag('consent', 'update', {
              'analytics_storage': 'granted'
            });
          }
        }}
      >
        This website uses cookies to understand user behaviour.{' '}
        <Link to='/policy'>Policy</Link>
      </CookieConsent>
    </div>
  );
}

export default App;
