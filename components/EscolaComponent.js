'use client'

import { useState, useEffect } from 'react'
import { Heart, Star, Phone, Mail, MapPin, Users, Palette, Utensils, Home, ChevronLeft, ChevronRight } from 'lucide-react'

export default function EscolaAtelieBaoba() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const heroImages = [
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=600&fit=crop"
  ]

  const testimonials = [
    {
      name: "Fernanda Pauletto",
      text: "A Escola Ateliê Baobá tem nossa admiração, indicamos de olhos fechados pois sua proposta de acolhimento, afeto e brincar livre é respeitada. Para começar, a adaptação do nosso filho foi participativa e gradual, no tempo dele e nosso. Temos muita confiança nesta equipe e somos muito gratos por nos proporcionarem esta experiência de escola para o nosso pequeno.",
      rating: 5,
      avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=48,h=48,fit=crop/YBgp3ZwxQzSMVqMJ/design-sem-nome-21-d95g7ObjWZuK36aK.png"
    },
    {
      name: "Manoela Neves",
      text: "No dia da visita já fiquei encantada com a escola. Fomos muito bem recebidas e todas as minhas dúvidas foram esclarecidas. No primeiro dia da Isa na escola eu me senti deixando ela na casa dos vovós dela! A comunicação com a escola e o acesso a ela é extremamente facilitado. A alimentação e limpeza é impecável. As atividades propostas são incríveis e o trabalho das professoras é maravilhoso!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
    }
  ]

  const activities = [
    {
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      title: "Arte e Criatividade",
      description: "Ateliês de pintura, desenho e expressão artística"
    },
    {
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop",
      title: "Brincadeiras Livres",
      description: "Espaços para exploração e descobertas naturais"
    },
    {
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
      title: "Música e Movimento",
      description: "Atividades rítmicas e expressão corporal"
    },
    {
      image: "https://cursodecontacaodehistoria.com.br/wp-content/uploads/2023/12/contar-historia-e-magico-1024x560.png",
      title: "Contação de Histórias",
      description: "Momentos mágicos de literatura infantil"
    },
    {
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
      title: "Culinária Infantil",
      description: "Preparando lanches saudáveis e divertidos"
    },
    {
      image: "https://assets.isu.pub/document-structure/230124214355-4bcc33712d083a35a27b33979266cd34/v1/a495e878ae4e2075644d762c89a9c6fb.jpeg",
      title: "Natureza e Jardim",
      description: "Conexão com o meio ambiente e sustentabilidade"
    }
  ]

  // Auto-slide para hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  // Auto-slide para depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Funções do carrossel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }
  
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleContactSubmit = () => {
    alert('Obrigado pelo interesse! Em breve entraremos em contato. 📞✨')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=128,fit=crop,q=95/YBgp3ZwxQzSMVqMJ/design-sem-nome-9-mxB7QjQyqbFp2GPy.png" 
                  alt="Logo Ateliê Baobá"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-orange-600">Ateliê Baobá</h1>
                <p className="text-sm text-gray-600">Escola Infantil</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#sobre" className="text-gray-700 hover:text-orange-600 transition-colors">Sobre</a>
              <a href="#atividades" className="text-gray-700 hover:text-orange-600 transition-colors">Atividades</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-orange-600 transition-colors">Depoimentos</a>
              <a href="#contato" className="text-gray-700 hover:text-orange-600 transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
              {/* Overlay mais escuro para melhor contraste */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            {/* Título com sombra e fundo semitransparente para mais contraste */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-shadow-lg">
                Um Ateliê de <span className="text-yellow-300">Descobertas</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-shadow">
                Onde o brincar livre, as artes e a alimentação saudável são prioridades.
                <br />
                <span className="text-yellow-200 font-semibold">Acolhendo com Amor crianças e bebês de 0 a 6 anos.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center text-lg bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 mr-2" />
                Bairro São José - São Leopoldo/RS
              </div>
              
              {/* Botão Fale Conosco */}
              <a 
                href="#contato"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Fale Conosco</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-4 transition-all duration-300 backdrop-blur-sm shadow-lg z-20"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-4 transition-all duration-300 backdrop-blur-sm shadow-lg z-20"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Nossa Filosofia Section */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-orange-400 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa <span className="text-yellow-200">Filosofia</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Na Escola Ateliê Baobá, acreditamos que cada criança é única e merece um ambiente 
              acolhedor onde possa explorar, criar e descobrir o mundo ao seu próprio ritmo.
            </p>
          </div>

          {/* Grid com layout inspirado na imagem */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Artes */}
            <div className="text-center">
              <div className="relative mb-8">
                <div 
                  className="w-80 h-60 mx-auto rounded-full overflow-hidden transform rotate-12 shadow-2xl"
                  style={{
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop" 
                    alt="Criança pintando"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Linha pontilhada conectora */}
                <div className="hidden md:block absolute top-1/2 -right-16 w-32">
                  <svg className="w-full h-4" viewBox="0 0 100 20">
                    <path
                      d="M5,10 Q50,5 95,10"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      fill="none"
                      opacity="0.7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-4">Artes</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Através das artes visuais, música, dança, literatura e teatro, as crianças 
                desenvolvem habilidades essenciais como imaginação, simbolismo, criatividade e pesquisa.
              </p>
            </div>

            {/* Acolhimento */}
            <div className="text-center">
              <div className="relative mb-8">
                <div 
                  className="w-80 h-60 mx-auto rounded-full overflow-hidden transform -rotate-6 shadow-2xl"
                  style={{
                    borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%'
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop" 
                    alt="Bebê sorrindo"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Linha pontilhada conectora */}
                <div className="hidden md:block absolute top-1/2 -right-16 w-32">
                  <svg className="w-full h-4" viewBox="0 0 100 20">
                    <path
                      d="M5,10 Q50,15 95,10"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      fill="none"
                      opacity="0.7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-4">Acolhimento</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Sabemos da importância do amor e por isso priorizamos o afeto para o 
                desenvolvimento saudável das crianças na escola.
              </p>
            </div>

            {/* Alimentação */}
            <div className="text-center">
              <div className="relative mb-8">
                <div 
                  className="w-80 h-60 mx-auto rounded-full overflow-hidden transform rotate-6 shadow-2xl"
                  style={{
                    borderRadius: '70% 30% 40% 60% / 30% 60% 70% 40%'
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop" 
                    alt="Crianças cozinhando"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-4">Alimentação</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Alimentos orgânicos e sem açúcar são as principais escolhas na hora de 
                criarmos nosso cardápio.
              </p>
            </div>
          </div>

          {/* Segunda linha */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Ar Livre */}
            <div className="text-center">
              <div className="relative mb-8">
                <div 
                  className="w-80 h-60 mx-auto rounded-full overflow-hidden transform -rotate-12 shadow-2xl"
                  style={{
                    borderRadius: '50% 50% 30% 70% / 30% 70% 50% 50%'
                  }}
                >
                  <img 
                    src="https://escolaexperimental.com.br/wp-content/uploads/2024/05/Escola_Experimental_Escola_Construtivista_em_salvador_Natureza_na_educacao_infantil.png" 
                    alt="Criança brincando ao ar livre"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Linha pontilhada conectora */}
                <div className="hidden md:block absolute top-1/2 -right-16 w-32">
                  <svg className="w-full h-4" viewBox="0 0 100 20">
                    <path
                      d="M5,10 Q50,5 95,10"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      fill="none"
                      opacity="0.7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-4">Ar Livre</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Desde o berçário, priorizamos essa prática, desafiando os pequenos a 
                vivenciarem o mundo além das paredes.
              </p>
            </div>

            {/* Natureza */}
            <div className="text-center">
              <div className="relative mb-8">
                <div 
                  className="w-80 h-60 mx-auto rounded-full overflow-hidden transform rotate-3 shadow-2xl"
                  style={{
                    borderRadius: '60% 40% 60% 40% / 70% 30% 70% 30%'
                  }}
                >
                  <img 
                    src="https://escoladainteligencia.com.br/wp-content/uploads/2021/02/5-beneficios-de-praticar-atividades-ao-ar-livre-com-as-criancas-Blog.jpg" 
                    alt="Crianças em atividades na natureza"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Linha pontilhada conectora */}
                <div className="hidden md:block absolute top-1/2 -right-16 w-32">
                  <svg className="w-full h-4" viewBox="0 0 100 20">
                    <path
                      d="M5,10 Q50,15 95,10"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      fill="none"
                      opacity="0.7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-4">Natureza</h3>
              <p className="text-lg leading-relaxed opacity-90">
                O contato com a natureza começa com nossos brinquedos feitos de 
                madeira e tecido, substituindo o plástico, além de brincar mais ao ar livre.
              </p>
            </div>

            {/* Pedagógico */}
            <div className="text-center">
              <div className="relative mb-8">
                <div 
                  className="w-80 h-60 mx-auto rounded-full overflow-hidden transform -rotate-3 shadow-2xl"
                  style={{
                    borderRadius: '40% 60% 50% 50% / 60% 40% 70% 30%'
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop" 
                    alt="Educadora com criança"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-4">Pedagógico</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Pedagoga e mestre em educação, nossa diretora Alessandra é a força 
                por trás da metodologia inovadora que guia nossa escola.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section id="atividades" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nossas <span className="text-orange-600">Atividades</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiências ricas e diversificadas que estimulam o desenvolvimento integral das crianças
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              O que as <span className="text-orange-600">Famílias</span> Dizem
            </h2>
            <p className="text-xl text-gray-600">
              Depoimentos reais de pais que confiam em nosso trabalho
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12 text-center shadow-lg">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-orange-600 to-yellow-500 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-20 h-20 bg-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Venha nos <span className="text-yellow-200">Conhecer</span>
            </h2>
            <p className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed text-white">
              Agende uma visita e conheça nossa proposta pedagógica única. 
              <br className="hidden md:block" />
              Será um prazer receber você e sua família em nosso ateliê de descobertas! ✨
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Informações de contato */}
            <div className="space-y-8">
              <div className="text-center lg:text-left mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  📍 Nossa Localização
                </h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  Estamos localizados em um ambiente acolhedor e seguro, 
                  especialmente pensado para o desenvolvimento das crianças.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Endereço</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Bairro São José<br />
                    São Leopoldo/RS
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Telefone</h4>
                  <p className="text-white/90 text-sm">
                    <a href="tel:+5551999999999" className="hover:text-yellow-200 transition-colors">
                      (51) 9999-9999
                    </a>
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">E-mail</h4>
                  <p className="text-white/90 text-sm">
                    <a href="mailto:contato@ateliebaoba.com.br" className="hover:text-yellow-200 transition-colors">
                      contato@ateliebaoba.com.br
                    </a>
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Faixa Etária</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Crianças e bebês<br />
                    de 0 a 6 anos
                  </p>
                </div>
              </div>

              {/* Horários e informações extras */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mt-8">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">
                  🕐 Horário de Atendimento
                </h4>
                <div className="space-y-4 text-white/90">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Segunda a Sexta:</span>
                    <span>7h30 às 18h30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Visitas:</span>
                    <span>Agendamento prévio</span>
                  </div>
                  <div className="border-t border-white/20 pt-4 mt-4">
                    <p className="text-center text-sm opacity-90">
                      💡 <strong>Dica:</strong> Visitas são mais produtivas no período da manhã, 
                      quando as crianças estão mais ativas!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário de contato melhorado */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    📅 Agende sua Visita
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Preencha os dados abaixo e entraremos em contato 
                    em até 24 horas para agendar sua visita!
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Nome dos Pais *
                      </label>
                      <input
                        type="text"
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 rounded-xl bg-white/25 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        placeholder="(51) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-white/25 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Nome da Criança *
                      </label>
                      <input
                        type="text"
                        placeholder="Nome do pequeno(a)"
                        className="w-full px-4 py-3 rounded-xl bg-white/25 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 text-sm font-medium mb-2">
                        Idade da Criança *
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl bg-white/25 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all">
                        <option value="" className="text-gray-800">Selecione a idade</option>
                        <option value="0-6meses" className="text-gray-800">0 a 6 meses</option>
                        <option value="6-12meses" className="text-gray-800">6 meses a 1 ano</option>
                        <option value="1-2anos" className="text-gray-800">1 a 2 anos</option>
                        <option value="2-3anos" className="text-gray-800">2 a 3 anos</option>
                        <option value="3-4anos" className="text-gray-800">3 a 4 anos</option>
                        <option value="4-5anos" className="text-gray-800">4 a 5 anos</option>
                        <option value="5-6anos" className="text-gray-800">5 a 6 anos</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/25 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">
                      Mensagem (opcional)
                    </label>
                    <textarea
                      placeholder="Conte-nos suas expectativas, dúvidas ou algo específico que gostaria de saber..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/25 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent resize-none transition-all"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleContactSubmit}
                    className="w-full bg-white text-orange-600 font-bold py-4 px-6 rounded-xl hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-lg"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Agendar Visita Agora</span>
                  </button>

                  <p className="text-white/70 text-sm text-center mt-4">
                    📞 Resposta garantida em até 24h • 🔒 Seus dados estão seguros
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action adicional - versão discreta */}
          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-3xl mx-auto">
              <h4 className="text-xl font-bold text-white mb-4">
                ⭐ Por que escolher o Ateliê Baobá?
              </h4>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-200">👶</span>
                  <span className="text-white/90">Cuidado Individualizado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-200">🎨</span>
                  <span className="text-white/90">Metodologia Única</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-200">🌱</span>
                  <span className="text-white/90">Ambiente Saudável</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=128,fit=crop,q=95/YBgp3ZwxQzSMVqMJ/design-sem-nome-9-mxB7QjQyqbFp2GPy.png" 
                alt="Logo Ateliê Baobá"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Escola Ateliê Baobá</h3>
              <p className="text-gray-400">Acolhendo com Amor</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Bairro São José - São Leopoldo/RS
          </p>
          <p className="text-gray-500">
            © 2025 Escola Ateliê Baobá. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}