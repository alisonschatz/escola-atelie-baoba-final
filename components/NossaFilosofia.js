export default function NossaFilosofia() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-500 text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo animados */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-yellow-200 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-sm animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg animate-fade-in">
            Nossa <span className="text-yellow-200">Filosofia</span>
          </h2>
          <p className="text-lg md:text-xl opacity-95 max-w-4xl mx-auto leading-relaxed text-shadow">
            Na Escola Ateliê Baobá, acreditamos que cada criança é única e merece um ambiente 
            acolhedor onde possa explorar, criar e descobrir o mundo ao seu próprio ritmo.
          </p>
        </div>

        {/* Grid com layout inspirado na imagem - MAIS ANIMADO */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Artes */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div 
                className="w-80 h-60 mx-auto rounded-full overflow-hidden transform rotate-12 shadow-2xl transition-all duration-700 group-hover:rotate-[24deg] group-hover:scale-110 hover:shadow-3xl"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop" 
                  alt="Criança pintando"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Linha pontilhada conectora animada */}
              <div className="hidden md:block absolute top-1/2 -right-16 w-32">
                <svg className="w-full h-4" viewBox="0 0 100 20">
                  <path
                    d="M5,10 Q50,5 95,10"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    opacity="0.7"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:text-yellow-200">Artes</h3>
            <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:translate-y-2">
              Através das artes visuais, música, dança, literatura e teatro, as crianças 
              desenvolvem habilidades essenciais como imaginação, simbolismo, criatividade e pesquisa.
            </p>
          </div>

          {/* Acolhimento */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div 
                className="w-80 h-60 mx-auto rounded-full overflow-hidden transform -rotate-6 shadow-2xl transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110 hover:shadow-3xl"
                style={{
                  borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop" 
                  alt="Bebê sorrindo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Linha pontilhada conectora animada */}
              <div className="hidden md:block absolute top-1/2 -right-16 w-32">
                <svg className="w-full h-4" viewBox="0 0 100 20">
                  <path
                    d="M5,10 Q50,15 95,10"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    opacity="0.7"
                    className="animate-pulse"
                    style={{animationDelay: '0.5s'}}
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:text-yellow-200">Acolhimento</h3>
            <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:translate-y-2">
              Sabemos da importância do amor e por isso priorizamos o afeto para o 
              desenvolvimento saudável das crianças na escola.
            </p>
          </div>

          {/* Alimentação */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div 
                className="w-80 h-60 mx-auto rounded-full overflow-hidden transform rotate-6 shadow-2xl transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 hover:shadow-3xl"
                style={{
                  borderRadius: '70% 30% 40% 60% / 30% 60% 70% 40%'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop" 
                  alt="Crianças cozinhando"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:text-yellow-200">Alimentação</h3>
            <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:translate-y-2">
              Alimentos orgânicos e sem açúcar são as principais escolhas na hora de 
              criarmos nosso cardápio.
            </p>
          </div>
        </div>

        {/* Segunda linha */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Ar Livre */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div 
                className="w-80 h-60 mx-auto rounded-full overflow-hidden transform -rotate-12 shadow-2xl transition-all duration-700 group-hover:-rotate-[24deg] group-hover:scale-110 hover:shadow-3xl"
                style={{
                  borderRadius: '50% 50% 30% 70% / 30% 70% 50% 50%'
                }}
              >
                <img 
                  src="https://escolaexperimental.com.br/wp-content/uploads/2024/05/Escola_Experimental_Escola_Construtivista_em_salvador_Natureza_na_educacao_infantil.png" 
                  alt="Criança brincando ao ar livre"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Linha pontilhada conectora animada */}
              <div className="hidden md:block absolute top-1/2 -right-16 w-32">
                <svg className="w-full h-4" viewBox="0 0 100 20">
                  <path
                    d="M5,10 Q50,5 95,10"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    opacity="0.7"
                    className="animate-pulse"
                    style={{animationDelay: '1s'}}
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:text-yellow-200">Ar Livre</h3>
            <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:translate-y-2">
              Desde o berçário, priorizamos essa prática, desafiando os pequenos a 
              vivenciarem o mundo além das paredes.
            </p>
          </div>

          {/* Natureza */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div 
                className="w-80 h-60 mx-auto rounded-full overflow-hidden transform rotate-3 shadow-2xl transition-all duration-700 group-hover:rotate-6 group-hover:scale-110 hover:shadow-3xl"
                style={{
                  borderRadius: '60% 40% 60% 40% / 70% 30% 70% 30%'
                }}
              >
                <img 
                  src="https://escoladainteligencia.com.br/wp-content/uploads/2021/02/5-beneficios-de-praticar-atividades-ao-ar-livre-com-as-criancas-Blog.jpg" 
                  alt="Crianças em atividades na natureza"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Linha pontilhada conectora animada */}
              <div className="hidden md:block absolute top-1/2 -right-16 w-32">
                <svg className="w-full h-4" viewBox="0 0 100 20">
                  <path
                    d="M5,10 Q50,15 95,10"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    opacity="0.7"
                    className="animate-pulse"
                    style={{animationDelay: '1.5s'}}
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:text-yellow-200">Natureza</h3>
            <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:translate-y-2">
              O contato com a natureza começa com nossos brinquedos feitos de 
              madeira e tecido, substituindo o plástico, além de brincar mais ao ar livre.
            </p>
          </div>

          {/* Pedagógico */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div 
                className="w-80 h-60 mx-auto rounded-full overflow-hidden transform -rotate-3 shadow-2xl transition-all duration-700 group-hover:-rotate-6 group-hover:scale-110 hover:shadow-3xl"
                style={{
                  borderRadius: '40% 60% 50% 50% / 60% 40% 70% 30%'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop" 
                  alt="Educadora com criança"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:text-yellow-200">Pedagógico</h3>
            <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:translate-y-2">
              Pedagoga e mestre em educação, nossa diretora Alessandra é a força 
              por trás da metodologia inovadora que guia nossa escola.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}