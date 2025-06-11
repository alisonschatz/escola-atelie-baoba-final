'use client'

import { Phone, Calendar, MessageCircle } from 'lucide-react'

export default function ContatoSection() {
  const handleContactSubmit = () => {
    alert('Obrigado pelo interesse! Em breve entraremos em contato. 📞✨')
  }

  const handleWhatsAppClick = () => {
    // Número real do WhatsApp da escola
    const phoneNumber = '555180382024' // Formato: 55 + DDD + número
    const message = 'Olá! Gostaria de agendar uma visita para conhecer o Ateliê Baobá! 🌱✨'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contato" className="py-12 bg-gradient-to-br from-orange-600 to-yellow-500 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white text-shadow-lg">
            Venha nos <span className="text-yellow-200">Conhecer</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-white text-shadow">
            Agende sua visita e conheça nossa proposta pedagógica única! ✨
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Horários discretos */}
          <div className="bg-white/90 rounded-xl p-3 shadow-md mb-6 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="text-center">
                <p className="text-gray-500 text-xs">Funcionamento</p>
                <p className="font-semibold text-gray-700 text-sm">Seg-Sex: 7h30-18h30</p>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="text-center">
                <p className="text-gray-500 text-xs">Visitas</p>
                <p className="font-semibold text-gray-700 text-sm">Com agendamento</p>
              </div>
            </div>
          </div>

          {/* Opções de contato */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Formulário */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                  Formulário Completo
                </h3>
                <p className="text-gray-600 text-sm">
                  Resposta <strong className="text-orange-600">em até 24h</strong>
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 text-xs font-semibold mb-1">
                      Nome dos Pais *
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 placeholder-gray-500 focus:outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-semibold mb-1">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      placeholder="(51) 99999-9999"
                      className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 placeholder-gray-500 focus:outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 text-xs font-semibold mb-1">
                      Nome da Criança *
                    </label>
                    <input
                      type="text"
                      placeholder="Nome do pequeno(a)"
                      className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 placeholder-gray-500 focus:outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-semibold mb-1">
                      Idade da Criança *
                    </label>
                    <select className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 focus:outline-none transition-all text-sm">
                      <option value="">Selecione</option>
                      <option value="0-6meses">0 a 6 meses</option>
                      <option value="6-12meses">6m a 1 ano</option>
                      <option value="1-2anos">1 a 2 anos</option>
                      <option value="2-3anos">2 a 3 anos</option>
                      <option value="3-4anos">3 a 4 anos</option>
                      <option value="4-5anos">4 a 5 anos</option>
                      <option value="5-6anos">5 a 6 anos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-xs font-semibold mb-1">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    placeholder="Suas expectativas..."
                    rows={2}
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 placeholder-gray-500 focus:outline-none resize-none transition-all text-sm"
                  ></textarea>
                </div>

                <button
                  onClick={handleContactSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Enviar Solicitação</span>
                </button>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-2 text-center">
                  <p className="text-green-800 text-xs font-medium">
                    ✅ <strong>Resposta garantida</strong> • 🔒 <span className="text-green-600">Dados seguros</span>
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-500 flex flex-col">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  WhatsApp Direto
                </h3>
                <p className="text-gray-600 text-sm">
                  Fale <strong className="text-green-600">agora mesmo</strong> conosco!
                </p>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 mb-4 text-center border border-green-100 flex-1">
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center">
                      <div className="text-xl mb-1">📱</div>
                      <p className="text-xs text-green-700 font-medium">Resposta<br/>Imediata</p>
                    </div>
                    <div className="text-center">
                      <div className="text-xl mb-1">🕒</div>
                      <p className="text-xs text-green-700 font-medium">Seg-Sex<br/>8h às 18h</p>
                    </div>
                    <div className="text-center">
                      <div className="text-xl mb-1">💬</div>
                      <p className="text-xs text-green-700 font-medium">Dúvidas<br/>na Hora</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/70 rounded-lg p-2 border border-green-200">
                    <p className="text-green-800 font-semibold text-sm">
                      📞 (51) 8038-2024
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg flex items-center justify-center space-x-2 mb-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar no WhatsApp</span>
                </button>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-2 text-center">
                  <p className="text-yellow-800 text-xs font-medium">
                    ⚡ <strong>Instantâneo</strong> • 🔒 <span className="text-yellow-700">Seguro</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Texto adicional */}
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 max-w-xl mx-auto border border-white/30">
              <p className="text-white font-medium mb-1">
                💙 Escolha a forma mais <strong className="text-yellow-200">conveniente</strong> para você!
              </p>
              <p className="text-white/90 text-sm">
                Estamos prontos para recebê-los ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}