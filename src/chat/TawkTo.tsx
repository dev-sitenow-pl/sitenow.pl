import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}

const TawkTo: React.FC = () => {
  useEffect(() => {
    // Twój kod z tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/66965a95becc2fed6925d723/1i2tl3mfj'; // <- zamień 'moje_id' na swój unikalny ID z tawk.to
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    return () => {
      // Usunięcie skryptu podczas demontażu komponentu
      const scripts = document.querySelectorAll(`script[src='https://embed.tawk.to/66965a95becc2fed6925d723/1i2tl3mfj']`); // zamień 'moje_id' na swój unikalny ID z tawk.to
      scripts.forEach(script => script && script.remove());
    };
  }, []);

  return null;
};

export { TawkTo };
