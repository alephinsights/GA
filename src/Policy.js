import './App.css';
import { Link } from "react-router-dom";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";



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
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="cookieconsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={(acceptedByScrolling) => {
          if (window.gtag) {
            console.log('setting gtag');
            window.gtag('consent', 'update', {
              'analytics_storage': 'granted'
            });
          }
        }}
      >
        This website uses cookies to understand user behaviour.{" "}
      </CookieConsent>
    </div>
  );
}

export default Policy;
