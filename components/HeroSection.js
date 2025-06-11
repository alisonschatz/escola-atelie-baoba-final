'use client'

import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=600&fit=crop"
  ]

  // Auto-slide para hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length])
  
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Escola ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay com gradiente mais suave */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70"></div>
          </div>
        ))}
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl">
          {/* Título principal estilo handwriting */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-shadow-lg" style={{fontFamily: 'cursive'}}>
            <span className="text-orange-400">Ateliê Baobá</span>
          </h1>
          
          {/* Subtítulo institucional */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-white text-shadow">
            Escola de Educação Infantil
          </h2>
          
          {/* Descrição principal */}
          <div className="mb-8 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-shadow mb-6">
              Um ateliê de descobertas, onde o brincar livre, as 
              <span className="text-yellow-300 font-semibold"> artes </span>
              e a 
              <span className="text-yellow-300 font-semibold"> alimentação saudável </span>
              são{' '}
              <span className="relative inline-block text-yellow-300 font-bold text-xl md:text-2xl">
                prioridades
                <svg className="absolute -bottom-1 left-0 w-full h-4" viewBox="0 0 120 16" fill="none">
                  <path d="M2 12c8-3 16-1 24 1c12 3 20-2 32 0c8 1 16-2 24 1c10 2 18-1 26 1c6 1 10-1 12 0" 
                        stroke="#FDE047" 
                        strokeWidth="5" 
                        fill="none" 
                        strokeLinecap="round"
                        className="animate-pulse"/>
                </svg>
              </span>.
            </p>
          </div>

          {/* Frase de destaque */}
          <div className="text-lg md:text-xl lg:text-2xl">
            <span className="font-bold text-white">Acolhendo com Amor</span>
            <span className="text-gray-200"> crianças e bebês de </span>
            <span className="font-bold text-yellow-300">0 a 6 anos</span>.
          </div>
        </div>
      </div>

      {/* Slide Indicators - mais elegantes */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 h-3 bg-white rounded-full' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}