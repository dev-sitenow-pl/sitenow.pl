import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header'
import { BannerLP } from './BannerLP'
import { Sections } from './Sections'
import { LicenseAnnotation } from './LicenseAnnotation'
import { Contact } from './Contact'

ReactDOM.createRoot(document.getElementById('start')!).render(
  <React.StrictMode>
    <Header />
    <BannerLP />
    <Sections />
    <Contact />
    <LicenseAnnotation />
  </React.StrictMode>,
)
