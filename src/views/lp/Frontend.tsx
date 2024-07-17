import { BannerLP } from "../../BannerLP";
import { About } from "../../Sections/About";
import { Offer } from "../../Sections/Offer";
import { Workline } from "../../Sections/Workline";

const Frontend = () => {
  return <>
    <BannerLP />
    <Offer />
    <Workline />
    <About />
  </>;
}

export { Frontend };