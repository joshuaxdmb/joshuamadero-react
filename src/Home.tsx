import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

import Header from './components/Header'
import Info from './components/Info'
import Skills from './components/Skills'
import Portfolio from './components/PortfolioSummary'
import Footer from './components/Footer'
import { initScrollToTop } from './utils/mobileNav'
import { initScrollspy } from './utils/scrollspy'

const Index: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })

    initMobileNav()
    initScrollToTop()
    initScrollspy()
  }, [])

  return (
    <>
      <Header />
      <main id='main'>
        <Info />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Index
