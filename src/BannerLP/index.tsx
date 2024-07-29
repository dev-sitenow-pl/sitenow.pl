import { CTABtns } from '../CTA/CTABtns';
import { PromoHero } from '../PromoSierpien/PromoHero';
import './BannerLP.scss'

const BannerLP = () => {
  return <section className="banner">
    <div className="banner__body">
      <div className="flex-row box-flex ai-center jc-center">
        <div className="colflex-12">
          <div className="banner__body__monitor">
            <img src="images/new/monitor.webp" alt="" />
            <div className="banner-box-txt">

              <h1>Koduję jakość na <span>Twojej stronie</span></h1>
              <h3><span>Front-end</span> dla Twojej strony:<br /> użyteczny, zachwycający i… taki, jakiego potrzebujesz.<br />
                <span>Twoja strona</span> zasługuje na <span>najlepsze</span>
              </h3>
              <div className="banner-box-txt__cta">
                <CTABtns />
              </div>
            </div>
            <PromoHero />
          </div>
        </div>
      </div>
    </div>
  </section>
}

export { BannerLP };