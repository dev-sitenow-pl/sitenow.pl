import { Route, Routes } from "react-router-dom";
import { Frontend } from "./views/lp/Frontend";
import { PortfolioSite } from "./views/potrfolio/PortfolioSite";
import { Header } from "./Header";
import { Contact } from "./Contact";
import { LicenseAnnotation } from "./LicenseAnnotation";
import { Sections } from "./Sections";
import { FAQ } from "./Sections/FAQ";
import { Opinions } from "./Sections/Opinions";
import { CookiePolicy } from "./views/policy/cookie";
import { PrivacyPolicy } from "./views/policy/privacy";
import { PolicyPopup } from "./views/policy/PolicyPopup";
import { TawkTo } from "./chat/TawkTo";


const App = () => {
  return <>
    <Header />
    <Sections>
      <Routes>
        <Route path="/" element={<Frontend />} />
        <Route path="/portfolio" element={<PortfolioSite />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <Opinions />
      <FAQ />
    </Sections>
    <Contact />
    <Routes>
      <Route path="/portfolio" element={<LicenseAnnotation />} />
    </Routes>
    <PolicyPopup />
    <TawkTo />
  </>
}

export { App };