import Header from './Header'
import HeroSection from './HeroSection'
import NossaFilosofia from './NossaFilosofia'
import AtividadesSection from './AtividadesSection'
import DepoimentosSection from './DepoimentosSection'
import ContatoSection from './ContatoSection'
import Footer from './Footer'

export default function EscolaAtelieBaoba() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Header />
      <HeroSection />
      <NossaFilosofia />
      <AtividadesSection />
      <DepoimentosSection />
      <ContatoSection />
      <Footer />
    </div>
  )
}