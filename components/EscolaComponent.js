'use client'

import { useState, useEffect } from 'react'
import { ChevronUp, MessageCircle, Phone, Instagram } from 'lucide-react'
import Header from './Header'
import HeroSection from './HeroSection'
import NossaFilosofia from './NossaFilosofia'
import InstagramSection from './InstagramSection'
import AtividadesSection from './AtividadesSection'
import DepoimentosSection from './DepoimentosSection'
import ContatoSection from './ContatoSection'
import Footer from './Footer'

export default function EscolaAtelieBaoba() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [autoHideTimer, setAutoHideTimer] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-hide após 3 segundos
  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setIsExpanded(false)
      }, 3000)
      setAutoHideTimer(timer)
      
      return () => {
        if (timer) clearTimeout(timer)
      }
    }
  }, [isExpanded])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
    if (autoHideTimer) {
      clearTimeout(autoHideTimer)
      setAutoHideTimer(null)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const openWhatsApp = () => {
    const phoneNumber = '555180382024' // Número correto
    const message = encodeURIComponent('Olá! Gostaria de agendar uma visita na Escola Ateliê Baobá. 😊')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    setIsExpanded(false) // Recolhe após usar
  }

  const openInstagram = () => {
    window.open('https://www.instagram.com/ateliebaobaeducacaoinfantil/', '_blank')
    setIsExpanded(false) // Recolhe após usar
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Header />
      <HeroSection />
      <NossaFilosofia />
      <InstagramSection />
      <AtividadesSection />
      <DepoimentosSection />
      <ContatoSection />
      <Footer />
      
      {/* Botões flutuantes com sistema de expansão */}
      <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40">
        <div className="flex flex-col space-y-2 sm:space-y-3 items-end">
          {/* Botão Instagram - aparece quando expandido */}
          <button
            onClick={openInstagram}
            className={`bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-2 sm:p-3 rounded-full shadow-md sm:shadow-lg transition-all duration-500 transform hover:scale-110 group relative ${
              isExpanded 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-12 sm:translate-x-16 opacity-0 scale-75 pointer-events-none'
            }`}
            aria-label="Siga-nos no Instagram"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Siga-nos no Instagram
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-3 sm:border-4 border-transparent border-l-gray-800"></div>
            </div>
          </button>

          {/* Botão WhatsApp - aparece quando expandido */}
          <button
            onClick={openWhatsApp}
            className={`bg-green-500 hover:bg-green-600 text-white p-2 sm:p-3 rounded-full shadow-md sm:shadow-lg transition-all duration-500 transform hover:scale-110 group relative ${
              isExpanded 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-12 sm:translate-x-16 opacity-0 scale-75 pointer-events-none'
            }`}
            aria-label="Fale conosco no WhatsApp"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Fale conosco no WhatsApp
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-3 sm:border-4 border-transparent border-l-gray-800"></div>
            </div>
          </button>

          {/* Botão Scroll to Top - aparece automaticamente quando rola OU quando expandido (mas só se rolou) */}
          <button
            onClick={scrollToTop}
            className={`bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white p-2 sm:p-3 rounded-full shadow-md sm:shadow-lg transition-all duration-500 transform hover:scale-110 group relative ${
              showScrollTop
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-12 sm:translate-x-16 opacity-0 scale-75 pointer-events-none'
            }`}
            aria-label="Voltar ao topo"
          >
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Voltar ao topo
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-3 sm:border-4 border-transparent border-l-gray-800"></div>
            </div>
          </button>

          {/* Botão dos três pontinhos - sempre visível */}
          <button
            onClick={toggleExpand}
            className="bg-white/90 backdrop-blur-sm hover:bg-white border border-orange-200 hover:border-orange-300 text-orange-600 p-2 sm:p-3 rounded-full shadow-md sm:shadow-lg transition-all duration-300 transform hover:scale-110 group relative"
            aria-label="Expandir opções de contato"
          >
            {/* Três pontinhos com animação */}
            <div className={`flex flex-col space-y-1 sm:space-y-1.5 items-center justify-center w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}>
              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full transition-all duration-300 ${isExpanded ? 'scale-125' : 'scale-100'}`}></div>
              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full transition-all duration-300 delay-75 ${isExpanded ? 'scale-125' : 'scale-100'}`}></div>
              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full transition-all duration-300 delay-150 ${isExpanded ? 'scale-125' : 'scale-100'}`}></div>
            </div>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-2 sm:mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {isExpanded ? 'Recolher menu' : 'Opções de contato'}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-3 sm:border-4 border-transparent border-l-gray-800"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}