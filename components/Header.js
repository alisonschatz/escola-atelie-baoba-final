import { Home } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-50 to-yellow-50 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-orange-200/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo e nome */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=128,fit=crop,q=95/YBgp3ZwxQzSMVqMJ/design-sem-nome-9-mxB7QjQyqbFp2GPy.png" 
                alt="Logo Ateliê Baobá"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                <span className="text-orange-600">Ateliê</span> Baobá
              </h1>
              <p className="text-xs text-gray-500 font-medium">Acolhendo com Amor</p>
            </div>
          </div>

          {/* Navegação - sempre visível */}
          <nav className="flex items-center space-x-3 sm:space-x-6 lg:space-x-8">
            <a href="#sobre" className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group text-sm sm:text-base">
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#atividades" className="text-gray-700 hover:text-orange-600 transition-colors font-medium relative group text-sm sm:text-base">
              Atividades
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#depoimentos" className="hidden sm:block text-gray-700 hover:text-orange-600 transition-colors font-medium relative group">
              Depoimentos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contato" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-3 py-2 sm:px-5 sm:py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm whitespace-nowrap border border-orange-400/30"
            >
              ✨ Agende sua Visita
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}