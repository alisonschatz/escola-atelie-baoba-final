'use client'

import { Phone, Calendar } from 'lucide-react'

export default function ContatoSection() {
  const handleContactSubmit = () => {
    alert('Obrigado pelo interesse! Em breve entraremos em contato. 📞✨')
  }

  return (
    <section id="contato" className="py-16 bg-gradient-to-br from-orange-600 to-yellow-500 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow-lg">
            Venha nos <span className="text-yellow-200">Conhecer</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white text-shadow">
            Agende sua visita e conheça nossa proposta pedagógica única! ✨
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Horários discretos */}
          <div className="bg-white/90 rounded-xl p-4 shadow-md mb-8 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="text-center">
                <p className="text-gray-500 text-xs">Funcionamento</p>
                <p className="font-semibold text-gray-700">Seg-Sex: 7h30-18h30</p>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-center">
                <p className="text-gray-500 text-xs">Visitas</p>
                <p className="font-semibold text-gray-700">Com agendamento</p>
              </div>
            </div>
          </div>

          {/* Formulário centralizado */}
          <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-orange-600 mb-3 flex items-center justify-center">
                    <Calendar className="w-7 h-7 mr-3" />
                    Agende sua Visita
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Preencha os dados e entraremos em contato <strong className="text-orange-600">em até 24h</strong>
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Nome dos Pais *
                      </label>
                      <input
                        type="text"
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 text-gray-800 placeholder-gray-500 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        placeholder="(51) 99999-9999"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 text-gray-800 placeholder-gray-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Nome da Criança *
                      </label>
                      <input
                        type="text"
                        placeholder="Nome do pequeno(a)"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 text-gray-800 placeholder-gray-500 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Idade da Criança *
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 text-gray-800 focus:outline-none transition-all">
                        <option value="">Selecione a idade</option>
                        <option value="0-6meses">0 a 6 meses</option>
                        <option value="6-12meses">6 meses a 1 ano</option>
                        <option value="1-2anos">1 a 2 anos</option>
                        <option value="2-3anos">2 a 3 anos</option>
                        <option value="3-4anos">3 a 4 anos</option>
                        <option value="4-5anos">4 a 5 anos</option>
                        <option value="5-6anos">5 a 6 anos</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      E-mail (opcional)
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 text-gray-800 placeholder-gray-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Mensagem (opcional)
                    </label>
                    <textarea
                      placeholder="Conte-nos suas expectativas ou dúvidas..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 text-gray-800 placeholder-gray-500 focus:outline-none resize-none transition-all"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleContactSubmit}
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Agendar Visita</span>
                  </button>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                    <p className="text-green-800 text-sm">
                      ✅ <strong>Resposta em até 24h</strong> • 🔒 Dados seguros
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}