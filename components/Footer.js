import { Phone, Mail, MapPin, Users, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Seção principal - Layout horizontal */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-4">
          {/* Logo e descrição */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=128,fit=crop,q=95/YBgp3ZwxQzSMVqMJ/design-sem-nome-9-mxB7QjQyqbFp2GPy.png" 
                alt="Logo Ateliê Baobá"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Escola Ateliê Baobá</h3>
              <p className="text-orange-300 text-sm">Acolhendo com Amor</p>
            </div>
          </div>

          {/* Informações de contato - Layout horizontal */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            {/* Telefone */}
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-green-400" />
              <div>
                <a href="tel:+5551999999999" className="text-gray-300 hover:text-orange-300 transition-colors font-medium">
                  (51) 9999-9999
                </a>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-blue-400" />
              <div>
                <a href="mailto:contato@ateliebaoba.com.br" className="text-gray-300 hover:text-orange-300 transition-colors font-medium">
                  contato@ateliebaoba.com.br
                </a>
              </div>
            </div>

            {/* Endereço */}
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-red-400" />
              <div>
                <span className="text-gray-300 font-medium">São Leopoldo/RS</span>
              </div>
            </div>

            {/* Faixa Etária */}
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-purple-400" />
              <div>
                <span className="text-gray-300 font-medium">0 a 6 anos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória e informações finais */}
        <div className="border-t border-gray-700 pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-center md:text-left">
              <Heart className="w-4 h-4 mr-2 text-orange-300 fill-current" />
              <span className="text-gray-400 text-xs">
                © 2025 Escola Ateliê Baobá • Educação com amor desde 2020
              </span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs">
              <div className="text-center">
                <span className="text-orange-300 font-bold">+500</span>
                <span className="text-gray-400 ml-1">famílias</span>
              </div>
              <div className="text-center">
                <span className="text-orange-300 font-bold">5 anos</span>
                <span className="text-gray-400 ml-1">experiência</span>
              </div>
              <div className="text-center">
                <span className="text-orange-300">⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}