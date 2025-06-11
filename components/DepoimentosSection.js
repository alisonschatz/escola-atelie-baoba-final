'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

export default function DepoimentosSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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

  // Auto-slide para depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-12 text-center shadow-xl border border-orange-100">
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
  )
}