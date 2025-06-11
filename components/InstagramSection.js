'use client'

import { useEffect } from 'react'
import { Instagram } from 'lucide-react'

export default function InstagramSection() {
  useEffect(() => {
    // Carrega o script do Instagram apenas uma vez
    if (!window.instgrm) {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.onload = () => {
        // Processa embeds após carregamento
        if (window.instgrm) {
          window.instgrm.Embeds.process()
          
          // Aguarda um pouco para o Instagram carregar completamente
          setTimeout(() => {
            cleanInstagramPosts()
          }, 2000)
          
          // Remove elementos a cada 3 segundos caso novos apareçam
          const interval = setInterval(cleanInstagramPosts, 3000)
          
          // Cleanup do interval após 30 segundos
          setTimeout(() => clearInterval(interval), 30000)
        }
      }
      document.body.appendChild(script)
    } else {
      window.instgrm.Embeds.process()
      setTimeout(() => {
        cleanInstagramPosts()
      }, 1000)
    }

    // Função para limpar elementos indesejados
    function cleanInstagramPosts() {
      const iframes = document.querySelectorAll('.instagram-media iframe')
      
      iframes.forEach(iframe => {
        try {
          // Tenta acessar o conteúdo do iframe (pode não funcionar por CORS)
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
          
          if (iframeDoc) {
            // Remove elementos dentro do iframe
            const elementsToRemove = [
              '[aria-label*="curtidas"]',
              '[aria-label*="likes"]', 
              '[aria-label*="comentário"]',
              '[aria-label*="comment"]',
              '[data-testid="like-button"]',
              '[data-testid="save-button"]',
              '[data-testid="comment-button"]',
              '[data-testid="share-button"]',
              'footer',
              '[role="contentinfo"]',
              'section:last-child',
              'div:has(button[aria-label*="Curtir"])',
              'div:has(svg)',
              'button',
              'input[placeholder*="comentário"]',
              'input[placeholder*="comment"]'
            ]
            
            elementsToRemove.forEach(selector => {
              const elements = iframeDoc.querySelectorAll(selector)
              elements.forEach(el => {
                if (el && el.parentNode) {
                  el.parentNode.removeChild(el)
                }
              })
            })
          }
        } catch (e) {
          // CORS blocking - normal para iframes do Instagram
          console.log('Instagram iframe protegido por CORS - isso é normal')
        }
      })
      
      // Remove elementos fora do iframe também
      const externalElements = document.querySelectorAll(`
        .instagram-media [aria-label*="curtidas"],
        .instagram-media [aria-label*="likes"],
        .instagram-media [aria-label*="comentário"],
        .instagram-media [aria-label*="comment"],
        .instagram-media footer,
        .instagram-media section:last-child,
        .instagram-media button,
        .instagram-media input
      `)
      
      externalElements.forEach(el => {
        if (el && el.parentNode) {
          el.style.display = 'none'
          el.parentNode.removeChild(el)
        }
      })
    }

    // CSS ainda mais agressivo
    const style = document.createElement('style')
    style.textContent = `
      /* Remove TUDO que não seja imagem/vídeo */
      .instagram-media * {
        display: none !important;
      }
      
      /* Mostra apenas imagens e vídeos */
      .instagram-media img,
      .instagram-media video,
      .instagram-media iframe {
        display: block !important;
      }
      
      /* Estilo do container */
      .instagram-media {
        border-radius: 20px !important;
        overflow: hidden !important;
        border: 3px solid #f97316 !important;
        box-shadow: 0 8px 25px rgba(249, 115, 22, 0.15) !important;
        transform: scale(1.05) !important;
        background: #fff !important;
        padding: 8px !important;
        position: relative !important;
      }
      
      /* Bordas internas */
      .instagram-media iframe {
        border-radius: 16px !important;
        width: 100% !important;
        height: 400px !important;
        border: none !important;
      }
      
      /* Hover effect */
      .instagram-media:hover {
        transform: scale(1.08) !important;
        box-shadow: 0 12px 35px rgba(249, 115, 22, 0.25) !important;
        transition: all 0.3s ease !important;
      }
      
      /* Remove interações */
      .instagram-media * {
        pointer-events: none !important;
        user-select: none !important;
      }
      
      /* Força altura específica para cortar elementos indesejados */
      .instagram-media {
        max-height: 450px !important;
        overflow: hidden !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  const openInstagram = () => {
    window.open('https://www.instagram.com/ateliebaobaeducacaoinfantil/', '_blank')
  }

  return (
    <section id="instagram" className="py-16" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div>
              <h3 className="text-3xl font-bold">
                <span className="text-gray-800">Nossos </span>
                <span className="text-orange-500">Momentos</span>
              </h3>
              <p className="text-gray-600 mt-1">@ateliebaobaeducacaoinfantil</p>
            </div>
          </div>
        </div>

        {/* Posts do Instagram - Estilo Gordinho */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Post 1 */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/p/DH3ee30svxH/"
                  data-instgrm-version="14"
                  style={{ 
                    background: '#FFF',
                    border: 0,
                    borderRadius: '20px',
                    boxShadow: '0 8px 25px rgba(249, 115, 22, 0.15)',
                    margin: '0',
                    maxWidth: '100%',
                    minWidth: '320px',
                    padding: '8px',
                    width: '100%',
                    transform: 'scale(1.05)'
                  }}
                />
              </div>
            </div>

            {/* Post 2 */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/p/DJr4ftvN0Wl/"
                  data-instgrm-version="14"
                  style={{ 
                    background: '#FFF',
                    border: 0,
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    margin: '0',
                    maxWidth: '100%',
                    minWidth: '280px',
                    padding: 0,
                    width: '100%'
                  }}
                />
              </div>
            </div>

            {/* Post 3 */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/p/DKrt0xoJKlR/"
                  data-instgrm-version="14"
                  style={{ 
                    background: '#FFF',
                    border: 0,
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    margin: '0',
                    maxWidth: '100%',
                    minWidth: '280px',
                    padding: 0,
                    width: '100%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={openInstagram}
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Seguir no Instagram
          </button>
        </div>
      </div>
    </section>
  )
}