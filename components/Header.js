import { Home, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-gradient-to-r from-orange-50 to-yellow-50 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-orange-200/50">
      <div className="container mx-auto px-2 sm:px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo e nome */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=128,fit=crop,q=95/YBgp3ZwxQzSMVqMJ/design-sem-nome-9-mxB7QjQyqbFp2GPy.png" 
                alt="Logo Ateliê Baobá"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">
                <span className="text-orange-600">Ateliê</span> Baobá
              </h1>
              <p className="text-xs text-gray-500 font-medium hidden sm:block">Acolhendo com Amor</p>
            </div>
          </div>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-shrink-0">
            <a href="#sobre" className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group text-sm lg:text-base">
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#atividades" className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group text-sm lg:text-base">
              Atividades
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group text-sm lg:text-base">
              Depoimentos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contato" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-4 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm whitespace-nowrap border border-orange-400/30"
            >
              ✨ Agende sua Visita
            </a>
          </nav>

          {/* Botão menu mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-orange-100/50 text-orange-600 hover:bg-orange-200/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-orange-200/50">
            <nav className="flex flex-col space-y-3 pt-4">
              <a 
                href="#sobre" 
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-orange-50"
                onClick={closeMenu}
              >
                Sobre
              </a>
              <a 
                href="#atividades" 
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-orange-50"
                onClick={closeMenu}
              >
                Atividades
              </a>
              <a 
                href="#depoimentos" 
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-orange-50"
                onClick={closeMenu}
              >
                Depoimentos
              </a>
              <a 
                href="#contato" 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 text-center mt-2"
                onClick={closeMenu}
              >
                ✨ Agende sua Visita
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}