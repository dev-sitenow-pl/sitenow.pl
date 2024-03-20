import { TargetScroll } from '../Sections/TargetScroll'
import { SectionTitle } from '../Sections/SectionTitle'

import './Contact.scss'

const Contact = () => {
  return <footer>
    <TargetScroll targetId='contact' />
    <svg className='footer__svg-bgd' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <pattern id='a' patternUnits='userSpaceOnUse' width='40' height='69.282' patternTransform='scale(5) rotate(0)'>
          <rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)' />
          <path
            d='M13.333-3.849v23.094M6.667-15.396l20 11.547M13.333-19.245l20 11.547M20 0v23.094m20-34.641l-6.667 3.849-6.666 3.849L20 0M0-11.547l6.667 3.849 6.666 3.849L20 0m0-23.094l20 11.547v23.094L20 23.094l-6.667-3.849-6.666-3.849L0 11.547v-23.094l6.667-3.849 6.666-3.849zM40-3.769L20 7.698m20-3.849l-16.253 9.384L20 15.396M6.667-7.698v23.094m6.666 50.037v23.094M6.667 53.886l20 11.547M13.333 50.037l20 11.547M20 69.282v23.094m20-34.641l-6.667 3.849-6.666 3.849L20 69.282M0 57.735l6.667 3.849 6.666 3.849L20 69.282m0-23.094l20 11.547v23.094L20 92.376l-6.667-3.849-6.666-3.849L0 80.829V57.735l6.667-3.849 6.666-3.849zm20 19.325L20 76.98m20-3.849L20 84.678M6.667 61.584v23.094m26.666-53.886v23.094m-6.666-34.641l20 11.547M33.333 15.396l20 11.547M40 34.641v23.094m20-34.641l-6.667 3.849-6.666 3.849L40 34.641M20 23.094l6.667 3.849 6.666 3.849L40 34.641m0-23.094l20 11.547v23.094L40 57.735l-6.667-3.849-6.666-3.849L20 46.188V23.094l6.667-3.849 6.666-3.849zm20 19.325L40 42.339m20-3.849L40 50.037M26.667 26.943v23.094M-6.667 30.792v23.094m-6.666-34.641l20 11.547M-6.667 15.396l20 11.547M0 34.641v23.094m20-34.641l-6.667 3.849-6.666 3.849L0 34.641m-20-11.547l6.667 3.849 6.666 3.849L0 34.641m0-23.094l20 11.547v23.094L0 57.735l-6.667-3.849-6.666-3.849L-20 46.188V23.094l6.667-3.849 6.666-3.849zm20 19.325L0 42.339m20-3.849L0 50.037m-13.333-23.094v23.094'
            stroke-width='0.5' stroke='hsla(0, 0%, 100%, 0.14)' fill='none' />
        </pattern>
      </defs>
      <rect width='800%' height='800%' transform='translate(-30,-47.82)' fill='url(#a)' />
    </svg>
    <SectionTitle>
      <span>Skontaktuj</span> się ze mną
    </SectionTitle>
    <div className="footer__contact no-form">
      <div className="box">
        Wyślij e-maila na:
        <a href="mailto:biuro@sitenow.pl" title="Wyślij wiadomość do sitenow.pl">biuro@sitenow.pl</a>
      </div>
      <div className="box">lub</div>
      <div className="box">
        Zadzwoń pod numer:
        <a href="tel:+48535606164">535 606 164</a>
      </div>
    </div>
  </footer>
}

export { Contact };