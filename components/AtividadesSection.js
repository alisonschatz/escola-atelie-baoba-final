export default function AtividadesSection() {
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

  return (
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
  )
}