import { BannerLP } from "../../BannerLP";
import { PromoBanner } from "../../PromoSierpien/PromoBanner";
import { About } from "../../Sections/About";
import { Offer } from "../../Sections/Offer";
import { Portfolio } from "../../Sections/Portfolio";
import { Workline } from "../../Sections/Workline";

const Frontend = () => {
  return <>
    <BannerLP />
    <Offer />
    <Workline />
    <PromoBanner />
    <Portfolio />
    <About />
  </>;
}

export { Frontend };