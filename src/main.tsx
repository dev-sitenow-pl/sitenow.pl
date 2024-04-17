import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header'
import { BannerLP } from './BannerLP'
import { Sections } from './Sections'
import { LicenseAnnotation } from './LicenseAnnotation'
import { Contact } from './Contact'

import { Offer } from './Sections/Offer'
import { Workline } from './Sections/Workline'
import { About } from './Sections/About'
import { Opinions } from './Sections/Opinions'
import { FAQ } from './Sections/FAQ'


import './main.scss'
import './core-flex.scss'


ReactDOM.createRoot(document.getElementById('start')!).render(
  <React.StrictMode>
    <Header />
    <BannerLP />
    <Sections>
      <Offer />
      <Workline />
      <About />
      <Opinions />
      <FAQ />
    </Sections>
    <Contact />
    <LicenseAnnotation />
  </React.StrictMode>,
)
