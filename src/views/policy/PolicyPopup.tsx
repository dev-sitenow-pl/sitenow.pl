import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PolicyPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentInfoString = localStorage.getItem('cookieConsent');
    if (consentInfoString) {
      const consentInfo = JSON.parse(consentInfoString);
      if (!consentInfo || new Date(consentInfo.expiry) < new Date()) {
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    localStorage.setItem('cookieConsent', JSON.stringify({ consent: true, expiry: expiryDate.toISOString() }));
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="policy-popup">
        <p>
          Nasza strona korzysta z plików cookies w celu poprawy jakości świadczonych usług i analizy statystyk odwiedzin.
          Kontynuując korzystanie ze strony, zgadzasz się na ich użycie.

        </p>
        <div className="box-flex ai-center jc-center">
          <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">Polityka prywatności</Link> |
          <Link to="/cookie-policy" target="_blank" rel="noopener noreferrer">Polityka plików Cookies</Link>

        </div>
        <div className="box-flex ai-center jc-center">
          <button onClick={handleAccept}>Akceptuję</button>
        </div>
      </div>
    )
  );
};

export { PolicyPopup };