import { useEffect } from 'react';
import { Link } from "react-router-dom";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";


function Consent() {
  useEffect(() => {
    if (getCookieConsentValue()) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    } else {
      console.log(getCookieConsentValue());
    }
  });

  return(
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
  )
}

export default Consent
