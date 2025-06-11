'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import Header from './Header'
import HeroSection from './HeroSection'
import NossaFilosofia from './NossaFilosofia'
import AtividadesSection from './AtividadesSection'
import DepoimentosSection from './DepoimentosSection'
import ContatoSection from './ContatoSection'
import Footer from './Footer'

export default function EscolaAtelieBaoba() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão quando sair do header (aprox. 100px)
      setShowScrollTop(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Header />
      <HeroSection />
      <NossaFilosofia />
      <AtividadesSection />
      <DepoimentosSection />
      <ContatoSection />
      <Footer />
      
      {/* Botão Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform ${
          showScrollTop 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  )
}